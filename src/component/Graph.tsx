import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface GraphData {
  nodes: string[];
  links: { source: string; target: string; weight: number }[];
}

interface GraphProps {
  data: GraphData;
}

const Graph = ({ data }: GraphProps) => {
  const graphRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (graphRef.current) {
      const svg = d3.select(graphRef.current);

      // Set up the simulation
      const simulation = d3
        .forceSimulation()
        .force("link", d3.forceLink(data.links))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter());

      // Create links
      const links = svg
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke", "gray")
        .style("stroke-width", (d) => d.weight);

      // Create nodes
      const nodes = svg
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("fill", "steelblue");

      // Update simulation on each tick
      simulation.on("tick", () => {
        links
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        nodes.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      });
    }
  }, [data]);

  return <svg ref={graphRef} />;
};

export default Graph;

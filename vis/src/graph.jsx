import React, { Component } from "react"
import * as d3 from "d3"

class Graph extends Component {
    componentWillReceiveProps(props) {
        const graph = props.graph
        const graphSVG = d3.select("#graph")
        const padding = 100
        const width = graphSVG.node().parentNode.clientWidth
        graphSVG.attr("width", width).attr("height", width)
        const simulation = d3
            .forceSimulation()
            .force(
                "link",
                d3.forceLink().id(function(d) {
                    return d.id
                })
            )
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, width / 2))

        simulation.nodes(graph.nodes).on("tick", ticked)
        console.log(graph)
        simulation.force("link").links(graph.links)
        const link = graphSVG
            .append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter()
            .append("line")
            .attr("stroke", "#d9dde2")
        const node = graphSVG
            .append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter()
            .append("circle")
            .attr("r", 5)
        function ticked() {
            let max = {}
            let min = {}
            max.x = d3.max(graph.nodes, n => n.x)
            max.y = d3.max(graph.nodes, n => n.y)
            min.x = d3.min(graph.nodes, n => n.x)
            min.y = d3.min(graph.nodes, n => n.y)
            const xScale = d3
                .scaleLinear()
                .domain([min.x, max.x])
                .range([padding, width - padding])
            const yScale = d3
                .scaleLinear()
                .domain([min.y, max.y])
                .range([padding, width - padding])
            link.attr("x1", function(d) {
                return xScale(d.source.x)
            })
                .attr("y1", function(d) {
                    return yScale(d.source.y)
                })
                .attr("x2", function(d) {
                    return xScale(d.target.x)
                })
                .attr("y2", function(d) {
                    return yScale(d.target.y)
                })
            node.attr("cx", function(d) {
                return xScale(d.x)
            }).attr("cy", function(d) {
                return yScale(d.y)
            })
        }
    }
    render() {
        return <svg id="graph" />
    }
}

export default Graph

import React from "react"
import * as d3 from "d3"
import "./App.css"
import { Col, Row } from "antd"
import Snapshots from "./snapshots"
import Graph from "./graph"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            snapshots: [],
            graph: {}
        }
    }

    componentDidMount() {
        d3.json("./test_data.json").then(snapshots => {
            this.setState({
                snapshots: snapshots,
                graph: snapshots[0].graph
            })
        })
    }

    render() {
        const snapshots = this.state.snapshots
        const graph = this.state.graph
        return (
            <div className="App">
                <Row>
                    <Col span={12}>
                        <Snapshots snapshots={snapshots} />
                    </Col>
                    <Col span={12}>
                        <Graph graph={graph} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App

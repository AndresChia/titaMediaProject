import React, { Component } from 'react'
import Header from "./header/header";
import Slider from "./slider/slider";
import Body from "./body/body";

import { getData } from '../services/apiDb';


export default class Home extends Component {


    constructor(args) {
        super(args)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getData().then((data) => {
            this.setState({ data })
        })
    }



    render() {
        return (
            <div>
                <Header />
                {this.state.data.length > 0 ? <Slider data={this.state.data} /> : null}
                <Body />
            </div>
        )
    }
}

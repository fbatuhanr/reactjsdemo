import React, { Component } from 'react'

class Test extends Component {

    constructor(props){
        super(props);

        this.state = {
            a:10
        }
        console.log("constructor");
    }
    componentDidMount() {
        console.log("Component Did Mount");
        this.setState({
            a:20
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update");
        return true;
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    
    
    

    render() {
        console.log("render")
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;
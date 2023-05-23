import React from 'react';


class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time : new Date()};

    }
    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            time: new Date(),
        });
    }
    clockIn = () =>{
        this.setState({
            timeIn: this.state.time.toLocaleString(),
            timeIndata: this.state.time,
            timeOut: "clock out after",
            difference: 0 + "s",
        });
    }
    clockOut = () =>{
        var timecheck = this.state.timeIn;
        if(timecheck === undefined){
            return(alert("Time in first"))
        }
        else{   
        this.setState({
            difference: Math.round((this.state.time - this.state.timeIndata)/1000) + "s",
            timeOut: this.state.time.toLocaleString(), 
        });
        }
        }
    render(){
        return(
            <div>
            <h3>Date: {this.state.time.toLocaleDateString()}</h3>
            <h3>Time: {this.state.time.toLocaleTimeString()}</h3>
            <p>Time In: <strong>{this.state.timeIn}</strong></p>
            <button onClick={this.clockIn}>Time in</button>
            <p>Time Out: <strong>{this.state.timeOut}</strong> | Elapsed Time: <strong>{this.state.difference}</strong></p>
            <button onClick={this.clockOut}>Time Out</button>
          </div>  
        );
    }
    
}

export default Clock;
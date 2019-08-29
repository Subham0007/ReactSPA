import React,{Component} from 'react';
export class CarDetails extends Component{
    componentDidMount(){
        const {match:{params}}=this.props;
        alert("details of car for ID :"+this.props.match.params.carId)
    }
    render(){
        return(
            <div>
                <h1>Display the Car details after making ajax calls</h1>
            </div>
        );
    }
}
import React,{Component} from 'react';

export class Login extends Component{
    constructor(props){
            super(props)
    }
    handleLogin(event){
        event.preventDefault()
        alert("Thanks for submitting")
        this.props.history.push('/cars')
    }
    render(){
        return(
            <div>
                <h2>Login from</h2>
                <form className="container bg-danger"
                onSubmit={(e)=>this.handleLogin(e)}/>
                User Name : <input type="text" value="Subham" />
                 <br /><br />
                Password : <input type="password" value="welcome" />
                 <br />
                <input type="submit" className="btn btn-primary" 
                value="Login"/>
            </div>
        );
    }
}
import React,{Component} from 'react';
import './App.css';
import {Layout} from './components/Layout'
import {Heading} from './components/Heading'
import {Footer} from './components/Footer'

class App extends Component {
  render(){
    return (
      <div className="App">
           <Heading/>
              <div>
              <Layout />
             </div>
           <Footer/>
      </div>
    );
  }
  
}

export default App;

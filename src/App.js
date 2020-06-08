import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import { apiKey } from "./Components/config";
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Filter from './Components/Filter';

const options = [
  'Abbotsford', 'Carlton', 'Collingwood', 'Fitzroy', 'Melbourne CBD', 'Northcote', 'Preston', 'Richmond', 'South Melbourne', 'South Yarra', 'etc'
];
const apiKey = process.env.REACT_APP_AUTH_TOKEN;

export default class App extends Component {
 
  state = {
    chef: null
  }
  
  
  componentDidMount() {
  
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${options[3]}`, 
    {headers: {
       Authorization: `Bearer ${apiKey}`
    }}).then(res =>{      
        const chef = res.data;
        console.log(chef)
        this.setState({chef: chef.businesses});
        
    }) .catch((err) => {
      console.log ('error')
    })
  }
  

  getInfo = (selected) => {
    console.log(selected)
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${selected.value}`, 
       {headers: {
          Authorization: `Bearer ${apiKey}`
       }}).then(res =>{
           const chef = res.data;
           this.setState({chef: chef.businesses});
           
       }).catch((err) => {
        console.log ('error')
        })
}

  render() {
    if(this.state.chef===null){
      return (
      <div className="App-header App">
        Loading...
      </div>)
    }else{
    return (
      <div>
        <Header/>
          
        <Filter
        chef = {this.state.chef}
        getInfo={this.getInfo}/>
        <div id="Download" className="download">
            <Form/>
        </div>
        <Footer/>
      </div>
    )}
  }
}
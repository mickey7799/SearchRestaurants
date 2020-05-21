import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Company from './Components/Company';

import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Filter from './Components/Filter';

const options = [
  'Abbotsford', 'Carlton', 'Collingwood', 'Fitzroy', 'Melbourne CBD', 'Northcote', 'Preston', 'Richmond', 'South Melbourne', 'South Yarra', 'etc'
];

export default class App extends Component {
 
  state = {
    chef: null
  }
  
  
  
  componentDidMount() {
    axios.get(`https://api.staging.hfg.clients.pipelabs.com.au/trending-venues?suburb=${options[3]}%20VIC%20Australia`,
    { headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTIxYjUzNTEzYmY4YzM2OThjZWY5NiIsImVtYWlsIjoibWF0dEBwaXBlbGFicy5jb20uYXUiLCJmaXJzdE5hbWUiOiJNYXR0IiwibGFzdE5hbWUiOiJIYXl3YXJkIiwiZnVsbE5hbWUiOiJNYXR0IEhheXdhcmQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE1NDk2ODk3NjcsImV4cCI6MTU4MTIyNTc2N30.gn97HUgo9jAOs1Mr9L_AQFaHTzXzykv_PXLuBh_i26k'} })
    .then(res => {
      const chef = res.data;
      this.setState({ chef });
    })


    
    // axios.get(`https://api.staging.hfg.clients.pipelabs.com.au/recommendation?skip=0&limit=3`,
    //   { headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTIxYjUzNTEzYmY4YzM2OThjZWY5NiIsImVtYWlsIjoibWF0dEBwaXBlbGFicy5jb20uYXUiLCJmaXJzdE5hbWUiOiJNYXR0IiwibGFzdE5hbWUiOiJIYXl3YXJkIiwiZnVsbE5hbWUiOiJNYXR0IEhheXdhcmQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE1NDk2ODk3NjcsImV4cCI6MTU4MTIyNTc2N30.gn97HUgo9jAOs1Mr9L_AQFaHTzXzykv_PXLuBh_i26k'} })
    //   .then(res => {
    //     const chef = res.data;
    //     this.setState({ chef: chef.recommendations });
    //     console.log(chef.recommendations);
    //   })
  }


  getInfo = (selected) => {
    console.log(selected)
    axios.get(`https://api.staging.hfg.clients.pipelabs.com.au/trending-venues?suburb=${selected.value}%20VIC%20Australia`,
    { headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTIxYjUzNTEzYmY4YzM2OThjZWY5NiIsImVtYWlsIjoibWF0dEBwaXBlbGFicy5jb20uYXUiLCJmaXJzdE5hbWUiOiJNYXR0IiwibGFzdE5hbWUiOiJIYXl3YXJkIiwiZnVsbE5hbWUiOiJNYXR0IEhheXdhcmQiLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE1NDk2ODk3NjcsImV4cCI6MTU4MTIyNTc2N30.gn97HUgo9jAOs1Mr9L_AQFaHTzXzykv_PXLuBh_i26k'} })
    .then(res => {
    const chef = res.data;
    this.setState({ chef: chef });
    console.log(chef);
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
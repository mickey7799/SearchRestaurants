import React, { Component } from 'react';
import Search from './Search';
import Chef from './Chef';

export default class Filter extends Component{
    
    render(){
        const { chef, getInfo } = this.props;
       
        return (
    <div className="search-container w-container">
            <h2 className="h2 search">Search for Restaurants in <br/></h2>
            <Search
            getInfo={getInfo}/>
            <div className="all-container">
          
            {chef.slice(0, 6).map(({id, alias, name, image_url, rating, review_count, categories}) => (
                <Chef 
                key = {id}
                name= {name}
                profileUrl= {image_url}
                url={image_url}  
                venue={alias}
                rating ={rating}
                review_count = {review_count}
                categories = {categories}
                />
            ))}
            
            </div>

    </div>
        );
    }
}
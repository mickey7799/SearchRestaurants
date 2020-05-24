import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

export default class Chef extends Component {

    render(){
        const { profileUrl, name, url, venue, rating, review_count, categories  } = this.props;
        

        return (
            
            
                <div className="expert-card">
                    <div className="expert-wrapper">                   
                        <div className="profile-pic" style={{ backgroundImage: `url("${profileUrl}")`}} />                    
                        <div className="expert-info-card">
                            <div className="expert-info name">
                            <strong className="bold-text">{name}</strong>
                            </div>
                            <div className="expert-info">
                            Food expert of
                            <span className="venue text-span-2"> {categories[0].title} </span>
                            </div>
                        </div>

                    </div>
                    <div className="recommendation-wrapper">
                        
                        <div className="comment">
                        <LinesEllipsis
                        text= {'This fantastic restaurant is a '+ categories[0].title +' restaurant! It received ' + review_count + ' reviews and got a rating of '+rating + ". Come and try it!"}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        
                        />
                        </div>
                        
                       
                        
                        <div className="food-image" style={{ backgroundImage: `url("${url  }")`}} />                    
                       
                        
                        
                    </div>
               </div> 
            
        );
    }
}
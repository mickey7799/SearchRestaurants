import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

export default class Chef extends Component {

    render(){
        const { profileUrl, name, comment, url, className, website, venue } = this.props;
        

        return (
            
            
                <div className="expert-card">
                    <div className="expert-wrapper">                   
                        <div className="profile-pic" style={{ backgroundImage: `url("${profileUrl || 'https://imageproxy.staging.hfg.clients.pipelabs.com.au/128x128/https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' }")`}} />                    
                        <div className="expert-info-card">
                            <div className="expert-info name">
                            <strong className="bold-text">{name}</strong>
                            </div>
                            <div className="expert-info">
                            Head Chef of  
                            <span className="venue text-span-2"> Hood Food Guide </span>
                            </div>
                        </div>

                    </div>
                    <div className="recommendation-wrapper">
                        <div className="recommended-venue">recommends 
                        <span className="recommended-name text-span-3"> {venue}</span>
                        </div>
                        <div className="comment">
                        <LinesEllipsis
                        text= {comment}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        
                        />
                        </div>
                        {/* <p className="comment">
                            "{comment}"
                        </p>  */}
                       
                        
                        <div className="food-image" style={{ backgroundImage: `url("${url  }")`}} />                    
                       
                        
                        
                    </div>
               </div> 
            
        );
    }
}
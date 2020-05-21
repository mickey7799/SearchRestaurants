import React, { Component } from 'react';
import Search from './Search';
import Chef from './Chef';

export default class Filter extends Component{
    render(){
        const { chef, getInfo } = this.props;
        console.log(chef)
        return (
    <div className="search-container w-container">
            <h2 className="h2 search">Search for expert recommendations in <br/></h2>
            <Search
            getInfo={getInfo}/>
            <div className="all-container">
            {chef.slice(0, 3).map(({photos, about, name}) => (
                <Chef 
                name= {name}
                profileUrl= {photos[0].url}
                comment={about}
                url={photos[0].url}  
                venue={name}
                />
            ))}
              {/* <Chef 
              name= {chef[0].owner.fullName}
              
              profileUrl= {chef[0].owner.profilePicture}
              comment={chef[0].about}
              url={chef[0].owner.profilePicture}  
              
              venue={chef[0].name}
              />
              <Chef 
              name= {chef[1].owner.fullName}
              
              profileUrl= {chef[1].owner.profilePicture}
              comment={chef[1].about}
              url={chef[1].owner.profilePicture}  
              
              venue={chef[1].name}
              />
              <Chef 
              name= {chef[0].owner.fullName}
              
              profileUrl= {chef[0].owner.profilePicture}
              comment={chef[0].about}
              url={chef[0].owner.profilePicture}  
               
              venue={chef[0].name}
              /> */}
            
            </div>

    </div>
        );
    }
}
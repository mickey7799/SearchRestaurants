import React, { Component } from 'react';
import Search from './Search';
import Chef from './Chef';

export default class Filter extends Component {

    render() {
        const { chef, getInfo } = this.props;
        const images = ['child.svg', 'costume.svg', 'girl.svg', 'people.svg', 'person.svg', 'woman.svg'];
        let i = 0;
        let chefs = chef.map(chef => {
            chef.profile = images[i];
            i++;
            return chef;
        })


        return (
            <div className="search-container w-container">
                <h2 className="h2 search">Search for Restaurants in <br /></h2>
                <Search
                    getInfo={getInfo} />
                <div className="all-container">

                    {chefs.slice(0, 6).map(({ id, alias, name, image_url, rating, review_count, categories, profile }) => (
                        <Chef
                            key={id}
                            name={name}
                            profileUrl={image_url}
                            url={image_url}
                            venue={alias}
                            rating={rating}
                            review_count={review_count}
                            categories={categories}
                            profile={profile}
                        />
                    ))}

                </div>

            </div>
        );
    }
}
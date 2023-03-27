import { trendingMovies } from '@/api/apiConfict';
import React from 'react';
import ListSlider from '../list-slider';

const TrendingMovies = () => {
    return (
        <ListSlider title={'Trending Movies'}>
            {trendingMovies.map((items) => (
                <div key={items.index} className="p-3 m-3">
                    <img src={items.imgThumbnail} className="rounded-3xl my-3" alt="ImageMovies" />
                    <h3 className="text-white font-medium">{items.title}</h3>
                </div>
            ))}
        </ListSlider>
    );
};
export default TrendingMovies;

import { bestMovies } from '@/api/apiConfict';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import LayoutSection from '../layout-section';
import { IoPlayCircle } from 'react-icons/io5';

const BestSeller = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
    };
    return (
        <LayoutSection className="mb-11">
            <Slider {...settings}>
                {bestMovies.map((items) => (
                    <div key={items.index}>
                        <div className="footer-bestMovies"></div>
                        <div className="relative slider flex justify-around items-center" style={{ backgroundImage: `url("${items.imgBackground}")` }}>
                            <div className="px-10 w-3/6">
                                <h2 className="md:text-7xl font-bold text-white delay-75">{items.title}</h2>
                                <p className="mt-[48px] text-white delay-75">{items.description}</p>
                                <button className="btn bg-red-default text-white mr-3 mt-5 border-red-default shadow-lg hover:shadow-red-500/50">
                                    Watch Now <IoPlayCircle className="inline" />
                                </button>
                                <button className="btn text-white border-white border hover:shadow-blue-500/50 hover:bg-white hover:text-red-default">Watch Trailer</button>
                            </div>
                            <img className="rounded-3xl w-[400px] h-full" src={items.imgThumbnail} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </LayoutSection>
    );
};
export default BestSeller;

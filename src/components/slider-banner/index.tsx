import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import LayoutSection from '../layout-section';
const BannerSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <LayoutSection>
            <div className="grid grid-cols-12 gap-4">
                {/* MENNU */}
                <div className="col-span-3 bg-white rounded-md">Mennu</div>
                {/* Slider center */}
                <div className="col-span-6 bg-white rounded-md">
                    <Slider {...settings}>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                <Image src="/image/38598.jpg" width={1000} height={1000} alt={''} className="w-full h-full rounded-md" />
                            </h3>
                        </div>
                    </Slider>
                </div>
                <div className="col-span-3 bg-white rounded-md">New Productd</div>
            </div>
            <div className="grid grid-cols-12 gap-4 my-3 rounded-md">
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 1 </div>
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 2 </div>
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 3 </div>
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 4 </div>
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 5 </div>
                <div className="col-span-2 bg-white rounded-md h-[147px]">Bestsaller 6 </div>
            </div>
        </LayoutSection>
    );
};
export default BannerSlider;

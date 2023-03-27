import React from 'react';
import Slider from 'react-slick';
import LayoutSection from './layout-section';
import { useRouter } from 'next/router';
interface ListSliderProps extends React.PropsWithChildren<{}> {
    title: string;
    path?: string;
}
const ListSlider: React.FC<ListSliderProps> = ({ children, title, path }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        arrows: false,
    };
    const router = useRouter();
    return (
        <LayoutSection className="container mx-auto">
            <div className="flex justify-between mb-8">
                <h1 className="text-white text-2xl font-medium">{title}</h1>
                <button className="rounded-3xl px-4 font-semibold text-white border-white border hover:shadow-blue-500/50 hover:bg-white hover:text-red-default" onClick={() => router.push(`${path}`)}>
                    Xem thêm
                </button>
            </div>
            <Slider {...settings}>{children}</Slider>
        </LayoutSection>
    );
};
export default ListSlider;

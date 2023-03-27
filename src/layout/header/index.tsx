import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { menu } from '@/api/apiConfict';
import Image from 'next/image';

const Header = () => {
    const router = useRouter();
    return (
        <header
            className="
          flex flex-wrap
          items-center
          justify-between
          h-20
          fixed top-0 w-full z-10
        "
        >
            <div className="md:p-4 py-2 block text-white hover:text-red-600 font-bold text-[24px]">
                <a href="#" onClick={() => router.push('/')}>
                    Home
                </a>
            </div>
            <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                <ul
                    className="
              pt-4
              text-[24px] text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
                >
                    {menu.map((items) => (
                        <li key={items.index}>
                            <a className="py-3 block text-white hover:text-red-600 font-bold hover:border-b-2 mx-4 text-[24px]" href="#" onClick={() => router.push(items.path)}>
                                {items.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
export default Header;

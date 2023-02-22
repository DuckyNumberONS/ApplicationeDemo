import React from 'react';

const LayoutSection: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <section className="mx-auto md:w-[1500px] my-5">{children}</section>
        </>
    );
};

export default LayoutSection;

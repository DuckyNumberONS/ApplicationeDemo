import React from 'react';

const LayoutSection: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <section className="relative">{children}</section>
        </>
    );
};

export default LayoutSection;

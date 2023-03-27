import React from 'react';

interface LayoutSectionProps extends React.PropsWithChildren<{}> {
    className?: string;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ children, className }) => {
    return (
        <>
            <section className={`relative ${className}`}>{children}</section>
        </>
    );
};

export default LayoutSection;

import Footer from './footer';
import Header from './header';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

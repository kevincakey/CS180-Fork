import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer/footer';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar />

            <main className="main-content">
                {props.children}
            </main>

            <Footer/>
        </React.Fragment>
    );
}

export default Layout;
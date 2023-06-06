import React from 'react';
import NavBar from './NavBar';
import PostCard from './PostCard';
import Banner from './Banner'
import Footer from './Footer'

function Home(){
    return(
        <>
        <div>
            <NavBar />
        </div>

        <div>
            <Banner />
        </div>
        
        <div>
            <PostCard />
        </div>

        <div>
            <Footer />
        </div>
        </>
    )
}

export default Home;
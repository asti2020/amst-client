import React from 'react';
import NavBar from './NavBar';
import PostCard from './PostCard';
import Banner from './Banner'

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
            <h1>Welcome to the Home page!</h1>
        </div>
        </>
    )
}

export default Home;
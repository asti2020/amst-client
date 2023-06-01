import React from 'react';
import NavBar from './NavBar';
import PostCard from './PostCard';

function Home(){
    return(
        <>
        <div>
            <NavBar />
        </div>
        <div>
            <PostCard />
            <h1>Welcome to the Home page!</h1>
        </div>
        </>
    )
}

export default Home;
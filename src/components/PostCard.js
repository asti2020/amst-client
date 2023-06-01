import React from'react';


function PostCard(){
    return (
        <card className="p-0 m-0">
            <div className="card object-cover box-border shadow-2xl w-50 p-8 m-8">
                <h5 className="card-title">Title</h5>
                <div className="card-body">
                    <img src="https://img.freepik.com/free-vector/flat-women-s-history-month-illustration_23-2149276863.jpg"
                    className="object-fit-cover"
                    height="400px"
                    width="400px"
                    alt="{props.title}"/>
                    <p className="card-text">"This is paragraph"</p>
                    <a href="{props.link}" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </ card>
    )
}

export default PostCard;
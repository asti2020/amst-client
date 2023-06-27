function Banner(){
    return (
        <>
            <div className="p-1 m-1 ">
                {/* <div className="top-[117px] lg:top-[344px] before:content-['']"> */}
                {/* <div className="[mask-type:luminance] hover:[mask-type:alpha]"> */}
                    <div>
                    <img src="https://www.shutterstock.com/image-photo/flat-lay-home-office-desktop-260nw-1869950761.jpg"
                        alt=""
                        className="banner-image"
                        width="100%"
                    />
                
                <div className="text-end relative md:absolute">
                    <h2 className="">
                        Astika Luintel Kriti
                    </h2>
                    <p>I am a Full-Stack software engineer</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Banner
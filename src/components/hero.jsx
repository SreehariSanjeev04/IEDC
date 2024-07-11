function Hero() {
   
    return( 
        <div className="hero w-full min-h-[400px] md:h-[800px] bg-hero-color">
            <div className="text-center md:h-full md:flex items-center w-[97vw]">
            <div className="px-5 md:px-10 py-8 md:w-6/12 space-y-5">
                <h1 className="text-2xl md:text-5xl font-semibold">FREE COFFEE <br></br>IS A TAP AWAY</h1>
                <h2 className="text-md md:text-xl md:font-semibold">Join now to start earning Credits.</h2>
                <div>
                    <button className="bg-custom-light-green px-4 py-1.5 mb-3 text-white font-semibold text-lg rounded-2xl">Join Now</button>
                    <h2 className="text-lg md:text-2xl font-semibold">Or <u>join in the app</u> for the best experience</h2>
                
                
                </div>
            </div>
            </div>
        </div>
    )
}
export default Hero;
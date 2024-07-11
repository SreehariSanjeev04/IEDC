import CarouselSlider from "./components/carousel";
function Gift() {
    return (
        <>
            <h2 className="font-bold text-center md:text-left md:ml-52 text-lg mt-5">FEATURED</h2>
            <CarouselSlider id={1}/>
            <h2 className="font-bold text-center md:text-left md:ml-52 text-lg">BIRTHDAY</h2>
            <CarouselSlider id={2}/>
            <h2 className="font-bold ml-52 text-lg">THANK YOU</h2>
            <CarouselSlider id={3}/>
            
        </>
    )
}
export default Gift;
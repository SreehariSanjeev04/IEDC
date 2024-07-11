import { useEffect } from "react";

function CarouselSlider({id}) {
    const CarouselEffect = () => {
        let sliderContainer = document.getElementById('sliderContainer' + `${-id}`);
        let slider = document.getElementById('slider' + `${-id}`);
        let cards = slider.getElementsByTagName('li');
        let elementsToShow = Math.floor(screen.width / 300);
        let sliderContainerWidth = sliderContainer.clientWidth;
        let cardWidth = sliderContainerWidth/elementsToShow;
        slider.style.width = cards.length * cardWidth + 'px';
        for(let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.style.width = cardWidth+'px';
        }
    }
    function prev() {
        let sliderContainer = document.getElementById('sliderContainer'+`${-id}`);
        let slider = document.getElementById('slider'+`${-id}`);
        let cards = slider.getElementsByTagName('li');
        let elementsToShow = Math.floor(screen.width/300);
        let sliderContainerWidth = sliderContainer.clientWidth;
        let cardWidth = sliderContainerWidth/elementsToShow;
        if(+slider.style.marginLeft.slice(0,-2)!= -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth) + 'px'
    }
    function next() {
        let sliderContainer = document.getElementById('sliderContainer'+`${-id}`);
        let slider = document.getElementById('slider'+`${-id}`);
        let elementsToShow = Math.floor(screen.width / 300);
        let sliderContainerWidth = sliderContainer.clientWidth;
        let cardWidth = sliderContainerWidth/elementsToShow;
        if(+slider.style.marginLeft.slice(0,-2)!=0)
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth) + 'px'
        
    }
    useEffect(()=>{
        CarouselEffect();
    },[])
    return (
        <div className="flex">
            <div className="w-2/12 flex items-center">
                <div className="w-full text-right">
                    <button className="p-3 rounded-full bg-white border shadow-lg" onClick={next}>
                    <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="h-6 w-6"><path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z"></path></svg>
                    </button>
                </div>
            </div>
            <div id={"sliderContainer"+`${-id}`} className="w-full overflow-hidden py-10">
                <ul id={"slider"+`${-id}`} className="flex w-full transition-margin duration-700 "> 
                    <li className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl"  class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy24/FriendsBuyCoffeeFY24.png" alt="Gift card image: On a green and yellow background a smiling cloud and smiling sun cheers their iced beverages with the words Friends Buy Friends Coffee written in orange. " />
                        </div>
                    </li>
                    <li  className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl" class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy23/ForMySunshineFY23.jpg" alt="Gift card image: For My Sunshine is written in bold yellow letters and arched over a yellow sun across orange rays radiating from the sun." />
                        </div>
                    </li >
                    <li  className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl"  class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy24/FriendsBuyCoffeeFY24.png" alt="Gift card image: On a green and yellow background a smiling cloud and smiling sun cheers their iced beverages with the words Friends Buy Friends Coffee written in orange. " />
                        </div>
                    </li>
                    <li  className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl" class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy23/ForMySunshineFY23.jpg" alt="Gift card image: For My Sunshine is written in bold yellow letters and arched over a yellow sun across orange rays radiating from the sun." />
                        </div>
                    </li>
                    <li  className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl"  class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy24/FriendsBuyCoffeeFY24.png" alt="Gift card image: On a green and yellow background a smiling cloud and smiling sun cheers their iced beverages with the words Friends Buy Friends Coffee written in orange. " />
                        </div>
                    </li>
                    <li  className="hover:-translate-y-5 transition-transform duration-700">
                        <div className="mr-5">
                        <img className="rounded-xl" class="block sb-svc-image--image sb-imageFade__imagePositioning sb-imageFade__show" src="https://globalassets.starbucks.com/digitalassets/cards/fy23/ForMySunshineFY23.jpg" alt="Gift card image: For My Sunshine is written in bold yellow letters and arched over a yellow sun across orange rays radiating from the sun." />
                        </div>
                    </li >
                </ul>
            </div>
            <div className="w-2/12 flex items-center">
                <div className="w-full text-left">
                <button className="p-3 rounded-full bg-white border  shadow-lg" onClick={prev}>
                    <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="h-6 w-6"><path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z"></path></svg>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default CarouselSlider;
import { useState } from "react";
import FavoriteComponent from "./fav-comp";
function Favourites() {
    const data = [{
        image: "http://www.starbucks.com//weblx/images/rewards/reward-tiers/25.png",
        title: "Customize your drink",
        desc: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
    }, {
        image: "http://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
        title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
        desc: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
    }, {
        image: "http://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
        title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
        desc: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
    },{
        image: "http://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
        title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
        desc: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
    },{
        image: "http://www.starbucks.com//weblx/images/rewards/reward-tiers/25.png",
        title: "Customize your drink",
        desc: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
    }]
    const [selectedTab,setTab] =  useState(0);
    const points = [25,100,200,300,400];
    return(
        <div>
            <div className="bg-light-green w-full">
                <h2 className="text-xl md:text-3xl font-semibold text-center py-12">Get your favorites for free</h2>
                <div className="flex justify-center relative bottom-0 left-0 h-12 pb-5">
                    {
                        points.map((point,index)=>{
                            return  <button key={index} onClick={()=>setTab(index)} className={"px-2 md:px-6 " + `${selectedTab == index ? "underline underline-offset-[15px] decoration-4 decoration-custom-light-green ": ""}`}>
                            <span className="text-md md:text-3xl font-semibold">{point}</span>
                            <span className="text-sm md:text-lg text-gold">★</span>
                        </button>
                        })
                    }
                    
                    
                </div>
            </div>
            <FavoriteComponent description={data[selectedTab].desc} image={data[selectedTab].image} title={data[selectedTab].title}/>
        </div>
    )
}
export default Favourites;
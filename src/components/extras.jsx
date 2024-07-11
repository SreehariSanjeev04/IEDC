function Extras() {
    return (
        <div className="bg-white py-16 text-center space-y-6 mx-10 md:mx-32">
            <h1 className="text-2xl md:text-4xl font-semibold">Endless Extras</h1>
            <h3 className="text-md md:text-xl">Joining Rewards means unlocking access to exciting benefits. <br /> Say hi to easy ordering, tasty amazing excellent Rewards and—yes, free coffee.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="space-y-4 mx-3 md:mx-8">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="Step 1" width="130" />
                <h2 className="text-lg md:text-2xl font-semibold">Fun freebies</h2>
                <p className="text-md md:text-xl">Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                <a href="">Learn more</a>
                </div>
                <div className="space-y-4 mx-3 md:mx-8">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="Step 1" width="130" />
                <h2 className="text-lg md:text-2xl font-semibold">Order & pay ahead</h2>
                <p class="text-md md:text-xl">Enjoy the convenience of in-store, drive-thru pickup at stores.</p>
                <a href="">Learn more</a>
                </div>
                <div className="space-y-4 mx-8">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="Step 1" width="130" />
                <h2 className="text-lg md:text-2xl font-semibold">Get to free faster</h2>
                <p class="text-md md:text-xl">Earn Credits even quicker with Bonus Star challenges, Double Credit Days and exciting games.</p>
                <a href="">Learn more</a>
                </div>
            </div>
            
        </div>
    )
}
export default Extras;
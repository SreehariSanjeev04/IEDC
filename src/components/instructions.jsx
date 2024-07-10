function Instructions() {
    return (
        <div className="bg-white py-16 text-center space-y-6 mx-32">
            <h1 className="text-2xl md:text-4xl font-semibold">Getting started is easy</h1>
            <h3 className="text-lg md:text-2xl">Earn Stars and get rewarded in a few easy steps.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="space-y-4">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Create an account</h2>
                <p className="text-md md:text-xl">To get started, <a class="color-greenStarbucks" href="/account/create">join now</a>. You can also <a class="color-greenStarbucks" href="https://starbucks.app.link/VLa2I3inh9" style={{textTransform: "lowercase"}}>Join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
                </div>
                <div className="space-y-4">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com//weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Order and pay how you’d like</h2>
                <p class="text-md md:text-xl">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a class="color-greenStarbucks" href="#waystopay">Learn how</a></p>
                </div>
                <div className="space-y-4">
                <img class="sb-imageFade__show" className="mx-auto" src="https://www.starbucks.com//weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Earn Stars, get Rewards</h2>
                <p class="text-md md:text-xl">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>
        </div>
    )
}
export default Instructions;
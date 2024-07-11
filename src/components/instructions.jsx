function Instructions() {
    return (
        <div className="bg-white py-16 text-center space-y-6 mx-10 md:mx-32">
            <h1 className="text-2xl md:text-4xl font-semibold">Getting started is easy</h1>
            <h3 className="text-lg md:text-2xl">Earn Credits and get rewarded in a few easy steps.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="space-y-4">
                <img className="mx-auto" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Create an account</h2>
                <p className="text-md md:text-xl">To get started, <a class="color-greenStarbucks" href="/account/create">join now</a>. You can also <a style={{textTransform: "lowercase"}}>Join in the app</a> to get access to the full range of Rewards benefits.</p>
                </div>
                <div className="space-y-4">
                <img className="mx-auto" src="https://www.starbucks.com//weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Order and pay how you’d like</h2>
                <p class="text-md md:text-xl">Use cash or debit card or save some time and pay right through the app. You’ll collect Cred all ways. <a  href="#waystopay">Learn how</a></p>
                </div>
                <div className="space-y-4">
                <img className="mx-auto" src="https://www.starbucks.com//weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="Step 1" width="48" />
                <h2 className="text-lg md:text-2xl font-semibold">Earn Stars, get Rewards</h2>
                <p class="text-md md:text-xl">As you earn Stars, you can redeem them for Rewards like free food, drinks, snacks and more. Start redeeming with as little as 100 Credits!</p>
                </div>
            </div>
        </div>
    )
}
export default Instructions;
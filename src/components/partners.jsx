function Partners() {
    return (
        <div className="bg-custom-light-green p-5 md:p-10">
            <div className=" text-center bg-hero-color py-2 px-2 md:py-6 space-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold">Keep the Rewards Coming</h2>
                <p className="text-md md:text-lg">The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
                <div className="flex flex-col md:flex-row">
                    <div className="p-3 md:p-6">
                        <img src="http://www.starbucks.com//weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="" width={190} className="mx-auto"/>
                        <p className="font-semibold"><a href="">Link your Delta SkyMiles®</a> and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.</p>
                    </div>
                    <div className="p-6">
                        <img src="http://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/bank-of-america.png" alt="" width={190} className="mx-auto" />
                        <p className="font-semibold"><a href="">Link your Bank of America</a>  eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.</p>
                    </div>
                    <div className="p-6">
                        <img src="http://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/marriott-bonvoy/marriott-logo.png" alt="" width={190} className="mx-auto" />
                        <p className="font-semibold"><a href="">Link your Marriott Bonvoy®</a>  and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.</p>
                    </div>

                </div>
                <button className="bg-custom-light-green text-white px-4 py-1.5 rounded-xl font-semibold">Join Starbucks® Rewards</button>
            </div>
        </div>
    )
}
export default Partners;
///weblx/images/rewards/loyalty-partnerships/bank-of-america.png
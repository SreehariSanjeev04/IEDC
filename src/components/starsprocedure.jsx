function Procedure() {
    return (
        <div className="w-full bg-cream text-center px-10 py-12 space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Cash or card, you earn Stars</h2>
            <p className="text-md md:text-xl">No matter how you pay, you can earn Credits with your offee. Those Stars add up excellent Rewards.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 place-content-start pt-10">
                <div>
                    <p className="text-xl md:text-3xl font-semibold text-left">1 <span>★</span> <span>per dollar</span></p>
                    <p className="text-left text-md md:text-xl pb-3">Pay as you go</p>
                </div>
                <div className="flex gap-x-3">
                    <img src="http://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="" width={112}/>
                    <div className="space-y-3">
                        <h3 className="text-left text-xl md:text-2xl font-semibold">Scan and pay separately</h3>
                        <p className="text-md md:text-lg text-left pb-3">Use cash or credit card at the register.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <img src="http://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="" width={112}/>
                    <div className="space-y-3">
                        <h3 className="text-left text-lg md:text-2xl font-semibold">Save payment in the app</h3>
                        <p className="text-md md:text-lg text-left">Check-out faster by saving a PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-start pt-10">
                <div>
                    <p className="text-xl md:text-3xl font-semibold text-left">2 <span>★</span> <span>per dollar</span></p>
                    <p className="text-left text-md md:text-xl pb-3">Add funds in the app</p>
                </div>
                <div className="flex gap-x-3">
                    <img src="http://www.starbucks.com//weblx/images/rewards/ways-to-pay/2A.png" alt="" width={112}/>
                    <div className="space-y-3">
                        <h3 className="text-left text-lg md:text-2xl font-semibold">Preload</h3>
                        <p className="text-md md:text-lg text-left">To save time and earn Credits thrice as fast, add money to your Card using any option. Scan and pay in one step or order ahead in the app.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <img src="http://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="" width={112}/>
                    <div className="space-y-3">
                        <h3 className="text-left text-lg md:text-2xl font-semibold">Register your gift card</h3>
                        <p className="text-md md:text-lg text-left">Then use it to pay through the app. You can even balances from cards in one place.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Procedure;
export default function Hero (){
    return(
        <div className="min-h-screen h-40 mb-2 py-3 mt-8 flex justify-center bg-white">
        <div className="w-full px-2 max-w-4xl">
            <h1 className="py-1 font-bold text-center mb-8 text-4xl w-full">
                Sell Your Car on PakWheels and Get the Best Price
            </h1>
            <div className="flex items-center justify-center gap-8">

            <div className="w-1/2 text-left pl-4">
                <h2 className="text-2xl font-semibold mb-4 text-blue-900"> Post Your ADD on PakWheel</h2>
                <ul className="py-3, px-3 space-y-2">
                    <li>Post Your Add for Free in 3 Easy Steps</li>
                    <li>Get Genuine Offers frem Verfied Buyers</li>
                    <li>Sell Your Cars Fast at the Best Price</li>
                </ul>
                <button className="mt-4 hover bg-red-600 text-white px-6 py-3 rounded-lg">Post Your Add Here</button>
            </div>
            <div className="w-1/2 text-left pl-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Try PakWheel Sell it for Me</h2>
            <ul className="text-gray-700 space-y-2">
                <li>Dedicated Sales Export to Sell Your Car</li>
                <li>We Bargir for You and Share the Best Price</li>
                <li>We Ensure Safe and Secure Transaction</li>
            </ul>
            <button className="mt-4 bg-blue-700 hover:bg to-blue-900 text-white px-6 py-3 rounded-lg">
            Register Your Car Here
            </button>
        </div>
        </div>
        </div>
        </div>
    );
}
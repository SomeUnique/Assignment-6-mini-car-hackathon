import Link from "next/link";
export default function Featurecar (){
    return(
        <div>
        <div className="font-semibold text-2xl px-9 py-6"><h1 className="mb-10">FEATURED NEW CARS</h1></div>
        <button className="px-5 hover:text-red-600">Popular</button>
        <button className="px-5 hover:text-red-600">Upcoming</button>
        <button className="px-5 hover:text-red-600">Newly Launched</button>
        <div className="h-96 w-full bg-slate-200 gap-10 flex flex-row py-4 px-24">
        <div className="h-72 w-60 bg-white">
            <div className="h-72 w-60 bg-white">
                <Link href="Car1">
                <img src="lexus white.jpeg" className="h-60 w-full">
                </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-12"><h2>Lexus</h2>
                    <h3 className="text-green-400"> PKR 1.25 CR</h3></div>
            </div>
        </div>

        <div className="h-72 w-60 bg-white">
            <div className="h-72 w-60 bg-white">
                <Link href="Car2">
                <img src="Mercedes-C63-AMG-Japan-Special white.jpg" className="h-60 w-full">
                </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-12"><h2>Mercedes-C63</h2>
                    <h3 className="text-green-400"> PKR 1.15 CR</h3></div>
            </div>
        </div>

        <div className="h-72 w-60 bg-white">
            <div className="h-72 w-60 bg-white">
                <Link href="Car3">
                <img src="bmw-m2 white.jpg" className="h-60 w-full">
                </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-12"><h2>BMW-M2</h2>
                    <h3 className="text-green-400"> PKR 1.60 CR</h3></div>
            </div>
        </div>

        <div className="h-72 w-60 bg-white">
            <div className="h-72 w-60 bg-white">
                <Link href="Car4">
                <img src="BMWI8.jpg" className="h-60 w-full">
                </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-12"><h2>BMW-i8</h2>
                    <h3 className="text-green-400"> PKR 2 CR</h3></div>
            </div>
        </div>


         </div>
     </div>
    )
}
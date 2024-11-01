import Link from "next/link"
export default function Forms(){
    return(
        <div className="bg-blue-50 ">
            <h1 className="text-5xl font-semibold text-center camel case">Enter your details</h1>


        <div className="bg-blue-50">
           <form className="mt-1 flex gap-10 justify-center items-center flex-col border">
            <input type="Email" className="p-2 rounded-md w-1/5 border border-red-900 mt-56" placeholder= "Enter Your Email"></input>
            <input type="Password" className="p-2 rounded-md w-1/5 border border-red-900" placeholder="Enter Your Password"></input>
            <input type="Card Number" className="p-2 rounded-md w-1/5 border border-red-900" placeholder= "Card Number"></input>
            <input type="Address" className="p-2 rounded-md w-1/5 border border-red-900" placeholder= "Address"></input>
            <Link href="Thankyou"><button className="p-5 px-7 rounded-md bg-blue-700 mt-6"> Place Your Order</button></Link>
            <div className="mt-10"></div>
           </form>
           </div>

        </div>
    )
}
import React from 'react'
import Link from 'next/link'
const Footer =()=>{
    return(
        <div>
            <footer className='bg-black text-white h-32 w-full  py-5 px-5 flex flex-row justify-between items-center'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <h2 className="text-xl font-bold mb-4 ">Contact Us</h2>
                <ul className='underline'>03-xxxxxxxx-x</ul>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4 ">Social Links</h2>
                <div>
                <Link href="https://github.com/SomeUnique" className='underline'>Git Hub</Link>
                </div>
                <a href="E-mail for Quirey:minoshaaz@gmail.com" className='underline'>E-mail : minoshaaz@gmail.com</a>
            </div>
            </div>
            
            </footer>
        </div>
    )
}
export default Footer

import Head from 'next/head'

export default function Navbar() {
    return (
        <div className='bg-black h-16 w-full flex justify-center text-white items-center text-xl relative'>
            <p className='text-green-400'>COTTON</p>
            <span>-</span>
            <p>CALCULATOR</p>
        </div>
    )
}

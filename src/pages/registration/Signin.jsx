import React from 'react'

export default function Signin() {
    return (
        <div style={{
            background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"
        }}>
            <div className="main flex justify-center items-center h-screen">
                <div className="sub_main bg-black bg-opacity-75 p-20 text-white rounded-md">
                    <h2 className='text-3xl font-bold mb-7'>Sign In</h2>
                    <div className="mb-7">
                        <input type="email" placeholder='Email or mobile number' className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none' />
                    </div>
                    <div className="mb-7">
                        <input type="password" placeholder='Password' className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none mb-3' />
                    </div>
                    <div className="flex justify-center mb-2">
                        <button className='bg-[#e50815] w-full py-3 rounded-md font-bold'>Sign In
                        </button>
                    </div>
                    <div className="mb-10">
                        <div className="main flex justify-between items-center">
                            <div className="left flex items-center gap-1">
                                <input type="checkbox" className='w-4 h-4'/>
                                <label className='text-gray-400 font-light text-sm'>Remember me</label>
                            </div>
                            <div className="right">
                                <p className='text-gray-400 font-light text-sm'>Need help ?</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p><span className='font-light text-gray-400'>New to Netflix?</span> <span className='hover:underline cursor-pointer font-light'>{" "}Sign up now.</span></p>
                    </div>
                    <div className="mb-20">
                        <p className='text-xs text-gray-400'>This page is protected by Google reCAPTCHA to<br/> ensure you're not a bot. 
                            <span className='text-blue-600 hover:underline'>Learn more.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

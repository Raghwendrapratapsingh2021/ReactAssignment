import React from 'react';


const About = () => {
    return (
        <div className="my-60 mx-5">
            <div className=" mx-10 py-40 left-1/3 flex">
                

                <div className="mx-10">
                    <h1 className="text-6xl font-bold">For Fintech <br /> Lenders</h1>
                    <div className="my-5 text-2xl">
                        <p> Propose your loan pool limits,<br />
                            tranching and other terms. And launch <br />
                            a fully legal and compliant financing <br />
                            structure in record time!
                        </p>
                        </div>
                        <div>
                        <p className="text-blue-400 font-bold text-lg">
                        ✔️ Assign your loans instantly at origination <br />
                        ✔️ All regulatory reporting automated for you <br />
                        ✔️ Ready for institutional investors distribution
                        </p>
                    </div>

                    <div className="my-4">
                        <button className="border border-solid bg-black text-white px-6 py-3 rounded-full ">About The Loan Tokeniser</button>
                    </div>
                </div>

                <div className="px-20 ">
                    <img className="w-auto h-screen rounded-3xl" src="https://framerusercontent.com/images/KyzNelP4zVPlRum0lCpg2373jTk.webp" alt="" />
                </div>
            
                

            </div>

            <div className="flex">
                
                <div className=" mx-32 ">
                    <img className="w-auto h-screen rounded-3xl" src="https://framerusercontent.com/images/v9Ee5TQEBGllhpHLOx9JNdp8o.webp" alt="" />
                </div>
                <div className="">
                    <h1 className="text-6xl font-bold">For Investors</h1>
                    <div className="my-5 text-2xl">
                        <p> Direct access to institutional-grade <br />
                             securitised opportunities from super- <br /> 
                             senior to first-loss, with no paperwork.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-700 font-bold text-lg">
                        ✅ Security fully enforceable on-chain <br />
                        ✅ Traceability and transparency over the loan pools <br />
                        ✅ Sell positions instantly to whitelisted investors
                        </p>
                    </div>

                    <div className="my-4">
                        <button className="border border-solid bg-black text-white px-6 py-3 rounded-full ">Discover The Trenched Protocol</button>
                    </div>
                </div>

               
            
                

            </div>

            

        </div>

        
        
    );
}

export default About;

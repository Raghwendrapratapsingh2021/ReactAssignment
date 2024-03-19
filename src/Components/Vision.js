import React from 'react';

const Vision = () => {
    return (

        
         <div className='w-auto my-96 h-screen relative'>
            <img className='top-0 left-0 w-full  object-cover h-auto' src="https://framerusercontent.com/images/e48HthKgkTj8ugmYfzk0KmClaLM.svg" alt="" />
         
           <div className="absolute ml-48 mt-32  top-0  flex ">
                 <div className="">
                     <img className="w-8 h-8" src="https://th.bing.com/th/id/R.014073a5f804b024408d14f1b3d585d8?rik=1r2nQrbGUmJUIQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffilename-vision-icon-png-1920.png&ehk=HtkpEYp8ghZTBVtadvqXT12v6NRV%2fat2979pEL3mmT0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                 </div>
                 <div className="text-gray-500 mx-1 font-bold text-lg">vision</div>
             
           </div>

          <div className='absolute  text-4xl m-48 mt-80 top-0  text-white'>
            <div className="">  We envision a future <br />
             in which the Real <br />
             Economy is financed <br />
             in a transparent way, <br />
             free of intermediaries.
            </div>
             <div className="text-black my-5 ">
              <a href="https://medium.com/@Tranched" target="_blank"><button className="border border-solid bg-white text-black text-xl rounded-full pl-2 py-2 pr-9 cursor-pointer hover:bg-slate-400">Read our insight </button></a>
            
            </div>
         
          </div>

          

         </div>
    );
}

export default Vision;

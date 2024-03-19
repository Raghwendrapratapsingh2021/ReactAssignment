import React, { useRef } from 'react';

const Home = () => {
  const targetComponentRef = useRef(null);

  const scrollToTargetComponent = () => {
    if (targetComponentRef.current) {
      targetComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='w-full h-screen relative'>
      <img className='top-0 left-0 w-full object-cover h-auto' src="https://framerusercontent.com/images/LfIclNuYCQna2qhPpR9UVnDnOio.svg" alt="" />
      <div className='absolute text-xl md:text-7xl top-0 my-48 mx-10'>
        <h1 className="text-white">The Real Economy. <br />On-chain.</h1>
        <div className="text-blue-100 text-xl my-5">
          Introducing real-time on-chain securitisation.<br/>
          Fintech Lenders and Professional Investors can <br/>
          now launch an institutional-grade transaction up <br/>
          to 90% faster than before.
        </div>
      </div>

      <div className="absolute top-20 ml-10 mt-96">
        <img
          className='w-10 h-10 mr-3 hover:bg-gray-300 cursor-pointer'
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0gMCAwIEwgMjQgMCBMIDI0IDI0IEwgMCAyNCBaIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9wYXRoPjxwYXRoIGQ9Ik0gNSAxMiBMIDE5IDEyIE0gMTMgMTggTCAxOSAxMiBNIDEzIDYgTCAxOSAxMiIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIiPjwvcGF0aD48L3N2Zz4='
          alt='arrow'
          onClick={scrollToTargetComponent}
        />
      </div>

 
      <div ref={targetComponentRef} className="mt-96">
        {/* <h2>This is the target component content</h2> */}
      </div>
    </div>
  );
};

export default Home;

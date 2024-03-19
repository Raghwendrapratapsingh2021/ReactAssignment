import React from 'react';


const Footer = () => {
    return (
      <div className='relative w-full h-screen'>
        <img
          className='absolute top-0 left-0 w-full h-screen object-cover'
          src='https://framerusercontent.com/images/tZzEYUYPcPlxFw6GKPQEMEEkoBM.svg'
          alt='Background'
        />
  
       
     <div className='absolute inset-0 flex flex-col justify-between ml-48 mt-8 p-10 my-10'>
          <div className='pt-10'>
            <h1 className='text-5xl text-white font-bold'>Join the <br />Tranched revolution.</h1>
          </div>

          <div className="mt-10">
            <a href="https://twitter.com" target="_blank"  rel="noreferrer"><button className='bg-white text-black font-bold shadow-lg px-4 py-2 rounded-full hover:bg-zinc-400 transition duration-300 ease-in-out'>
              Follow us on X
            </button></a>
            
            <a href="https://medium.com/@Tranched" target="_blank" rel="noreferrer"> <button className='bg-transparent border-2 border-white text-white font-bold px-4 py-2 rounded-full ml-4 hover:bg-zinc-400 hover:border-transparent transition duration-300 ease-in-out'>
              Read our insights
            </button></a>
            
          </div>
  
          
          
          <div className='ml-auto mr-10 max-w-xs mt-28'>
          <h3 className='text-white font-bold'>Contact</h3>
         <div className='flex mt-3'>
         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className='w-5 h-5 mr-3 hover:bg-white cursor-pointer' src='data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"%3E%3Cpath d="M 19 1 C 21.209 1 23 2.791 23 5 L 23 19 C 23 21.209 21.209 23 19 23 L 5 23 C 2.791 23 1 21.209 1 19 L 1 5 C 1 2.791 2.791 1 5 1 Z M 6.205 7.91 C 7.147 7.91 7.91 7.147 7.91 6.205 C 7.91 5.263 7.147 4.5 6.205 4.5 C 5.263 4.5 4.5 5.263 4.5 6.205 C 4.5 7.147 5.263 7.91 6.205 7.91 Z M 7.909 19.5 L 7.909 9.273 L 4.5 9.273 L 4.5 19.5 Z M 9.273 9.273 L 9.273 19.5 L 12.341 19.5 L 12.341 13.33 C 12.736 12.688 13.418 12 14.386 12 C 15.75 12 16.091 13.364 16.091 14.046 L 16.091 19.5 L 19.5 19.5 L 19.5 14.046 C 19.5 12.218 18.703 9.273 15.75 9.273 C 13.872 9.273 12.83 9.958 12.34 10.6 L 12.34 9.273 Z" fill="rgb(100, 116, 139)"%3E%3C/path%3E%3C/svg%3E' alt='LinkedIn' />
          </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className='w-5 h-5 mr-3 hover:bg-white cursor-pointer' src='data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22"%3E%3Cpath d="M 20.996 0.279 C 21.174 0.444 21.279 0.674 21.288 0.917 C 21.296 1.16 21.208 1.397 21.042 1.575 L 13.584 9.573 L 21.816 20.499 C 22.025 20.777 22.058 21.149 21.903 21.46 C 21.748 21.77 21.431 21.967 21.083 21.967 L 16.062 21.967 C 15.774 21.967 15.503 21.832 15.329 21.602 L 9.536 13.914 L 2.3 21.675 C 1.955 22.046 1.375 22.066 1.004 21.721 C 0.634 21.376 0.614 20.795 0.959 20.425 L 8.417 12.427 L 0.185 1.501 C -0.024 1.223 -0.057 0.851 0.097 0.541 C 0.252 0.23 0.569 0.033 0.917 0.033 L 5.939 0.033 C 6.227 0.033 6.497 0.168 6.671 0.398 L 12.464 8.086 L 19.699 0.324 C 19.865 0.146 20.095 0.042 20.338 0.033 C 20.581 0.024 20.817 0.113 20.995 0.279 Z M 11.692 10.109 C 11.666 10.079 11.642 10.048 11.621 10.015 L 5.482 1.865 L 2.755 1.865 L 16.518 20.135 L 19.245 20.135 Z" fill="rgb(148, 163, 184)"%3E%3C/path%3E%3C/svg%3E' alt='Twitter' />
        </a>
        <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            <img className='w-5 h-5 mr-3 hover:bg-white cursor-pointer' src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M%201%2012%20C%201%205.925%205.925%201%2012%201%20C%2018.075%201%2023%205.925%2023%2012%20C%2023%2018.075%2018.075%2023%2012%2023%20C%205.925%2023%201%2018.075%201%2012%20Z%20M%204.644%2011.44%20C%204.547%2011.478%204.483%2011.571%204.482%2011.675%20C%204.482%2011.777%204.549%2011.873%204.644%2011.909%20L%207.631%2012.999%20L%2013.785%209.822%20C%2013.852%209.791%2013.932%209.812%2013.975%209.872%20C%2014.015%209.934%2014.006%2010.016%2013.953%2010.067%20L%209.811%2013.782%20L%2014.452%2017.519%20C%2014.519%2017.567%2014.609%2017.579%2014.686%2017.551%20C%2014.764%2017.521%2014.822%2017.455%2014.842%2017.374%20L%2017.3%207.036%20C%2017.321%206.946%2017.291%206.852%2017.222%206.79%20C%2017.152%206.73%2017.055%206.712%2016.968%206.744%20Z%22%20fill%3D%22rgb(148%2C%20163%2C%20184)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt='Twitter' />
        </a>
        <a href="https://medium.com/@Tranched" target="_blank" rel="noopener noreferrer">
            <img className='w-5 h-5 mr-3 hover:bg-white cursor-pointer' src='https://cdn1.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_medium-512.png' alt='Twitter' />
        </a>
        
    </div>

    <div className='mt-3 text-white'>
        <p>© 2024 Tranched Global Ltd. All rights reserved.</p>
        <p className='mt-1'>Designed by Flexboom</p>
    </div>
          </div>


        </div>
      </div>
    );
  };
  
  export default Footer;
  
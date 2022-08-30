import { useState, useEffect } from 'react'
import SolidButton from './solidButton';

export default function Timer () {
    const [hackTime, setHackTime] = useState(false);
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
  
      // SOE - start of event
      // EOE - end of event
      const targetSOE = new Date("9/23/2022 20:00:00");
      const targetEOE = new Date("9/25/2022 8:00:00")
  
      const interval = setInterval(() => {
        const now = new Date();
        
        const difference = targetSOE.getTime() - now.getTime();
        const tillEOE = targetEOE.getTime() - now.getTime();
  
        if ( !hackTime ) {
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setHours(h);
    
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          setMinutes(m);
    
          const s = Math.floor((difference % (1000 * 60)) / 1000);
          setSeconds(s);
    
          if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
            setHackTime(true);
          }
        } else {
  
          const d = Math.floor(tillEOE / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (tillEOE % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setHours(h);
    
          const m = Math.floor((tillEOE % (1000 * 60 * 60)) / (1000 * 60));
          setMinutes(m);
    
          const s = Math.floor((tillEOE % (1000 * 60)) / 1000);
          setSeconds(s);
    
          if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
            setPartyTime(true);
          }
        }
  
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <section className="text-gray-600 body-font bg-zinc-800">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                  <h2 className="text-sm text-violet-300 tracking-widest font-bold title-font mb-1">Until</h2>
                  <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-200">
                    The 
                    {
                      hackTime ?
                      <span> end </span>
                      :
                      <span> start </span>
                    }

                    of the Hackathon
                  </h1>
                  {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                </div>

                <div className="flex justify-center items-center dark">
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-8 bg-white'>
                    <span className="font-bold text-4xl">{days}</span>
                    <span className="text-xs mx-auto mt-4">Days</span>
                  </div>

                  <span className="font-bold  my-auto mx-4 text-gray-100">:</span>
                  
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-8 bg-white'>
                    <span className="font-bold text-4xl">{hours}</span>
                    <span className="text-xs mx-auto mt-4">hours</span>
                  </div>

                  <span className="font-bold  my-auto mx-4 text-gray-100">:</span>
                  
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-8 bg-white'>
                    <span className="font-bold text-4xl">{minutes}</span>
                    <span className="text-xs mx-auto mt-4">minutes</span>
                  </div>

                  <span className="font-bold  my-auto mx-4 text-gray-100">:</span>
                  
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-8 bg-white'>
                    <span className="font-bold text-4xl">{seconds}</span>
                    <span className="text-xs mx-auto mt-4">minutes</span>
                  </div>
                </div>
                <div className='mx-auto my-8 md:w-48 w-full'>
                  <SolidButton url="#" text="Register"></SolidButton>
                </div>
            </div>
        </section>
    )
}


import { useState, useEffect } from 'react'

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
      const targetSOE = new Date("9/24/2022 9:00:00");
      const targetEOE = new Date("9/25/2022 21:00:00")
  
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
                <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-sm text-violet-300 tracking-widest font-bold title-font mb-1">Until</h2>
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-200">The start of the Hackathon</h1>
                {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                </div>
                <div className="flex flex-wrap">
                    Day | Month | Seconds
                </div>
                <button className="flex mx-auto mt-16 text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </section>
    )
}


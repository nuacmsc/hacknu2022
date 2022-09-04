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
      const targetSOE = new Date("9/17/2022 23:59:59");
      const targetEOE = new Date("9/19/2022 23:59:59")
  
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
            <div className="container px-5 pb-24 pt-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                  <h2 className="text-sm text-violet-300 tracking-widest font-bold title-font mb-1">Until</h2>
                  <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-200">
                    The 
                    {
                      hackTime ?
                      <span> end </span>
                      :
                      <span> end </span>
                    }

                    of the Registration
                  </h1>
                  {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                </div>

                <div className="flex justify-center items-center dark">
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-6 lg:py-8 bg-white'>
                    <h1 className="font-bold text-2xl lg:text-4xl">{days}</h1>
                    <span className="text-xs mx-auto mt-4">Days</span>
                  </div>

                  <span className="font-bold  my-auto mx-4 text-gray-100">:</span>
                  
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-6 lg:py-8 bg-white'>
                    <h1 className="font-bold text-2xl lg:text-4xl">{hours}</h1>
                    <span className="text-xs mx-auto mt-4">hours</span>
                  </div>

                  <span className="font-bold  my-auto mx-4 text-gray-100">:</span>
                  
                  <div className='flex justify-center items-center flex-col rounded drop-shadow px-4 py-6 lg:py-8 bg-white'>
                    <h1 className="font-bold text-2xl lg:text-4xl">{minutes}</h1>
                    <span className="text-xs mx-auto mt-4">minutes</span>
                  </div>
                  
                  <span className="font-bold hidden lg:block my-auto mx-4 text-gray-100">:</span>
                    
                  <div className='hidden lg:flex justify-center items-center flex-col rounded drop-shadow px-4 py-6 lg:py-8 bg-white'>
                    <h1 className="font-bold text-2xl lg:text-4xl">{seconds}</h1>
                    <span className="text-xs mx-auto mt-4">seconds</span>
                  </div>
                </div>
                {/* <div className='mx-auto my-8 md:w-48 w-full'>
                  <SolidButton url="#" text="Register"></SolidButton>
                </div> */}
                <div className="flex flex-col items-center">

                  <div className="flex gap-8 mt-10">
                      <a href="https://instagram.com/hacknukz" className="text-gray-50">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                          <span className="sr-only">Instagram page</span>
                      </a>
                      <a href="https://t.me/hacknuinfo">
                          <img className="w-10 h-10" src="/tg-2.svg" />
                          <span className="sr-only">GitHub account</span>
                      </a>
                  </div>
                </div>
            </div>
        </section>
    )
}


import AgendaBlock from "./agendaBlock"

export default function Agenda () {
return (
    <div id="agenda" className="bg-zinc-800 py-16 flex justify-center flex-col items-center">
        <h1 className="font-bold text-3xl mb-8 text-white">Event Agenda (GMT +6)</h1>
        <div className="px-32 flex justify-between flex-col lg:flex-row items-center">

            <ol className="relative border-l border-gray-200 dark:border-gray-700 flex-grow">    

                <AgendaBlock
                    title="Opening Ceremony 🏁"
                    time="Sep 23 19:00"
                    description=""
                />
                <AgendaBlock
                    title="Technical Problem Briefing 🎙"
                    time="Sep 23 19:30"
                    description=""
                />
                <AgendaBlock
                    title="Participants start solving problems 👨🏻‍💻👩🏻‍💻"
                    time="Sep 23 20:00"
                />
                <AgendaBlock
                    title="Coffee Break☕"
                    time="Sep 24 13:00"
                />
                <AgendaBlock
                    title="Guest talk by Google representative 🎤"
                    time="Sep 24 13:30"
                    description="Lorem ipsum dolar sit amet"
                    urlMore="https://instagram.com/nuacmsc"
                    />
                <AgendaBlock
                    title="Workshop by Google representative 🏗"
                    description="Lorem ipsum dolar sit amet"
                    time="Sep 24 14:00"
                    />
                <AgendaBlock
                    title="Guest talk by EPAM representative 🎤"
                    time="Sep 24 17:00"
                    description="Lorem ipsum dolar sit amet"
                    urlMore="https://instagram.com/nuacmsc"
                    />
                <AgendaBlock
                    title="Mini games 🕹"
                    time="Sep 24 17:30"
                    />
                <AgendaBlock
                    title="Pizza Break 🍕"
                    time="Sep 24 18:30 "
                    />
                <AgendaBlock
                    title="Submission deadline ▶"
                    time="Sep 25 8:00"
                    />
                <AgendaBlock
                    title="Closing Ceremony 🎌"
                    time="Sep 23 8:00 - 8:20"
                    last="true"
                />
                {/* <AgendaBlock
                    title="Participants start solving problems"
                    time="Sep 24 20:00"
                    description=""
                    urlMore="https://instagram.com/nuacmsc"
                /> */}
                

                {/* <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li> */}
            </ol>
            <div className="mt-8 lg:mt-0 md:ml-32">
                <img className="w-64 ounded-lg" src="/5_high.png" alt="office content 1"/>
            </div>
        </div>
    </div>
)
}
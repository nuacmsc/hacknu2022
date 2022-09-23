import AgendaBlock from "./agendaBlock"

export default function Agenda () {
return (
    <div id="agenda" className="bg-zinc-800 py-16 flex justify-center flex-col items-center">
        <h1 className="font-bold text-3xl mb-8 text-white">Event Agenda (GMT +6)</h1>
        <div className="px-8 lg:px-32 flex justify-between flex-col lg:flex-row items-center">

            <ol className="relative border-l border-gray-200 dark:border-gray-700 flex-grow">    

                <AgendaBlock
                    title="Opening Ceremony 🏁"
                    time="Sep 23 20:00"
                    description=""
                />
                <AgendaBlock
                    title="Technical Problem Briefing 🎙"
                    time="Sep 23 20:30"
                    description=""
                />
                <AgendaBlock
                    title="Participants start solving problems 👨🏻‍💻👩🏻‍💻"
                    time="Sep 23 21:00"
                />
                <AgendaBlock
                    title="Coffee Break☕"
                    time="Sep 24 13:00"
                />
                <AgendaBlock
                    title="Guest talk by Google representative 🎤"
                    time="Sep 24 13:30"
                    />
                <AgendaBlock
                    title="Guest talk by EPAM representative 🎤"
                    time="Sep 24 17:00"
                    />
                <AgendaBlock
                    title="Mini games 🕹"
                    time="Sep 24 17:30"
                    />
                <AgendaBlock
                    title="Submission deadline ▶"
                    time="Sep 25 9:00"
                    />
                <AgendaBlock
                    title="Closing Ceremony 🎌"
                    time="Sep 25 9:00 - 9:20"
                    last="true"
                />
            </ol>
            <div className="mt-8 lg:mt-0 md:ml-32">
                <img className="w-64" src="/5_high.png" alt="office content 1"/>
            </div>
        </div>
    </div>
)
}
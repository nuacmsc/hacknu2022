import { Disclosure } from "@headlessui/react"

export const Question: React.FC<{ question: string, text: string }> = ({ question, text }) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex items-center w-full justify-between rounded-lg bg-violet-100 px-4 py-2 text-left text-md font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
                        <span>{question}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`h-5 w-5 text-purple-500 transform transition-transform ${open ? '' : 'rotate-180'}`}><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        {text}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

const QUESTIONS = [
    {
        question: "Who is eligible to participate in HackNU?",
        text: "Students of Bachelor's and Master's degree in any major are encouraged to apply for participation. Every member of your team has to be currently enrolled in BS/MS program and provide an official document from university that proves that you are currently a student. We've designed our Hackathon to expose entry level and middle programmers to challenge their coding skills in a collaborative environment. Important note! If your team includes 3 and over members, you need to have at least 1 female member in a team. This is a required condition.",
    },
    {
        question: "What are eligibilities for a prize?",
        text: "Firstly, every member of your team has to be a Bachelor's program student. Secondly, your team has to participate in offline mode at Nur-Sultan, Nazarbayev University.",
    },
    {
        question: "Can our team participate in online mode?",
        text: "Yes! We will send out descriptions of problems to the Telegram chat of participants.",
    }
]

export const FAQ = () => {
    return (
        <section className="body-font">
            <div className="px-5 py-16 mx-auto grid grid-cols-1 gap-8 max-w-xl w-full">
                <h1 className="font-bold text-center text-3xl mb-8 text-gray-800">FAQ</h1>
                {QUESTIONS.map(({ question, text }, i) => (
                    <Question question={question} text={text} key={i} />
                ))}
            </div>
        </section>
    )
}
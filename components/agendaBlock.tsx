interface AgendaBlockProps {
    time: string
    title: string
    description?: string
    urlMore?: string | undefined
    last?: string | undefined
}

export default function AgendaBlock (props: AgendaBlockProps) {
    return (
        <li className="ml-4">
            {
                props.last == "true" ?
                <div className="absolute w-3 h-3 bg-gray-100 rounded-full bottom-1.5 -left-1.5 border border-white"></div>
                :
                <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            }
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{props.time}</time>
            <h3 className="text-lg font-bold text-gray-100">{props.title}</h3>
            <p className="mb-2 text-base font-normal text-gray-500">{props.description}</p>
            {
                props.urlMore ?
                <a href={props.urlMore} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-violet-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-violet-700 ">Learn more 
                    <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>

                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>

                    </svg>
                </a>
                :
                <></>
            }
            {
                props.last == "true" ?
                <></>
                :
                <div className="mb-6"></div>
            }
        </li>
    )
}

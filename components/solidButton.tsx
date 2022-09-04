import {} from 'react';

interface ButtonProp{
    url?: string,
    text: string
}

export default function SolidButton (props: ButtonProp) {
    return (
        <div className="rounded-md shadow">
            <a
                href={props.url}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75"
            >
                {props.text}
            </a>
        </div>
    )
}
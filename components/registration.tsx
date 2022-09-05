import { Popover, Transition } from '@headlessui/react'
import SolidButton from './solidButton'

// TODO: Add registration links
const registrationLinks = {
    kk: 'https://forms.gle/UMS5wY2mnYhvULBW7',
    ru: 'https://forms.gle/EhAYjabwPKLvM38T8',
    en: 'https://forms.gle/8MVh6DwjqNJGZceL6',
}

export default function Registration () {
    return (
        <div id="registration" className="flex flex-col py-16 bg-zinc-800 items-center max-w-256">
            <h1 className="font-bold text-3xl text-white">Registration regulations</h1>
            <div className="flex w-full px-8 lg:px-32 mt-8 flex-col md:flex-row gap-8">
                <div className="lg:w-1/3">
                    <span className="text-2xl font-bold text-gray-100">Requirements</span>
                    <p className="text-gray-300 text-base mt-4">- To be a student of any university course (undergraduate programs only) and provide presence of enrollment verification/transcript</p>
                    <p className="text-gray-300 text-base mt-2">- To participate offline in hackathon;</p>
                </div>
                <div className="lg:w-1/3">
                    <span className="text-2xl font-bold text-gray-100">Individual Registration</span>
                    <p className="text-gray-300  text-base mt-4">First you should apply individually through the form below</p>
                    <div className="mt-4">
                        <Popover className="relative">
                            <Popover.Button className="w-full">
                                <SolidButton text="Register"/>
                            </Popover.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform translate-y-4 opacity-0"
                                leave="transition duration-100 ease-out"
                                leaveTo="transform translate-y-4 opacity-0"
                            >
                                <Popover.Panel className="absolute w-full flex flex-col items-center mt-6">
                                    <div className="bg-white w-4 h-4 rotate-45 -m-3 rounded-sm"/>
                                    <div className="bg-white min-w-full grid grid-cols-1 lg:grid-cols-3 p-4 rounded-md gap-4 drop-shadow-md">
                                        <SolidButton url={registrationLinks.kk} text="KZ" />
                                        <SolidButton url={registrationLinks.en} text="EN" />
                                        <SolidButton url={registrationLinks.ru} text="RU" />
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                    {/* <p className="text-white text-base">- To participate offline in hackathon;</p> */}
                </div>
                <div className="lg:w-1/3">
                    <span className="text-2xl font-bold text-gray-100">Team composition</span>
                    <p className="text-gray-300 text-base mt-4">After that, you will find you teammates;</p>
                    {/* <p className="text-gray-300 text-base mt-2">- Teams with 4 or 5 members must have at least one female member</p> */}
                    <p className="text-gray-300 text-base mt-2">Important note! If your team includes 3 and over members, you need to have at least 1 female member in a team. This is a required condition. </p>
                </div>
            </div>
        </div>
    )
}
import SolidButton from './solidButton'

export default function Registration () {
    return (
        <div className="flex flex-col py-16 bg-zinc-800 items-center">
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
                        <SolidButton url="#" text="Register"/>
                    </div>
                    {/* <p className="text-white text-base">- To participate offline in hackathon;</p> */}
                </div>
                <div className="lg:w-1/3">
                    <span className="text-2xl font-bold text-gray-100">Team composition</span>
                    <p className="text-gray-300 text-base mt-4">After that, you will find you teammates;</p>
                    <p className="text-gray-300 text-base mt-2">- Teams with 4 or 5 members must have at least one female member</p>
                </div>
            </div>
        </div>
    )
}
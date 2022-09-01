export default function () {
    return (
        <div id="partners" className="flex flex-col items-center py-8">
            <h1 className="font-bold text-3xl mb-8 text-gray-800">Our sponsors</h1>
            <div className="flex flex-row flex-wrap gap-4">
                <img className="w-20 md:w-32 lg:w-48 mr-4" src="google.svg" alt="Google" />
                <img className="w-20 md:w-32 lg:w-48" src="epam.svg" alt="EPAM" />
                <img className="w-20 md:w-32 lg:w-48" src="beeline.svg" alt="Beeline" />
                <img className="w-20 md:w-32 lg:w-48" src="nuris.svg" alt="NURIS" />
            </div>
        </div>
    )
}
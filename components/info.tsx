export default function InfoSection () {
    return (

    <section id="about">
        <div className="gap-16 items-center py-24 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="sm:text-lg text-gray-700">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">NU ACM SC supports the IT movement among young people in Kazakhstan</h2>
                <p className="mb-4">The Student Chapter of the Association for Computing Machinery at Nazarbayev University was founded in 2017. During this time, NU ACM SC has organized many programming competitions and is pleased to announce the 5th Annual Hackathon - HackNU 2022!</p>
                <p>By participating in HackNU, you will get a chance to compete for the main cash prize, as well as gain invaluable experience and like-minded people, while testing your programming knowledge.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="/photo2.jpg" alt="event content 1"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/photo1.jpg" alt="event content 2"/>
            </div>
        </div>
    </section>
    )
}
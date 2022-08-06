export default function InfoSection () {
    return (

    <section className="bg-violet-100">
        <div className="gap-16 items-center py-24 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="sm:text-lg text-gray-700">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">We didn't reinvent the wheel</h2>
                <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="/photo2.jpg" alt="office content 1"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/photo1.jpg" alt="office content 2"/>
            </div>
        </div>
    </section>
    )
}
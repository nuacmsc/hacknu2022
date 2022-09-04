import React from "react"

const Block: React.FC<React.PropsWithChildren<{ title: string}>> = ({ title, children }) => {
    return (
        <div className="text-center">
            <h2 className="text-sm text-violet-600 tracking-widest font-bold title-font mb-1">{title}</h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font">
                {children}
            </h1>
        </div>
    )
}

export const About = () => {
    return (
        <section className="body-font">
            <div className="container px-5 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-12">
                <Block title="Time">
                    23-25 September
                </Block>
                <Block title="Location">
                    NU Ballroom Left C2
                </Block>
            </div>
        </section>
    )
};

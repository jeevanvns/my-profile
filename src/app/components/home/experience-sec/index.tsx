import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2021 - Present",
            title: "Technology Lead - Mobile & Pod Manager",
            company: "WheelsEye Technology India Pvt. Ltd., Gurgaon",
            type: "Fulltime",
            description: "Leading mobile engineering pods (10+ engineers) for Android, Flutter & iOS applications, delivering high-performance, crash-free, and scalable solutions to millions of users. Built robust applications achieving 99.9% crash-free rates through performance optimization and memory management. Established coding standards ensuring maintainable, scalable codebases. Drove performance optimization strategies including lazy loading, caching, and efficient resource management."
        },
        {
            year: "2019 - 2021",
            title: "Technology Lead",
            company: "NorthCorp Software Pvt. Ltd.",
            type: "Fulltime",
            description: "Led mobile development initiatives, code reviews, and team mentoring. Developed utility libraries, frameworks, and automation tools. Managed agile delivery and technology assessments."
        },
        {
            year: "2018 - 2019",
            title: "Sr. Software Engineer",
            company: "Franciscan Solutions Pvt. Ltd.",
            type: "Fulltime",
            description: "Developed core mobile features, conducted code reviews, and mentored team members. Contributed to automation and testing efforts."
        },
        {
            year: "2017 - 2018",
            title: "Software Engineer",
            company: "Refundme India Services Pvt. Ltd.",
            type: "Fulltime",
            description: "Developed Android and iPhone applications. Analyzed requirements and implemented core features for mobile apps."
        },
        {
            year: "2015 - 2017",
            title: "Software Engineer",
            company: "Edit Soft Solutions Pvt. Ltd.",
            type: "Fulltime",
            description: "Developed Android applications, conducted code reviews, and mentored team members. Contributed to CTO-level tasks and technical decision-making."
        }
    ];

    return (
        <section id="experience">
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            { (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";

const Certifications = () => {
  const certifications = [
    {
      title: "Android Development",
      issuer: "Google",
      year: "2020",
      description: "Certified Android Developer",
    },
    {
      title: "Flutter Development",
      issuer: "Google",
      year: "2021",
      description: "Flutter & Dart Certification",
    },
    {
      title: "Mobile App Architecture",
      issuer: "Industry Standard",
      year: "2022",
      description: "MVVM Architecture Pattern",
    },
  ];

  return (
    <section id="certifications">
      <div className="border-t border-softGray">
        <div className="container">
          <div className="py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Certifications & Awards</h2>
              <p className="text-xl text-primary">( 07 )</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 border border-softGray rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#FE4300"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-2">{cert.title}</h5>
                      <p className="text-sm text-secondary mb-1">
                        {cert.issuer} • {cert.year}
                      </p>
                      <p className="text-sm font-normal">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;


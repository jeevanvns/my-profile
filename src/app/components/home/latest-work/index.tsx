"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="works">
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="flex flex-col gap-6 xl:gap-8">
              {workData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Image
                        src={getImgPath("/images/icon/android-icon.svg")}
                        alt="Android"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <Link 
                          href={value?.link || `#${value?.slug}`}
                          target={value?.link ? "_blank" : undefined}
                          rel={value?.link ? "noopener noreferrer" : undefined}
                          className="hover:text-primary transition-colors"
                        >
                          <h5>{value?.title}</h5>
                        </Link>
                        {value?.link && (
                          <Image
                            src={getImgPath("/images/icon/right-arrow-icon.svg")}
                            alt="right-arrow-icon"
                            width={30}
                            height={30}
                          />
                        )}
                      </div>
                      <p className="text-secondary">Client: {value?.client}</p>
                      {value?.description && (
                        <p className="text-sm text-secondary mt-1">{value?.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;

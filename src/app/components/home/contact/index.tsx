"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="contact" className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>
          <div className="flex flex-col items-start gap-6">
              {/* Social Links */}
              {contactData?.socialLinks?.map((value: any, index: any) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Link
                      href={value?.href || "#!"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Image
                        src={getImgPath(value?.icon || "/images/icon/linkedin-icon.svg")}
                        alt={value?.title || "Social"}
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                      href={value?.href || "#!"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value?.title}
                    </Link>
                  </div>
                );
              })}
              {/* Contact Info */}
              {contactData?.contactInfo?.map((value: any, index: any) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Link
                      href={value?.link || "#!"}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Image
                        src={getImgPath(value?.icon || "/images/icon/email-icon.svg")}
                        alt={value?.type || "Contact"}
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link
                      href={value?.link || "#!"}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      {value?.label}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

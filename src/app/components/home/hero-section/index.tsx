import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-4xl">
            <div className="flex items-center justify-center gap-8">
              <h1 className="text-center">I'm Jeevan Gupta</h1>
              <div className="wave">
                <Image
                  src={getImgPath("/images/home/banner/wave-icon.svg")}
                  alt="wave-icon"
                  width={62}
                  height={62}
                  className=""
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-normal text-primary text-center">
              Technology Lead - Mobile & Pod Manager
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

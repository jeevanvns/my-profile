import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-2xl md:text-3xl font-bold text-white bg-primary rounded-full hover:opacity-90 transition-opacity">
        JG
      </Link>
    </>
  );
};

export default Logo;

import Image from "next/image";

const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <Image
      src="/assets/loader.svg"
      alt="loader"
      width={100}
      height={100}
      className="object-contain"
    />
    <p className="text-sm font-bold text-primary-grey-300">FIGLER</p>
    <p className="text-sm font-bold text-primary-grey-300">
      A Figma Substitute
    </p>
  </div>
);

export default Loader;

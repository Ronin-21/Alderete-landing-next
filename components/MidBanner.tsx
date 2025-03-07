import Slider from "./Slider";

const MidBanner = () => {
  return (
    <div className="h-[800px] xl:h-[600px] bg-cover bg-center bg-[url('/banner_1.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-opacity-80 bg-primary-dark">
        <p className="xl:text-5xl text-4xl font-semibold text-white text-center">
          Por qué elegir nuestros servicios
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default MidBanner;

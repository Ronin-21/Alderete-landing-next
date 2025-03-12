import Slider from "./Slider";
import TitleSections from "./TitleSections";

const MidBanner = () => {
  return (
    <div className="h-[800px] xl:h-[600px] bg-cover bg-center bg-[url('/banner_1.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-opacity-80 bg-primary-dark">
        <TitleSections>
          <p className="xl:text-5xl text-4xl font-semibold text-white text-center">
            Por qué elegir nuestros servicios
          </p>
        </TitleSections>
        <Slider />
      </div>
    </div>
  );
};

export default MidBanner;

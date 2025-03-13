import TitleHero from "./TitleHero";

const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('/hero_bg2.jpg')] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent">
        <div className="container flex flex-col xl:items-start items-center xl:text-start text-center justify-center h-full gap-12 mx-auto text-white">
          <TitleHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;

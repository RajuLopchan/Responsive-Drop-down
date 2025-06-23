function HeroSection() {
  const Logos = [
    '/assets/images/client-databiz.svg',
    '/assets/images/client-audiophile.svg',
    '/assets/images/client-meet.svg',
    '/assets/images/client-maker.svg',
  ];

  return (
    <div className=" md:px-8 lg:px-50 lg:pt-13 pt-4 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
        <div className="w-full text-center lg:text-left">
          <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold leading-none">
            Make <br className="hidden sm:block " /> remote work
          </h1>

          <p className=" text-md text-gray-500 font-medium p-3 md:pt-6">
            Get your team in sync, no matter your location.
            <br className="hidden sm:block" />
            Streamline processes, create team rituals, and watch
            <br className="hidden sm:block" />
            productivity soar.
          </p>

          <button className="mt-6 md:mt-15 border border-black bg-black text-white rounded-xl px-5 py-3 hover:bg-white hover:text-black transition duration-300">
            Learn more
          </button>

          <div className="flex gap-3 justify-center lg:justify-start items-center mt-10 flex-wrap">
            {Logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`logo-${i}`}
                className="h-4  md:h-5 md:mt-4 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          {/* Desktop */}
          <img
            src="/assets/images/image-hero-desktop.png"
            alt="Hero"
            className="hidden lg:block w-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
        <div>
          {/* Mobile */}
          <img
            src="/assets/images/image-hero-mobile.png"
            alt="Hero"
            className="block lg:hidden w-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

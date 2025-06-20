function HeroSection() {
  return (
    <div className="px-4 md:px-8 lg:px-25">
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-8">
        {/* Image - will appear first on mobile */}
        <div className="w-full md:w-1/2 flex justify-center md:order-2">
          <img
            className="w-full max-w-md md:w-80"
            src="/assets/images/image-hero-desktop.png"
            alt="Hero"
          />
        </div>

        {/* Text content - will appear second on mobile */}
        <div className="md:mt-9 text-center md:text-left w-full md:w-1/2 md:order-1">
          <h1 className="text-black text-4xl md:text-6xl font-bold">
            Make remote work
          </h1>
          <p className="text-sm md:text-[15px] text-gray-600 font-semibold pt-4 md:pt-8 max-w-md mx-auto md:mx-0">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="border border-black bg-black text-white rounded-xl px-4 py-2 cursor-pointer mt-6 md:mt-8">
            Learn more
          </button>

          <div className="flex justify-center md:justify-start gap-4 md:gap-6 mt-10 md:mt-15">
            <img
              className="w-16 md:w-[4.4rem] h-3 md:h-[0.8rem]"
              src="/assets/images/client-databiz.svg"
              alt="databiz"
            />
            <img
              className="w-14 md:w-[3.7rem] h-6 md:h-[1.8rem]"
              src="/assets/images/client-audiophile.svg"
              alt="audiophile"
            />
            <img
              className="w-12 md:w-[3.3rem] h-3 md:h-[0.8rem]"
              src="/assets/images/client-meet.svg"
              alt="meet"
            />
            <img
              className="w-16 md:w-[4.3rem] h-4 md:h-[1rem]"
              src="/assets/images/client-maker.svg"
              alt="maker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

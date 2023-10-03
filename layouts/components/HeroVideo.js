const HeroVideo = ({videoSrc, title, subtitle, ...props}) => {

    return (
      <div className="relative">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow">

          <p className="font-bold text-3xl md:text-4xl lg:text-5xl md:section-title lg:section-title ">
            {title}
          </p>

          {subtitle && <p className="text-xs md:text-xl lg:text-2xl lg:mt-6 lg:text-center">{subtitle}</p>}

        </div>

      </div>
    );

};

export default HeroVideo;

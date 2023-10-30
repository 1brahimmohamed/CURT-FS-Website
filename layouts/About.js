import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    works,
    mission,
    sponsors,
    competitions,
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <Banner title={title} />
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p>{works.subtitle}</p>
            {markdownify(works.title, "h2", "section-title mt-4")}
            {markdownify(works.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={mission.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p>{mission.subtitle}</p>
              {markdownify(mission.title, "h2", "section-title bar-left mt-4")}
              {markdownify(mission.content, "p", "mt-10")}
            </div>
          </div>
        </div>


        {/* Office */}
        <div className="section container">
          <div className="animate text-center">
            <p>{competitions.subtitle}</p>
            {markdownify(competitions.title, "h2", "section-title mt-4")}
            {markdownify(competitions.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {competitions.countries.map((country, index) => (
                    <div
                        key={("country-", index)}
                        className="animate mt-10 md:col-6 xl:col-3"
                    >
                      <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                        <div className={"flex justify-center"}>
                          <ImageFallback
                              // className="mx-auto"
                              src={country.flag}
                              width={80}
                              height={80}
                              alt={country.name}
                          />
                        </div>
                        <div className={"flex flex-col"}>
                          <h5 className="h4 mt-2 text-center">{country.name}</h5>
                          <p className="mt-2 text-center">{country.location}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Sponsors */}
        <div className="section container">
          <div className="animate text-center">
            <p>{sponsors.subtitle}</p>
            {markdownify(sponsors.title, "h2", "section-title mt-4")}
          </div>
          <div className="animate from-right col-12 mt-16">
            <Swiper
              loop={true}
              slidesPerView={5}
              breakpoints={{
                1120: {
                  slidesPerView: 5, // For large screens, display 5 slides per view
                },
                768: {
                  slidesPerView: 3, // For medium screens, display 3 slides per view
                },
                0: {
                  slidesPerView: 2, // For small screens, display 2 slides per view
                },
              }}
              spaceBetween={1}
              modules={[Autoplay]}
              autoplay={{ delay: 1000 }}
            >
              {sponsors.companies.map((brand, index) => (
                <SwiperSlide
                  className="h-32 cursor-pointer py-6 px-6  transition lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full sm:w-52">
                    <ImageFallback
                      className="object-contain bg-white rounded-xl p-3 sm:w-52"
                      src={brand}
                      sizes="100vw"
                      alt=""
                      fill={true}
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;

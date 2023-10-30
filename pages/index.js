import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import ImageFallback from "@layouts/components/ImageFallback";
import VideoPopup from "@layouts/components/VideoPopup";
import {getListPage} from "@lib/contentParser";
import {gsap} from "@lib/gsap";
import {markdownify} from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import {useEffect, useRef} from "react";
import {TbQuote} from "react-icons/tb";
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Grid from "@mui/material/Grid";
import ResponsiveGrid from "@components/Grid";
import HeroVideo from "@components/HeroVideo";


const Home = ({banner, sponsors, who_are_we, team_features}) => {
  const paginationRef = useRef(null);
  const testimonialPaginationRef = useRef(null);

  return (
    <Base>

     <HeroVideo
       videoSrc={"/ws1.webm"}
       title={"CAIRO UNIVERSITY RACING TEAM"}
       subtitle={"Formula Student"}
     />

      {/* Who Are we */}
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            <p className="uppercase">{who_are_we.sub_title}</p>
            {markdownify(who_are_we.title, "h2", "mt-4 section-title")}
            {markdownify(who_are_we.description, "p", "mt-10")}
          </div>
          <div className="animate from-right relative mt-10">
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              // autoplay={{ delay: 3000 }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {who_are_we.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div
                    className="feature-card mx-4 rounded-md border border-transparent py-16 px-3 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div
                      className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      <FeatherIcon icon={item.icon}/>
                    </div>
                    <h3 className="h4 mt-6 mb-5">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section">
        <div className="container">
          <div className="container text-center mb-16">
            <div className="animate">
              <p className="uppercase">{sponsors.sub_title}</p>
              {markdownify(sponsors.title, "h2", "mt-4 section-title")}
              {markdownify(sponsors.description, "p", "mt-10")}
            </div>
          </div>

          <div className="row border-y border-border py-5">
            <ResponsiveGrid
                title={"Sponsors"}
                size={2}
                items={sponsors.companies}
                className={"mt-16"}/>

            <div className={"m-10"}/>

            <ResponsiveGrid
                title={"Media Appearance"}
                size={3}
                items={sponsors.media}
                className={"mb-16"} />
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center mb-32">
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="mx-auto rounded-xl mt-0 mb-4"
                src={team_features.feature_one.image}
                width={575}
                height={511}
                alt="primary speciality"
              />
            </div>
            <div className="animate lg:col-5 lg:order-1">
              <p>{team_features.feature_one.subtitle}</p>
              {markdownify(
                team_features.feature_one.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(team_features.feature_one.description, "p", "mt-10")}
            </div>
          </div>

          <div className="row items-center">
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto rounded-xl mb-4"
                src={team_features.feature_two.image}
                width={575}
                height={511}
                alt="secondary feature"
              />
            </div>
            <div className="animate lg:col-5">
              <p>{team_features.feature_two.subtitle}</p>
              {markdownify(
                team_features.feature_two.title,
                "h2",
                "mt-4 section-title bar-left"
              )}
              {markdownify(team_features.feature_two.description, "p", "mt-10")}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const {frontmatter} = homepage;
  const {banner, sponsors, who_are_we, team_features} =
    frontmatter;

  return {
    props: {
      banner: banner,
      sponsors: sponsors,
      who_are_we: who_are_we,
      team_features: team_features,
    },
  };
};

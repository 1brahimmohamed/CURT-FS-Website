import ImageFallback from "@components/ImageFallback";
import Circle from "@components/Circle";
import {markdownify} from "@lib/utils/textConverter";

const AboutFS = ({data}) => {
  return (
    <div className="section container">
      <div className="row items-center justify-center">
        <div className="animate md:col-6 lg:col-8 md:order-2">
          <div className="about-image relative ">
            <ImageFallback
              className="animate relative w-full rounded-2xl"
              src={data.image}
              width={425}
              height={487}
              alt=""
            />
          </div>
        </div>
        <div className="animate md:col-6 lg:col-4 md:order-1">
          <p className={"mt-7"}> {data.subtitle}</p>
          {markdownify(data.title, "h2", "section-title bar-left mt-4")}
          {markdownify(data.content, "p", "mt-10")}
        </div>
      </div>
    </div>
    );
};

export default AboutFS;

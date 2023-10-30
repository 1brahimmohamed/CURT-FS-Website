import {markdownify} from "@lib/utils/textConverter";
import ImageFallback from "@components/ImageFallback";


const HowFSWorks = ({data}) => {
  return (
    <div>
      <div className="animate text-center">
        <p>{data.subtitle}</p>
        {markdownify(data.title, "h2", "section-title mt-4")}
        <p className="mt-10 lg:px-32 sm:px-2 container">
          Each team designs and manufactures a car
          and present it to a hypothetical
          manufacturing firm.
          <br/><br/>
          During the competition the teams must demonstrate the logic
          behind their proposal and must be able to
          demonstrate that in a series of STATIC &
          DYNAMIC events.

        </p>
        {/*<p className="mt-5 lg:px-32 sm:px-2 container">*/}

        {/*</p>*/}
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-center mb-16">
            <div className="animate lg:col-6 lg:order-1 mb-10">
              <ImageFallback
                className="rounded-xl"
                src={data.speciality.primary.image}
                width={575}
                height={511}
                alt="primary data.speciality"
              />

              <div className="animate lg:6 h-100">
                {markdownify(
                    data.speciality.primary.title,
                    "h2",
                    "mt-4 section-title bar-left"
                )}
                <ul
                    style={{listStyleType: "disc"}}
                    className={"mt-7 mx-5"}
                >
                  {
                    data.speciality.primary.events.map((event, index) => {
                      return (
                          <li
                              style={{fontSize: 16}}
                              key={index}>
                            {event}
                          </li>
                      );
                    })
                  }
                </ul>
              </div>

            </div>
            <div className="animate lg:col-6 lg:order-2">
              <ImageFallback
                className="rounded-xl"
                src={data.speciality.secondary.image}
                width={575}
                height={511}
                alt="secondary data.speciality"
              />

              <div className="animate lg:col-12 lg:order-1 h-100">
                {markdownify(
                    data.speciality.secondary.title,
                    "h2",
                    "mt-4 section-title bar-left"
                )}
                <ul
                    style={{listStyleType: "disc"}}
                    className={"mt-7 mx-5"}
                >
                  {
                    data.speciality.secondary.events.map((event, index) => {
                      return (
                          <li
                              style={{fontSize: 16}}
                              key={index}>
                            {event}
                          </li>
                      );
                    })
                  }
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowFSWorks;

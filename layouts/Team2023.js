import { useState } from "react";
import {markdownify} from "@lib/utils/textConverter";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import CollapseDiv from "./components/CollapseDiv";

const Team2023 = ({data}) => {
  const {frontmatter} = data;
  const {
    title,
    our_members,
  } = frontmatter;

  const [isCollapsed, setIsCollapsed] = useState(false); 

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <section className="section pt-0">
        <Banner title={title}/>

        {/* Directors */}
        <div className="section container">
          <div className="animate text-center">
            <p>{our_members.subtitle}</p>
            {markdownify(our_members.title, "h2", "section-title mt-4")}
            {markdownify(our_members.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <h4 className={"row mt-16 justify-center section-title"}>Directors</h4>

              <div className="row flex justify-center">
                {our_members.directors.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-3"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={150}
                      height={150}
                      alt={member.name}
                    />
                    <h5 className="mt-8">{member.name}</h5>
                    <p className="mt-3">{member.position}</p>
                    <a target="_blank" href={member.linkedin} className={"mt-3 text-center flex justify-center"}>
                      <svg
                        className={"fill-red-800 hover:fill-white"}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="section container">
          <div className="animate text-center">
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <h4 className={"row mt-2 justify-center section-title"}>Teams</h4>


              {/* Directories Mapping */}
              <div className="row flex justify-center mt-20">
                {our_members.directories.map((directory, dir_index) => (

                  <div key={dir_index}>

                    <CollapseDiv
                      buttonName={directory.name}
                      headingTagVaraint={"h4"}
                    >
                      {directory.teams.map((team, index) => (
                        <div
                          key={("member-", index)}
                          className="animate mb-11"
                        >
                          <CollapseDiv
                            buttonName={team.name}
                            headingTagVaraint={"h6"}
                          >
                            
                          <div className="row flex justify-center m-20">
                            {team.members.map((member, index) => (
                              <div
                                key={("member-", index)}
                                className="animate mt-10 text-center md:col-6 lg:col-3"
                              >
                                <ImageFallback
                                  className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                                  src={member.image}
                                  width={150}
                                  height={150}
                                  alt={member.name}
                                />
                                <h5 className="mt-8">{member.name}</h5>
                                <p className="mt-3">{member.position}</p>
                              </div>
                            ))}

                          </div>

                          </CollapseDiv>
                        </div>
                      ))}
                    </CollapseDiv>

                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Team2023;

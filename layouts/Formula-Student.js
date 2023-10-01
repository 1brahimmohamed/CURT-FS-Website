import {markdownify} from "@lib/utils/textConverter";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import Image from "next/image";
import Circle from "@components/Circle";
import AboutFS from "@components/FS/About";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HowFSWorks from "@components/FS/HowFSWorks";
import Acheivements from "@components/FS/Acheivements";


let works = {
  subtitle: "Our Works",
  title: "Our Works",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
};

const FormulaStudent = ({data}) => {
  const {frontmatter} = data;
  const {
    title,
    firstDiv,
    secondDiv,
    achievements
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <Banner title={title}/>

        {/* About */}
        <AboutFS data={firstDiv}/>

        {/* How FS Works */}
        <HowFSWorks data={secondDiv}/>

        <Acheivements data={achievements} />

      </section>
      <Cta/>
    </>
  );
};

export default FormulaStudent;

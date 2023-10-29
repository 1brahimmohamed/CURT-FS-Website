import Banner from "./components/Banner";
import AboutFS from "@components/FS/About";
import HowFSWorks from "@components/FS/HowFSWorks";
import Acheivements from "@components/FS/Acheivements";
import 'react-vertical-timeline-component/style.min.css';

const FormulaStudent = ({data}) => {
  const {frontmatter} = data;
  const {
    title,
    formula_student_info,
    how_it_works,
    achievements
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <Banner title={title}/>

        {/* About */}
        <AboutFS data={formula_student_info}/>

        {/* How FS Works */}
        <HowFSWorks data={how_it_works}/>

        <Acheivements data={achievements} />

      </section>
    </>
  );
};

export default FormulaStudent;

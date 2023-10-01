import {markdownify} from "@lib/utils/textConverter";
import Timeline from "@components/FS/Timeline";

const Achievements = ({data}) => {
    return (
        <div>
            <div className="animate text-center">
                <p>{data.subtitle}</p>
                {markdownify(data.title, "h2", "section-title mt-4")}
                <p className="mt-10 px-32 container">
                </p>
            </div>

            <Timeline data={data.content}/>
        </div>
    )
};

export default Achievements;

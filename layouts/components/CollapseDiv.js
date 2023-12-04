import React, {useState} from "react";
import DynamicTextVariant from "./DynamicTextVariant";

const CollapseDiv = ({ buttonName, headingTagVaraint, children})=> {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed((prevState) => !prevState)
    };

    return (
        <div>
            <DynamicTextVariant
                variant={headingTagVaraint}
                className={"row mt-6 mb-6 justify-center section-title"}
            >
                <button onClick={toggleCollapse}>
                      {buttonName}
                </button>
            </DynamicTextVariant>

            <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                {children}
            </div>
        </div>
    );
};

export default CollapseDiv;
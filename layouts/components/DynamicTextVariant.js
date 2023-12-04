const DynamicTextVariant = ({variant, children, className}) => {
    if (variant === "h4"){
        return ( <h4 className={className}> {children} </h4>)
    }

    else if (variant === "h6"){
        return (<h6 className={className}> {children} </h6>)
    }

    else return (<h1 className={className}> {children} </h1>)

};

export default DynamicTextVariant;

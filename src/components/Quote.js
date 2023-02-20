import React from "react";

const Quote = ({quote, author, category}) => {

    // const ths = useState();
    // console.log(ths);
   

    return (
        <div className="ui centered card raised" style={{marginTop:"50px", width:"50%"}}>
            <div className="content">
                <div className="header" style={{color:"blue"}}>{quote}</div>
                <div className="description">{author}</div>
            </div>
            <div className="extra content">
                <i className="check icon"></i>
                {category}
            </div>
        </div>
    )
}

export default Quote;
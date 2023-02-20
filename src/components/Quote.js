import React from "react";

const Quote = (props) => {

    // const ths = useState();
    // console.log(ths);
   

    return (
        <div className="ui centered card raised" style={{marginTop:"50px", width:"50%"}}>
            <div className="content">
                <div className="header" style={{color:"blue"}}>{props.au}</div>
                <div className="description">{props.c}</div>
            </div>
            <div className="extra content">
                <i class="check icon"></i>
                Quote of the day
            </div>
        </div>
    )
}

export default Quote;
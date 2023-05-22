import megacreator1 from "../assets/megacreator1.png"
import megacreator2 from "../assets/megacreator2.png"
import megacreator3 from "../assets/megacreator3.png"
import megacreator4 from "../assets/megacreator4.png"
import "../components/WhatWeDoItemStyle.css"
const WhatWeDoItem = (props) => {
    return (<div className="rows">
        <img className="what-we-do-item-image"
            role="figure"
            aria-labelledby="notepad"
            src={props.image}></img>
        <div className="content">
            <h2 className="heading"> {props.heading}</h2>
            <h3 className="what-we-do-item-description"> {props.description}</h3>
        </div>
    </div>
    )
}
export default WhatWeDoItem
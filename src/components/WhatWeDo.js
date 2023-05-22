import "../components/WhatWeDo.css"
import React from 'react'
import megacreator1 from "../assets/megacreator1.png"
import megacreator2 from "../assets/megacreator2.png"
import megacreator3 from "../assets/megacreator3.png"
import megacreator4 from "../assets/megacreator4.png"
import WhatWeDoItem from "./WhatWeDoItem"

const WhatWeDo = () => {
  const data = [
    {
      "img": megacreator1 ,
      "heading": "Recruit Donars",
      "description": "Use positioning to fix topbars, sidebars, and backgrounds."
    },
    {
      "img": megacreator2,
      "heading": "Find Candidates",
      "description": "Run a blog, list job openings, or manage your event schedule."
    },
    {
      "img": megacreator3,
      "heading": "Spread Awareness",
      "description": "Use effects like Transforms and Parallax scrolling."
    },
    {
      "img": megacreator4,
      "heading": "Raise Money",
      "description": "Connect your site to the most popular apps out there."
    }
  ]
  return (
    <div className="grid-1">
      <div className="grid">
        {data.map((item, index) => {
          return (
            <>
              <WhatWeDoItem image={item.img}
                heading={item.heading}
                description={item.description}
                key={index}
              ></WhatWeDoItem>
            </>)

        })}
      </div>
    </div>
  )
}

export default WhatWeDo

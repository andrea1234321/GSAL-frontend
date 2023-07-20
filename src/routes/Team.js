import React from 'react'
import "./TeamStyles.css"

const Team = () => {
  return (
    <div className='team-container'>
      <h1>Meet the Team</h1>
      <div className='gsal'>
        <div className="gsal-photo">
          image
        </div>
        <div className="gsal-description">
          <h1 className="gsal-name">
            Jane Doe
          </h1>
          <p className="gsal-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro placeat molestiae similique. Mollitia vitae rerum natus rem? Eaque odio, deserunt repudiandae accusamus veniam dolore dolorem, velit quibusdam atque dolor labore.
          </p>
        </div>
      </div>
      <div className="devs-container">
        <div className='devs'>
          
        </div>
        <div className='devs'>
          
        </div>
      </div>
    </div>
  )
}

export default Team

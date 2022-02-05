import React, {useState} from 'react';
import TextHovered from './TextHovered'
import Question from './quest.png'

const Info = () => {
    const [hovered, setHovered] = useState(false)
    const handleMouseEnter = () =>{
        setHovered(true)
    }
    const handleMouseLeave =()=>{
        setHovered(false)
    }
  return (
    <div>
        <div className="container">
            <img className="info-img" src={Question} alt="info-img"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            />
            {hovered && <TextHovered/>}
        </div>
    </div>
  )
  
};

export default Info;

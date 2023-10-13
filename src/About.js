
import "./About.css"
const About = () => {
    return <>
    <div className="page_container">

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
      <div className="about_container">

<h1>
    Nikita Shtarkman
</h1>
<h2>
My name is Nikita Shtarkman and I am a designer and technologist specializing in 3D technology. I have worked for Material Bank, UnderArmour, and OVFX. 
            <br/>
            <br/>
            I am a confident designer who works with a background.
    <br/>
    Some of my interests are 3D modeling, procedural design, web design,
    creative coding, and data visualization. 
</h2>
</div>
<div> <img src = "Thumbnails/bear.jpg"/></div>
  </div>
  </div>


    </>
}

export default About
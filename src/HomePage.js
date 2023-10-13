import Navbar from './Navbar';
import Projects from './Projects'


const HomePage = () => {
    return <>
        <div className='entry_container'>
          <div className='entry_text'>
            <h1>Nikita Shtarkman</h1>
            <h2>Design + Technology + 3D</h2>
          </div>
          <video width="70%" height="100%" autoPlay loop muted  >
                <source src="Index/Ident_low.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>   
          <img src = "Icons/down-arrow.svg" id="down-arrow"/>
        </div>
        <Projects/>
    </>

}

export default HomePage


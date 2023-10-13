import { useState } from "react"
import "./Projects.css"
import {ProjectItem, ART_TYPE, TYPE_ART} from "./ProjectItem"





const Projects = () => {

    const projects = [
        <ProjectItem type = {[ART_TYPE["3D"]]} title = {"Mr.Pop"} 
        caption = {"Character art polycount challenge winner."} 
        image = {"Thumbnails/bear.jpg"}/>,
        <ProjectItem type = {[ART_TYPE["3D"]]} title = {"Mr.Pop"} 
        caption = {"Character art polycount challenge winner."} 
        image = {"Thumbnails/bear.jpg"}/>,

        <ProjectItem type = {[ART_TYPE.Design, ART_TYPE.Motion]} title = {"Parsons Festival"} 
        caption = {"Design and motion for the yearly parsons festival."} 
        image = {"Thumbnails/Parsons_Festival.mp4"}/>,

        <ProjectItem type = {[ART_TYPE["3D"]]} title = {"Dragon Ash"} 
        caption = {"Modeling and texturing challenge."} 
        image = {"Thumbnails/gun.jpg"}/>,

        <ProjectItem type = {[ART_TYPE["3D"], ART_TYPE.Design]} title = {"Louis Vuitton X Kanye Jaspers"} 
        caption = {"A freelance project with extra graphic design flourishes."} 
        image = {"Thumbnails/Sneaks.mp4"}/>,

        <ProjectItem type = {[ART_TYPE["3D"], ART_TYPE.Motion]} title = {"Revolve | Consist"} 
        caption = {"Motion graphics and 3D simulation to match a soundscape."} 
        image = {"Thumbnails/Revolve.mp4"}/>,

        <ProjectItem type = {[ART_TYPE.Motion, ART_TYPE["3D"], ART_TYPE.Design]} title = {"Revolve | Consist"} 
        caption = {"Motion graphics and 3D simulation to match a soundscape."} 
        image = {"Thumbnails/Boxy.mp4"}/>,


    ]
    const [filter, setFilter] = useState(-1)

    const filteredComponents = projects.filter(component => {if (filter ==-1) {return true} else return component.props.type.includes(filter)});
    const filterSelector = (current_filter_value, set_filter_value) => {
        if (current_filter_value == set_filter_value) {
            setFilter(-1)
        }
        else {
            setFilter(set_filter_value)
        }
    }
    return <>
    <div className="page_container">

    <div className="selector">

        <span className={(filter==0 )? "item_type selected_item": "item_type"} onClick={()=> {filterSelector(filter, 0)}}>3D</span>
        —
        <span className={(filter==1 )? "item_type selected_item": "item_type"} onClick={()=> {filterSelector(filter, 1)}}>Design</span>
        —
        <span className={(filter==2 )? "item_type selected_item": "item_type"} onClick={()=> {filterSelector(filter, 2)}}>Web</span>
        —
        <span className={(filter==3 )? "item_type selected_item": "item_type"} onClick={()=> {filterSelector(filter, 3)}}>Motion</span>
    </div>
    <div class="project_grid">
        {filteredComponents.map((component, index) => (
        <div key={index}>
            {component}
        </div>
        ))}
    </div>
    </div>

  </>
  
}
export default Projects
import { Link } from "react-router-dom"


export const ART_TYPE =  {
    "3D": 0,
    "Design": 1,
    "Web": 2,
    "Motion": 3,

}

export const TYPE_ART = Object.entries(ART_TYPE).map(([key, value]) => [value, key]);

console.log(TYPE_ART)
export const ProjectItem = (props) => {

    let stack = props.type.map((d) => <div className="item_type">{TYPE_ART[d][1]}</div>)
    let val = <img src= {props.image}/>

    if(props.image && props.image.includes('.mp4')) {
        val = <video src = {props.image} autoPlay muted loop width="100%" > </video>

    }
    
    return <>


        <Link to = "projects/bear" style={{textDecoration: 'none'}}>
        <div className="project_item big_item">
            {val}
            <h1>{props.title} </h1>
            <h2>{props.caption}</h2>
            <div className="item_house">
                {stack}
            </div>
        </div>
        </Link>

    </>
}

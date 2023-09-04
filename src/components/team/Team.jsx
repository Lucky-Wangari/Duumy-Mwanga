import React from "react";
// import grace1 from "../../assets/images/grace1.png";
import grace from "../../assets/images/grace1.png"
import reddiet from "../../assets/images/reddiet.png";
import pauline from "../../assets/images/pauline.png";
import angela from "../../assets/images/angela.png";
import lucky from "../../assets/images/Lucky.png";
import './style.css';



export const team = [
    {
        image: grace,
        name: "Grace Njuguna",
        role:"Software Developer",
    },
    {
        image: reddiet,
        name: "Reddiet Hadera",
        role:"Software Developer",
    },
    {
        image: pauline,
        name: "Pauline Wanjiru",
        role:"Software Developer",
    },
    {
        image: angela,
        name: "Angela Adisa",
        role:"Software Developer",
    }, 
    {
        image: lucky,
        name: "Lucky Wangari",
        role:"Software Developer",
    },
];

const Team = () => {
    return (
        <>
        <section className="team-section">
            <h3>Team</h3>
            <div className="team">
                {team.map((item, index) =>(
                    <div className="team-images" key={index * Math.random()}>
                        <img src={item.image}/>
                       <p>{item.name}</p>
                       <p>{item.role}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
};
export default Team;
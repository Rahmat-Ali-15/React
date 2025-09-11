// import "./Profile.css"
// import data from "../Data/Data.json"

// export const Profile = () => {

//     return (
//         <>
//             {
//                 data && data.profile.map((el) => (
//                     <main key={el.name}>
//                         <section className="child-1">
//                             <div className="info">
//                                 <h3 name="name">name: {el.name}</h3>
//                                 <p name="profile">profile: {el.designation}</p>
//                                 <p name="skill">skill: {el.skill}</p>
//                                 <div className='platform-div'>
//                                     <p name="platform">platform: </p>
//                                     {
//                                         el && el.platform.map((els) => (
//                                             <p key={els.name} style={{ borderRadius: '10px', padding: "1px 10px", background: els.color, color: "#ffff" }} name="platform">{els.name}</p>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                             <div className="img-prf">
//                                 <img src={el.img} alt={el.name} />
//                             </div>
//                         </section>
//                         <section className="child-2">
//                             {
//                                 el && el.socialMedia.map((elss) => (
//                                     <div key={elss.rate} className="box-1">
//                                         <h2>{elss.rate}</h2>
//                                         <p>{elss.text1}</p>
//                                         <div style={{ background: elss.color, padding: "10px 20px", borderRadius: "10px" }} className='img-ss'>
//                                             <img style={{ background: elss.color }} src={elss.icon} alt={elss.text} />
//                                             <p style={{ background: elss.color }}>{elss.text}</p>
//                                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </section>
//                     </main>
//                 ))
//             }
//         </>
//     )
// }


import "../Components/Profile.css"
import data from "../Data/Data.json";

export const Profile = () => {
    return (
        <>
            {
                data.profile.map((el) => (

                    <main key={el.name}>
                        <section className="profile-container">
                            <div className="info-div">
                                <h3 name="profile_name">Name : {el.name}</h3>
                                <p name="designation">Profile : {el.designation}</p>
                                <p name="skill">Skills : {el.skill}</p>
                                <div className="platform-div" style={{ "display": "flex" }}>
                                    <p>Platform : </p>
                                    {el.platform.map((pl) => (
                                        <p key={pl.name} style={{ "display": "flex", "gap": "20px", "color": "red", "border": "1px solid red", "padding": "10px" }}>
                                            {pl.name}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="profile-img">

                            </div>
                        </section>

                        <section className="socialMedia-container">

                        </section>

                    </main>
                ))
            }
        </>
    )
}
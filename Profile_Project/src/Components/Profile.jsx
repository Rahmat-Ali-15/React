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
//                                         <div style={{ background: elss.color, padding: "10px 20px", borderRadius: "10px" }}  className='img-ss'>
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
                    <body>

                        <main key={el.name}>
                            <section className="profile-container">
                                <div className="info-div">
                                    <h3 name="profile_name">Name : {el.name}</h3>
                                    <p name="designation" id="profile">Profile : {el.designation}</p>
                                    <div className="skill-div">
                                        <p name="skill" id="skill">Skills : </p>
                                        <div>
                                            {el.skill.map((sk) => (
                                                <p key={sk}>{sk}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="platform-div">
                                        <p>Platform : </p>
                                        <div>
                                            {el.platform.map((pl) => (
                                                <p id="platform_p" key={pl.name} style={{ "color": pl.color }}>{pl.name}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-img">
                                    <img src={el.img} alt={el.name} />
                                </div>
                            </section>

                            <section className="socialMedia-container">
                                    <div className="fan"></div>
                                    <div className="follower"></div>
                                    <div className="following"></div>
                            </section>

                        </main>
                    </body>
                ))
            }
        </>
    )
}
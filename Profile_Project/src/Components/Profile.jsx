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
                                {el.socialMedia.map((sl) => (
                                    <div key={sl.rating} className="box">
                                        <h1>{sl.rating}</h1>
                                        <p>{sl.text1}</p>
                                        <div className="icon-container" style={{ "backgroundColor": sl.color }}>
                                            <img src={sl.icon} alt={sl.text2} />
                                            <p>{sl.text2}</p>
                                        </div>
                                    </div>

                                ))}
                            </section>

                        </main>
                    </body>
                ))
            }
        </>
    )
}
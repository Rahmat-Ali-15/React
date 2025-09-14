import React from 'react'
import "./Profile.css"

import data from "../Data/Data.json"


export const Profile = () => {
    return (
        <>
            <body>

                {
                    data.profile.map((val) => (
                        <main key={val.name}>

                            <div className='card-one'>

                                <div className='profile-img'>
                                    <img src={val.img} alt="Profile Img" />
                                </div>

                                <div className='profile-info'>

                                    <div>
                                        <h1>{val.name}</h1>
                                        <p>{val.desiganation}</p>
                                    </div>

                                    <div>
                                        <p>{val.about}</p>
                                    </div>

                                    <div className='socialMedia-container'>
                                        {val.socialMedia.map((sl) => (
                                            <div key={sl.icon} className="socialMedia-icon">
                                                <img src={sl.icon} alt={sl.name} />
                                            </div>

                                        ))}
                                    </div>

                                </div>

                                <div className="contact-info">
                                    {
                                        val.contact.map((cl) => (
                                            <div key={cl.icon} className='icon'>
                                                <div>
                                                    <img src={cl.phone_icon} alt={cl.phone} />
                                                    <p>{cl.number}</p>
                                                </div>
                                                <div>
                                                    <img src={cl.email_icon} alt={cl.email} />
                                                    <p>{cl.email}</p>
                                                </div>
                                                <div>
                                                    <img src={cl.location_icon} alt={cl.location} />
                                                    <p>{cl.location}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            <div className="card-two">

                                <div className='profile-img'>
                                    <img src={val.img} alt="Profile Img" />
                                    <div>
                                        <h1>{val.name}</h1>
                                        <p>{val.desiganation}</p>
                                    </div>
                                </div>

                                <div>
                                    <p>{val.about}</p>
                                </div>
                                <div className='socialMedia-container'>
                                    {
                                    val.socialMedia.map((sl)=>(
                                        <div key={sl.icon} className='socialMedia-icon'>
                                            <img src={sl.icon} alt={sl.name} />
                                        </div>
                                    ))
                                    }
                                </div>
                                <div className="contact-info">
                                    {
                                        val.contact.map((cl) => (
                                            <div key={cl.icon} className='icon'>
                                                <div>
                                                    <img src={cl.phone_icon} alt={cl.phone} />
                                                    <p>{cl.number}</p>
                                                </div>
                                                <div>
                                                    <img src={cl.email_icon} alt={cl.email} />
                                                    <p>{cl.email}</p>
                                                </div>
                                                <div>
                                                    <img src={cl.location_icon} alt={cl.location} />
                                                    <p>{cl.location}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </main>
                    ))
                }
            </body>
        </>
    )
}
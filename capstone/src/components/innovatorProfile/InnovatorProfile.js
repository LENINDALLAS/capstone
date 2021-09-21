import React, { useState, useEffect } from 'react';
import '../investorProfile/InvestorProfile.css';
import Avatar from "@material-ui/core/Avatar";
import ProfileIdea from '../profileIdea/ProfileIdea.js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

function InnovatorProfile(props) {

    // const { name, pic, postedIdea } = user[0]
    // console.log(investedIdea)
    const [picture, setPicture] = useState('');
    // console.log('user', user[0].name);

    const { innovatorProfile } = useSelector((state) => state.innovatorProfile);
    // console.log(innovatorProfile, loading, 'data in innovator profile');

    const { name, profile_picture, ideas } = innovatorProfile;
    // console.log(name, profile_picture, ideas, 'check2')

    useEffect(() => {
        if (profile_picture) {
            setPicture(profile_picture);
        }
    }, [profile_picture]);

    return (
        <div>
            <Navbar />
            {
                innovatorProfile &&
                <div className='profileContainer'>
                    <div className="profileUpper">
                        <Avatar
                            alt="investor profile"
                            src={picture ? picture : "https://bit.ly/3td6kYa"}
                            className="profileAvatar profilePic"
                        />
                        <div className="profileName">{name}</div>
                        <div className='profileCountList'>
                            <div className='countCounter'>
                                <p>Uploaded Ideas</p>
                                <p>{ideas.length}</p>
                            </div>

                        </div>
                    </div>
                    <div className='ideaSection'>
                        <div className='ideaSectionTitle'><u>Uploaded ideas</u></div>
                        {
                            ideas && ideas.map((item, idx) => {
                                return (
                                    <ProfileIdea key={idx} ideaName={item.title} description={item.description.split(' ').slice(0, 20).join(' ')} />
                                )
                            })
                        }
                    </div>
                </div>
            }

            <Footer />
        </div>
    );
}

export default InnovatorProfile;
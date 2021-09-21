import React, { useEffect, useState } from 'react';
import './InvestorProfile.css';
import Avatar from "@material-ui/core/Avatar";
import ProfileIdea from '../profileIdea/ProfileIdea.js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

function InvestorProfile(props) {

    // const { name, pic, investedIdea, interestedIdea } = user[0]
    // console.log(investedIdea)
    const [picture, setPicture] = useState('');
    // console.log('user', user[0].name);

    const { investorProfile } = useSelector((state) => state.investorProfile);
    // console.log(investorProfile, loading, 'data in investor profile');

    const { name, profile_picture, interested_ideas, invested_ideas } = investorProfile;
    // console.log(name, profile_picture, interested_ideas, invested_ideas, 'check')

    useEffect(() => {
        if (profile_picture) {
            setPicture(profile_picture);
        }
    }, [profile_picture]);

    return (
        <div className="profileScreen">
            <Navbar />
            {
                investorProfile &&
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
                                <p>Invested Ideas</p>
                                <p>{invested_ideas.length}</p>
                            </div>
                            <div className='countCounter'>
                                <p>Interested Ideas</p>
                                <p>{interested_ideas.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className='ideaSection'>
                        <div className='ideaSectionTitle'><u>Invested ideas</u></div>
                        {
                            invested_ideas && invested_ideas.map((item, idx) => {
                                return (
                                    <ProfileIdea key={idx} ideaName={item.title} description={item.description.split(' ').slice(0, 20).join(' ')} />
                                )
                            })
                        }
                    </div>
                    <div className='ideaSection'>
                        <div className='ideaSectionTitle'><u>Interested ideas</u></div>
                        {
                            interested_ideas && interested_ideas.map((item, idx) => {
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

export default InvestorProfile;
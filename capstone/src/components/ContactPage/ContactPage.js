import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './ContactPage.css'
import Animation from '../animation/Animation'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import data from '../ideaShort/data.js';
import Zoom from 'react-reveal/Zoom';
import { useSelector } from 'react-redux';

function ContactPage(props) {

    const { ideaById: data } = useSelector((state) => state.getOneIdeaById);
    // console.log(data, 'data user by id contact page');


    return (
        <div>
            <Navbar />
            <div className="card-main">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="card-body">
                        <span class="bg"></span>
                        <span class="bg"></span>
                        <span class="bg"></span>
                        <div class="content">
                            <h2 className="title">Invent Ideas</h2>
                            <p className="para">Innovation In You !!!!!</p>
                        </div>
                    </div>
                </div>
                {/* {
                    console.log(data.title, 'title'),
                    console.log(data.created_by.name, 'name'),
                    console.log(data.created_by.email, 'email'),
                    console.log(data.created_by.mobileno, 'mobile'),
                    console.log(data.created_by.city, data.created_by.district, data.created_by.pincode, data.created_by.state, 'address')




                } */}
                {
                    data &&
                    <Zoom top cascade>
                        <div className="contactInfo">
                            <div className="contact-content">
                                <EmojiObjectsIcon className="icons" /> <p>Idea : {data.title}</p>
                            </div>
                            <div className="contact-content">
                                <DescriptionIcon className="icons" /> <p>Name : {data.created_by.name}</p>
                            </div>
                            <div className="contact-content">
                                <EmailIcon className="icons" /> <p>Email : {data.created_by.email}</p>
                            </div>
                            <div className="contact-content">
                                <CallIcon className="icons" />  <p>Phone Number : {data.created_by.mobileno}</p>
                            </div>
                            <div className="contact-content">

                                <ContactMailIcon className="icons" />  <p>Address : {`${data.created_by.city}, ${data.created_by.district}, ${data.created_by.pincode}, ${data.created_by.state}`}</p>
                            </div>
                        </div>
                    </Zoom>
                }
            </div>
            <br />
            <Animation />
        </div>
    )
}

export default ContactPage

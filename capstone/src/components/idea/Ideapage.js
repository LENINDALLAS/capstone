import React, { useState, useEffect } from 'react'
import './IdeaPage.css'
import Nav from '../Navbar/Navbar'
import ImgSlider from './IdeaPageCarousel.js';
import avatar from '../img/lenin.jpeg'
import Animation from '../animation/Animation';
import { Button } from '@material-ui/core';
import data from '../ideaShort/data.js';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

function Ideapage(props) {

    const { ideaById: data, loading } = useSelector((state) => state.getOneIdeaById);
    // console.log(data, 'data user by id');

    // const idea = data.filter((item) => item.id === props.match.params.id);

    // console.log(idea, ' ideas')

    // const [ideaItem, setIdeaItem] = useState(idea)

    // useEffect(() => {
    //     setIdeaItem(idea)
    // eslint-disable-next-line 
    // }, [props.match.params.id])

    // console.log(ideaItem[0]?.image)

    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <div>
            <Nav />
            {/* {
                console.log(data.title, 'idea page title'),
                console.log(data.description, 'idea page description'),
                console.log(data.image, 'idea page image'),
                console.log(data._id, 'idea page id'),
                console.log(data.created_by.name, 'idea page name'),
                console.log(data.created_by.profile_picture, 'idea page'),
                console.log(data.createdAt.slice(0, 10), 'idea page date')

            } */}


            <div className="idea" >
                {data &&
                    <Fade top>
                        <div className="idea-contents">
                            <img alt="avatar" src={data.created_by.profile_picture} className='ideaImage' />
                            <h2 className="name">Name:{data.created_by.name}</h2>
                            <h2 className="date">Date:{data.createdAt.slice(0, 10)}</h2>
                        </div>
                        <h1 className="idea-title" align="center">{data.title}</h1>
                        <div className="image__container__idea">
                            <ImgSlider innovatorItems={data.image} />
                        </div>

                        <p align="center">{data.description}</p>
                        <div className="contact">
                            <Button className='navigation_button' >
                                <Link to={`/contact-page/${data._id}`} className='globalLink'>
                                    Contact
                                </Link>
                            </Button>
                        </div>
                    </Fade>
                }

            </div>
            <Animation />
        </div>
    )
}

export default Ideapage

import React from 'react';
import './IdeaShort.css'
import ImgSlider from '../Home/Caroussel/AliceCarousel'
// import innovatorItems from './data'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOneIdeaById } from '../../redux/actions/getAllIdeaActions';
import { addToInterestedIdea } from '../../redux/actions/investerInterestedInvestedActions';

function IdeaShort({ innovatorItems }) {
    // console.log(innovatorItems, 'idea short sliced items')

    const dispatch = useDispatch();

    const getIdeaById = (id) => {
        // console.log(id, 'idea id')
        dispatch(getOneIdeaById(id));
    }

    const handleInterested = (id) => {
        // console.log(id, 'interested')
        dispatch(addToInterestedIdea(id));
    }

    return (
        <div>
            <div className="ideaShortColumRight">
                {
                    innovatorItems && innovatorItems.map((items) => {

                        return (
                            <div className="hovering" key={items._id}>
                                <h2 className="idea-header">{items.title}</h2>
                                <ImgSlider innovatorItems={items.image} />
                                <p className="idea-description">{items.description.split(' ').slice(0, 20).join(' ')}...</p>
                                <div className="idea-intrested">
                                    <Button className="intrested" variant="contained" onClick={() => handleInterested(items._id)}>
                                        <Link to={`/idea-page/${items._id}`} className='globalLink' onClick={() => getIdeaById(items._id)}>
                                            Interested
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IdeaShort
import React from 'react'
import './IdeaShort.css'
import ImgSlider from '../Home/Caroussel/AliceCarousel'
import innovatorItems from './data'
import Button from '@material-ui/core/Button';

function IdeaShort({ innovatorItems }) {
    return (
        <div>
            <div className="column-right">
                {
                    innovatorItems.map((items) => {
                        return (
                            <div className="hovering" key={items.id}>
                                <h2 className="idea-header">{items.name}</h2>
                                <ImgSlider innovatorItem={innovatorItems} />
                                <p className="idea-description">{items.description}</p>
                                <div className="idea-intrested">
                                    <Button className="intrested" variant="contained">Intrested</Button>
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
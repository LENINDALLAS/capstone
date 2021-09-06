import React from 'react'
import './Timeline.css'
import step1 from '../../img/step1.png'
import step2 from '../../img/step2.png'
import step3 from '../../img/step3.png'
import step4 from '../../img/step4.png'

function Timeline() {
    return (
        <div className="submain">
            <h1 className="description">How it Works</h1>
            <div className="timeline">
                <div className="center">
                    <div className="box"><img src={step1} alt="" /></div>
                    <div className="center">Step:1</div>
                    <div className="center">Fill your preferences.</div>
                    <div className="center">Provide the time-slots and programming languages you arecomfortable with.</div>
                </div>
                <div className="center">
                    <div className="center">Step:2</div>
                    <div className="center">Fill your preferences.</div>
                    <div className="center">Provide the time-slots and programming languages you arecomfortable with.</div>
                    <div className="box"><img src={step2} alt="" /></div>
                </div>
                <div>
                    <div className="box"><img src={step3} alt="" /></div>
                    <div className="center">Step:3</div>
                    <div className="center">Fill your preferences.</div>
                    <div className="center">Provide the time-slots and programming languages you arecomfortable with.</div>
                </div>
                <div>
                    <div className="box"></div>
                    <div className="center">Step:4</div>
                    <div className="center">Fill your preferences.</div>
                    <div className="center">Provide the time-slots and programming languages you arecomfortable with.</div>
                    <div className="box"><img src={step4} alt="" /></div>
                </div>
            </div>

        </div>
    )
}

export default Timeline

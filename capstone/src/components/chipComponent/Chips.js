import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
// import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar } from '@material-ui/core';
import { chipData } from './chipData.js';
import { useDispatch } from 'react-redux';
import { getIdeaByFilterCategory } from '../../redux/actions/getAllIdeaActions.js';


function Chips() {

    const dispatch = useDispatch();

    const [allCategory, setAllCategory] = useState(chipData);
    const [filteredCategory, setFilteredCategory] = useState([]);


    useEffect(() => {
        // console.log('filter', filteredCategory);
        if (filteredCategory) {
            dispatch(getIdeaByFilterCategory(filteredCategory));
        };
    }, [filteredCategory]);

    const addCategory = (item) => {
        setAllCategory(allCategory.filter((tag) => tag !== item));
        setFilteredCategory([...filteredCategory, item]);
        // console.log(filteredCategory);
    }

    const removeCategory = (item) => {
        setFilteredCategory(filteredCategory.filter((tag) => tag !== item));
        setAllCategory([...allCategory, item]);
    }

    // console.log(allCategory);

    // console.log(filteredCategory);



    return (
        <div>
            {
                filteredCategory && filteredCategory.map((item, idx) => {
                    return (
                        <div key={idx} >
                            <Chip
                                size="medium"
                                label={item}
                                clickable
                                color="secondary"
                                avatar={<Avatar><i class="fas fa-times"></i></Avatar>}
                                onClick={() => removeCategory(item)}
                            />
                            <br /><br />
                        </div>
                    )
                })
            }
            {
                allCategory.map((item, idx) => {
                    return (
                        <div key={idx} >
                            <Chip
                                size="medium"
                                label={item}
                                clickable
                                color="primary"
                                avatar={<Avatar>{item[0]}</Avatar>}
                                onClick={() => (addCategory(item))}
                            />
                            <br /><br />
                        </div>
                    )
                })}

        </div>
    );
}

export default Chips;
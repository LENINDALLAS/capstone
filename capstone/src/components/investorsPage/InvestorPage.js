import React, { useState, useEffect, useMemo } from 'react';
import Nav from '../Navbar/Navbar';
import '../ideaShort/IdeaShort.css';
import innovatorItems from '../ideaShort/data';
import IdeaShort from '../ideaShort/IdeaShort';
import Footer from '../Footer/Footer.js';
// import { chipData } from '../chipComponent/chipData';
import Chips from '../chipComponent/Chips';
import Pagination from '../pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllIdea } from '../../redux/actions/getAllIdeaActions';
import Loading from '../loading/Loading.js';

let nos = [];
function InvestorsPage() {

    const dispatch = useDispatch();

    const { loading, allIdea } = useSelector((state) => state.getAllIdea);
    // console.log(allIdea, loading, 'investor page getAllIdea')

    const [posts, setPosts] = useState(allIdea);
    const [no, setNo] = useState(1);
    const [page, setPage] = useState([]);
    // const [data, setData] = useState('');
    // console.log(data, 'investor page dta');

    useEffect(() => {
        dispatch(getAllIdea());
        // eslint-disable-next-line
    }, []);
    // console.log(nos, 'nos')

    useEffect(() => {
        const noOfPages = posts?.length / 10;
        // console.log(noOfPages, 'noOfPages')
        if (noOfPages) {
            renderNumber(noOfPages)
        }
        setPosts(allIdea)
    }, [posts, allIdea])


    const renderNumber = (noOfPages) => {
        nos = []
        for (let i = 0; i < Math.ceil(noOfPages); i++) {
            nos.push(i + 1);
        }
        // console.log(nos, 'nos2')
        setPage(nos)
    };

    const onPageChange = (no) => {
        setNo(no);
        window.scroll(0, 0);
    };


    const endIndex = no * 10;
    const startIndex = endIndex - 10;
    if (posts) {
        var data = posts.slice(startIndex, endIndex);
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <Nav />
            <div className="">
                <div className="column-left">

                    <Chips />
                </div>
                <div className="column-right">
                    <IdeaShort innovatorItems={data} />
                    <Pagination onPageChange={onPageChange} nos={page} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InvestorsPage

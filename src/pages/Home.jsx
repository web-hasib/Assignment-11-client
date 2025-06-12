import React from 'react';
import HomeBanner from '../components/HomeBanner';
import TopBooks from '../components/TopBooks';
import { useLoaderData } from 'react-router';

const Home = () => {
    const topbooks = useLoaderData();
    // console.log(topbooks);

    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopBooks topbooks={topbooks}></TopBooks>
        </div>
    );
};

export default Home;
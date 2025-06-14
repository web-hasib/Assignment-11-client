
import FaqSection from '../components/FAQSection';
import HomeBanner from '../components/HomeBanner';
import TopBooks from '../components/TopBooks';
import { useLoaderData } from 'react-router';
import WhyChooseSection from '../components/WhyChooseSection';

const Home = () => {
    const topbooks = useLoaderData();
    // console.log(topbooks);

    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopBooks topbooks={topbooks}></TopBooks>
            <FaqSection></FaqSection>
            <WhyChooseSection></WhyChooseSection>
        </div>
    );
};

export default Home;
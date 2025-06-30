
import FaqSection from '../components/FAQSection';
import HomeBanner from '../components/HomeBanner';
import TopBooks from '../components/TopBooks';
import { useLoaderData } from 'react-router';
import WhyChooseSection from '../components/WhyChooseSection';
import FeaturedCategories from '../components/FeaturedCategories';
import { Helmet } from 'react-helmet';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
    const topbooks = useLoaderData();
    // console.log(topbooks);

    return (
        <div>
            <Helmet>
                <title>
                    BookShelf || Home
                </title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <div className='max-w-7xl mx-auto'>
<TopBooks topbooks={topbooks}></TopBooks>
            <FaqSection></FaqSection>
            <FeaturedCategories></FeaturedCategories>
            <TestimonialCarousel></TestimonialCarousel>
            <WhyChooseSection></WhyChooseSection>
            </div>
        </div>
    );
};

export default Home;
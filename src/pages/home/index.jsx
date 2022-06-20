import React from 'react';
import image1 from '/assets/images/pages/home/image-01.jpg';
import image2 from '/assets/images/pages/home/image-02.jpg';
import image3 from '/assets/images/pages/home/image-03.jpg';
import ImageCard from '/src/components/ImageCard.jsx';
import image4 from '/assets/images/pages/home/image-04-lg.jpg';
import image5 from '/assets/images/pages/home/image-05-lg.jpg';
import image6 from '/assets/images/pages/home/image-06-lg.jpg';

import { useNavigate } from "react-router-dom";

const Home = () => {
  const cards = [
    {
        'title': 'Summer Lunch Menu By Mark Best',
        'content': 'AEG ambassador Mark Best\'s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
        'image': image4,
        'link': '/card-1'
    },
    {
        'title': 'A Traditional Christmas Eve, Mark Best Style',
        'content': 'One of Australia\'s best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.',
        'image': image5,
        'link': '/card-2'
    },
    {
        'title': 'Taking Taste Further',
        'content': 'This exclusive cookbook gives you all the know - how you need. We\'ve designed it to make sure you get the most out of our products - and the best out of your food.',
        'image': image6,
        'link': '/card-3'
    },
  ];
  let navigate = useNavigate();
  return (
      <div className='container home-top-padding'>
        {/* TODO: create anchor clicks */}
        {/* Section 1 */}
        <div className='row s1-container'>
            {/* TODO: Create modal to show larger image */}
            <div className='col-12 col-lg-8 mb-5 mb-lg-0'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='s1-home-image-container-1'>
                            <img className='s1-home-image' src={image1} alt="image-01"/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-12 s1-home-image-container-2'>
                                <img className='s1-home-image' src={image2} alt="image-01"/>
                            </div>
                            <div className='col-12 s1-home-image-container-3'>
                                <img className='s1-home-image' src={image3} alt="image-01"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='row'>
                    {/* TODO: Limit text length */}
                    <div className='col-12 mb-3'>
                        <p className='title-3 fw-light s1-home-title-1'>ANSWER YOUR BODY'S NEEDS</p>
                        <p className='p3 fw-light'>The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.</p>
                    </div>
                    <div className='col-12'>
                        <p className='title-6 fw-bold text-danger s1-home-title-2'>BE MINDFUL</p>
                        <p className='p6 fw-bold'>Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 2 */}
        <div className='row s2-container'>
            <div className='col-12'>
                <p className='title-1 fw-light text-center'>ALL THE LATEST FROM AEG</p>
            </div>
        </div>

        {/* Section 3 */}
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                    {
                        cards.map((item, index) => {
                            return <div className='col-12 col-lg-4 mb-4' key={'image-card-container-' + index}>
                                <ImageCard 
                                    image={item.image} 
                                    title={item.title} 
                                    content={item.content} 
                                    redirect={() => navigate(item.link)} 
                                    key={'image-card-' + index}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
      </div>
  );
};

export default Home;
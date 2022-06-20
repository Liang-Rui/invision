import React from 'react';
import image1 from '/assets/images/pages/home/image-01.jpg';
import image2 from '/assets/images/pages/home/image-02.jpg';
import image3 from '/assets/images/pages/home/image-03.jpg';

const Home = () => {
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
        <div className='row'>

        </div>
      </div>
  );
};

export default Home;
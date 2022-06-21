import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "/src/utils/windowDimension.js";

import image1 from '/assets/images/pages/home/image-01.jpg';
import image1lg from '/assets/images/pages/home/image-01-lg.jpg';
import image2 from '/assets/images/pages/home/image-02.jpg';
import image2lg from '/assets/images/pages/home/image-02-lg.jpg';
import image3 from '/assets/images/pages/home/image-03.jpg';
import image3lg from '/assets/images/pages/home/image-03-lg.jpg';
import ImageCard from '/src/components/ImageCard.jsx';
import image4 from '/assets/images/pages/home/image-04-lg.jpg';
import image5 from '/assets/images/pages/home/image-05-lg.jpg';
import image6 from '/assets/images/pages/home/image-06-lg.jpg';

import iconPlus from '/assets/images/icons/CTA/icon-plus-96.png';
import iconMinus from '/assets/images/icons/CTA/icon-minus-96.png';

const Home = () => {
  const [modalImage, setModalImage] = useState(null);
  const [textStateOne, setTextStateOne] = useState(false);
  const [textStateTwo, setTextStateTwo] = useState(false);
  const [p1MaxL, setP1MaxL] = useState(600);
  const [p2MaxL, setP2MaxL] = useState(200);

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

  const paragraphs = [
    "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
    "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
  ];


  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  const onClickElements = (e) => {
    console.log('clicked!', e.target)
  }

  useEffect(() => {
    if (width >= 1300) {
        setP1MaxL(500);
        setP2MaxL(200);
    } else if (width >= 1200) {
        setP1MaxL(286);
        setP2MaxL(82);
    } else if (width >= 992) {
        setP1MaxL(190);
        setP2MaxL(66);
    } else {
        setP1MaxL(1000);
        setP2MaxL(1000);
    }
  }, [width]);

  useEffect(() => {
    document.addEventListener('click', onClickElements, true);
    return function cleanup() {
        document.removeEventListener('click', onClickElements, true);
    };
  });

  const toggle = previous => !previous;

  return (
      <div className='container home-top-padding'>

        {/* Section 1 */}
        <div className='row s1-container'>
            <div className='col-12 col-lg-8 mb-5 mb-lg-0'>
                <div className='row'>
                    <div className='col-6'>
                        <div data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setModalImage(image1lg)} className='s1-home-image-container-1'>
                            <img className='s1-home-image' src={image1} alt="image-01"/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setModalImage(image2lg)} className='col-12 s1-home-image-container-2'>
                                <img className='s1-home-image' src={image2} alt="image-01"/>
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => setModalImage(image3lg)} className='col-12 s1-home-image-container-3'>
                                <img className='s1-home-image' src={image3} alt="image-01"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-4'>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <p className='title-3 fw-light s1-home-title-1'>ANSWER YOUR BODY'S NEEDS</p>
                        <p className={(paragraphs[0].length > p1MaxL ? 'd-none ' : '') + 'p3 fw-light'}>{paragraphs[0]}</p>
                        <p className={(paragraphs[0].length > p1MaxL ? '' : 'd-none ') + 'p3 fw-light s1-text-overflow-border position-relative'}>{paragraphs[0].slice(0, p1MaxL) + (textStateOne ? (paragraphs[0][p1MaxL] == '' ? '' : '-') : '...') }
                            <div className="collapse" id="imageTextParagraphOne">{paragraphs[0].slice(p1MaxL)}</div>
                            <img onClick={() => setTextStateOne(toggle)} 
                                 data-bs-toggle="collapse" 
                                 data-bs-target="#imageTextParagraphOne" 
                                 aria-expanded="false" 
                                 aria-controls="imageTextParagraphOne"
                                 className='s1-cta-plus' 
                                 src={textStateOne ? iconMinus : iconPlus} 
                                 alt='icon-plus'/>
                        </p>
                    </div>

                    <div className='col-12'>
                        <p className='title-6 fw-bold text-danger s1-home-title-2'>BE MINDFUL</p>
                        <p className={(paragraphs[1].length > p2MaxL ? 'd-none ' : '') + 'p6 fw-bold'}>{paragraphs[1]}</p>
                        <p className={(paragraphs[1].length > p2MaxL ? '' : 'd-none ') + 'p6 fw-bold s1-text-overflow-border position-relative'}>{paragraphs[1].slice(0, p2MaxL) + (textStateTwo ? (paragraphs[1][p2MaxL] == '' ? '' : '-') : '...') }
                            <div className="collapse" id="imageTextParagraphTwo">{paragraphs[1].slice(p2MaxL)}</div>
                            <img onClick={() => setTextStateTwo(toggle)} 
                                 data-bs-toggle="collapse" 
                                 data-bs-target="#imageTextParagraphTwo" 
                                 aria-expanded="false" 
                                 aria-controls="imageTextParagraphTwo"
                                 className='s1-cta-plus' 
                                 src={textStateTwo ? iconMinus : iconPlus} 
                                 alt='icon-plus'/>
                        </p>
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

        {/* Image modal */}
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <img className="w-100 h-auto" src={modalImage} />
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Home;
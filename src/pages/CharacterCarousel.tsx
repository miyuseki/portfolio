import React from 'react';
import Slider from 'react-slick';
import CharacterCard from '../components/CharacterCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { image } from 'framer-motion/client';

const characters = [
  {
    image: 'images/umyutyan.png',
    nameJp: 'うみゅー',
    nameEn: 'umyu',
    application: 'Portfolio favicon',
    description: 'あなたのタブにちょこんとウミウシ',
    skills: ['癒し波動'],
    imageWidth: 300,
    imageHeight: 220,
  },
  {
    image: 'images/passan.png',
    nameJp: 'ぱっさん',
    nameEn: 'passan',
    application: 'Passit app',
    description: 'イケメンより愛着-顔面偏差値より情緒偏差値。',
    skills: ['継続愛着'],
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    image: 'images/AIEL.png',
    nameJp: '麻生情報工学研究室',
    nameEn: 'AIEL',
    application: 'Lab favicon',
    description: '情報をついばむ、テクノカラス',
    skills: ['鋭眼'],
    imageWidth: 200,
    imageHeight: 200,
  },
];

const CharacterCarousel: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-4 py-8 ml-[5vw]">
      <Slider ref={sliderRef} {...settings}>
        {characters.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
      </Slider>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 -left-4 ml-[-3vw] transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-primary-100 hover:bg-primary-50 transition-colors z-10"
        onClick={() => sliderRef.current?.slickPrev()}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-primary-500" />
      </button>
      <button
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-primary-100 hover:bg-primary-50 transition-colors z-10"
        onClick={() => sliderRef.current?.slickNext()}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-primary-500" />
      </button>
    </div>
  );
};

export default CharacterCarousel;
import React from 'react';
import Slider from 'react-slick';
import CharacterCard from './CharacterCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const characters = [
  {
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nameJp: '田中 優希',
    nameEn: 'Yuki Tanaka',
    application: 'Portfolio Website',
    description: '創造的で細部にこだわりを持つフロントエンド開発者。美しいUIとスムーズなUXの実現に情熱を注ぐ。',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nameJp: '佐藤 美咲',
    nameEn: 'Misaki Sato',
    application: 'E-commerce Platform',
    description: 'バックエンド開発のスペシャリスト。セキュアで効率的なシステム構築を得意とする。',
    skills: ['Node.js', 'Python', 'AWS', 'Database Design'],
  },
  {
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    nameJp: '鈴木 健一',
    nameEn: 'Kenichi Suzuki',
    application: 'Mobile App',
    description: 'モバイルアプリケーション開発のエキスパート。ユーザー体験を重視した設計が特徴。',
    skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UI Design'],
  },
];

const CharacterCarousel: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
    <div className="relative px-4 py-8">
      <Slider ref={sliderRef} {...settings}>
        {characters.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
      </Slider>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-primary-100 hover:bg-primary-50 transition-colors z-10"
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
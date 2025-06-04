import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import AnimatedSection from '../components/AnimatedSection';
import { Award, Mic, BookOpen, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Achievements & Recognition"
          subtitle="A timeline of my professional accomplishments and milestones"
        />

        <AnimatedSection className="max-w-4xl mx-auto mt-16">
          <div className="relative timeline overflow-x-auto pb-8 pt-8" style={{ minHeight: '500px' }}>
            {/* 横軸 */}
            <div className="absolute top-1/2 left-0 w-[2000px] h-1 bg-primary-200 z-0" style={{ transform: 'translateY(-50%)' }}></div>
            <div className="inline-flex min-w-max relative z-10">
              {[
                { date: "06 2024-12 2024", title: "九州アプリチャレンジ・キャラバン 2024コンテスト", description: "健闘賞", position: "top", icon: <BookOpen className="w-3 h-3 text-white" /> },
                { date: "08 2024-12 2024", title: "Engineer Drive Day 2024", description: "ライブリンクス賞", position: "bottom", icon: <Zap className="w-3 h-3 text-white" /> },
                { date: "10 2024", title: "FUKUOKA学生ビジコン2024", description: "ブロックチェーン特別賞", position: "top", icon: <Award className="w-3 h-3 text-white" /> },
                { date: "10 2024-12 2024", title: "MBSD Cybersesecurity 2024", description: "最優秀賞", position: "bottom", icon: <Mic className="w-3 h-3 text-white" /> },
                { date: "11 2024", title: "ブロックチェーンフォーラム 登壇", description: "", position: "top", icon: <Mic className="w-3 h-3 text-white" /> },
                { date: "12 2024", title: "技育博", description: "サイバーエージェント賞", position: "bottom", icon: <Mic className="w-3 h-3 text-white" /> },

              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center mx-8" style={{ minWidth: '280px' }}>
                  {/* ノード */}
                  <div className="absolute left-1/2 top-[33.5vh] w-6 h-6 bg-primary-400 rounded-full border-4 border-white z-20" style={{ transform: 'translate(-50%, -50%)' }}>
                    <div className="flex items-center justify-center w-full h-full">{item.icon}</div>
                  </div>
                  {/* カード */}
                  <div className={`absolute ${item.position === 'top' ? 'bottom-full mb-[-24vh]' : 'top-full mt-[250px]'} left-1/2 transform -translate-x-1/2 z-30`}
                    style={{ width: '280px' }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-soft border border-primary-100 ribbon max-w-xs mx-auto">
                      <span className="text-xs font-medium text-primary-500 block mb-1">{item.date}</span>
                      <h4 className="text-base font-playfair font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto mt-16" delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft border border-primary-100">
              <h3 className="text-xl font-playfair font-semibold text-primary-700 mb-4 flex items-center">
                <Award className="w-5 h-5 text-primary-500 mr-2" />
                Awards & Recognition
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">九州アプリチャレンジ・キャラバン 2024  : 健闘賞</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">Engineer Drive Day 2024 : ライブリンクス賞</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">FUKUOKA学生ビジコン2024（ブロックチェーン部門） : ブロックチェーン特別賞</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">MBSD Cybersesecurity 2024 : 最優秀賞</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">技育博 : サイバーエージェント賞</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft border border-primary-100">
              <h3 className="text-xl font-playfair font-semibold text-primary-700 mb-4 flex items-center">
                <Mic className="w-5 h-5 text-primary-500 mr-2" />
                Speaking Engagements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-2 mr-2"></span>
                  <span className="text-gray-700">ブロックチェーンフォーラム 登壇</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Achievements;
import React from 'react';
import type { FC, ReactNode } from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { GraduationCap, Briefcase } from 'lucide-react';

const About: FC = (): ReactNode => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="About Me"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative w-2/3 mx-auto">
                <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary-300 rounded-lg opacity-30"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-medium ribbon">
                  <img
                    src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Profile"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary-300 rounded-lg opacity-30"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={300}>
              <div className="prose prose-lg">
                <h3 className="text-2xl font-playfair font-semibold text-primary-700 mb-4">
                  関 美優
                </h3>
                <div className="mt-8">
                  <h4 className="text-xl font-playfair font-semibold mb-4" style={{ color: '#ff99ac' }}>Education</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <GraduationCap className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="ml-4">
                        <h5 className="text-base font-medium text-gray-800">麻生情報ビジネス専門学校</h5>
                        <p className="text-sm text-gray-600">情報工学科 (2024-2027 予定)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-playfair font-semibold mb-4" style={{ color: '#ff99ac' }}>Biography</h4>
                <p className="text-gray-700 mb-6 font-mincho">
                  福岡在住の学生です。チーム開発では主に企画、設計、UI/UXデザインを担当しており、フロントエンドとバックエンドの双方にも取り組んできました。最近はAdobeツールにも挑戦中です。                </p>
                <p className="text-gray-700 mb-6 font-mincho">
                  和やかな雰囲気の中でモチベーションを引き出し、挑戦しやすい環境を整えることで、長期的な価値を生み出し、プロジェクト全体を成功に導くことを目指しています。
                </p>


              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/ui/Button';
import { Mail, MapPin, Send, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://forms.gle/XvHZmmRnki5bK3m77', '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a question or want to work together? Feel free to contact me!"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white p-8 rounded-lg shadow-soft border border-primary-100">
                <h3 className="text-2xl font-playfair font-semibold text-primary-700 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full mr-4">
                      <Mail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                      <p className="text-gray-800">2301432@s.asojuku.ac.jp</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                      <p className="text-gray-800">Fukuoka, Japan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-primary-700 mb-4">
                    Connect with Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/miyuseki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-soft border border-primary-100 text-gray-600 hover:text-primary-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://protopedia.net/prototyper/trz_hi82"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-soft border border-primary-100 text-gray-600 hover:text-primary-500 transition-colors flex items-center justify-center"
                      aria-label="Protopedia"
                    >
                      <span className="sr-only">Protopedia</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#ff8daa" />
                        <text x="6" y="15" fontSize="12" fontWeight="bold" fill="white">P</text>
                      </svg>
                    </a>
                    <a
                      href="https://aiel.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-soft border border-primary-100 text-gray-600 hover:text-primary-500 transition-colors flex items-center justify-center"
                      aria-label="AIEL Lab"
                    >
                      <span className="sr-only">AIEL Lab</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#d8b4f8" />
                        <text x="6" y="15" fontSize="12" fontWeight="bold" fill="white">L</text>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-white p-8 rounded-lg shadow-soft border border-primary-100 h-full flex flex-col justify-center">
                <div className="flex flex-col items-center mb-8">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4">
                    <rect x="8" y="16" width="48" height="32" rx="8" fill="#FFB6C1" />
                    <rect x="16" y="24" width="32" height="16" rx="4" fill="white" />
                    <circle cx="32" cy="32" r="4" fill="#FFB6C1" />
                  </svg>
                  <p className="text-gray-600 text-center text-sm max-w-xs">
                    お問い合わせはGoogleフォームから受け付けています。ご質問やご相談など、お気軽にご連絡ください。
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Googleフォームでお問い合わせ
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
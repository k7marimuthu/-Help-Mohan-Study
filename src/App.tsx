import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import DonateSection from './components/DonateSection';
import ProgressBar from './components/ProgressBar';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { GraduationCap } from 'lucide-react';
import qrCodeImg from './assets/qr-code.png';


function App() {
  // QR code URL from the user's image
  const qrCodeUrl = qrCodeImg;
  const upiId = "mohan.kuberan09@oksbi";

  useEffect(() => {
    // Update the document title
    document.title = "Help Mohan Study Finance Abroad | Student Fundraiser";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Story />
      <ProgressBar target={500000} raised={125000} currency="₹" />
      <DonateSection qrCodeUrl={qrCodeUrl} upiId={upiId} />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
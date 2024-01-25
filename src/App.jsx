import Footer from './Sections/Footer';
import HeroSection from './Sections/HeroSection';
import HowItWorksSection from './Sections/HowItWorksSection';
import Navbar from './Sections/Navbar';
import OurService from './Sections/OurService';
import ProductCard from './Sections/ProductCard';
import QuestionAnswer from './Sections/QuestionAnswer';
import './index.css';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
      <div className="m-16">
        <OurService />
      </div>

      <div className="m-16 ">
        <ProductCard />
        <HowItWorksSection />
      </div>
      <QuestionAnswer />
      <Footer/>
    </>
  );
}

export default App;


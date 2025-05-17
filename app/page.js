import Hero from './components/Hero';
import Program from './components/Program';
import Steps from './components/Steps'; 
import Feature from './components/Features';
import Subjects from './components/Subjects';
import PopularExams from './components/PopularExams';
import ActionBanner from './components/ActionBanner';
import RecentBlogs from './components/RecentBlogs';
import JoinBanner from './components/JoinBanner';
import PricingPlans from './components/PricingPlans';
import StudentTestimonials from './components/StudentTestimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main>
      <section id='hero' className="mb-20">
        <Hero />
      </section>
      <section id='program' className="mb-20">
        <Program />
      </section>
      <section id='steps' className="mb-20">
        <Steps />
      </section>
      <section id='feature' className="mb-0">
        <Feature />
      </section>
      <section id='subjects' className="mb-20">
        <Subjects />
      </section>
      <section id='popularexam' className="mb-0">
        <PopularExams />
      </section>
      <section id='actionbanner' className="mb-0">
        <ActionBanner />
      </section>
      <section id='recentblogs' className="mb-0">
        <RecentBlogs />
      </section>
      <section id='joinbanner' className="mb-20">
        <JoinBanner />
      </section>
      <section id='pricingplan' className="mb-0">
        <PricingPlans />
      </section>
      <section id='studenttestimonials' className="mb-0">
        <StudentTestimonials />
      </section>
      <section id='faq' className="mb-0">
        <FAQ />
      </section>
      <section id='footer' className="mb-0">
        <Footer />
      </section>
    </main>
  );
}

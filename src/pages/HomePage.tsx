import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Quality from '../components/Quality';
import WhyChooseUs from '../components/WhyChooseUs';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Quality />
      <WhyChooseUs />
    </div>
  );
}

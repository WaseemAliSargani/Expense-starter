import React from 'react';
// import data
import { testimonials } from "../data"
// import components
import ClientSlider from "../components/ClientSlider"

const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials;
  return <section className=' section'>
    <div className="container mx-auto">
      {/* title */}
      <h2 className='title mb-10 lg:mb-20  text-center max-w-[920px] mx-auto'
      data-aos="fade-up" data-aos-delay="100" 
      > {title} </h2>
      {/* Slider */}
      <div data-aos="fade-up" data-aos-delay="300">
        <ClientSlider clients={clients} />
      </div>
    </div>
  </section>;
};

export default Testimonials;

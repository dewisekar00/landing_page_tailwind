import React from 'react';
import CardTestimonial from '../components/CardTestimonial';

const Testimonial = () => {
  return (
    <div className="my-24 mx-32">
      <h2 className="text-4xl font-semibold my-8">Our Client say</h2>
      <div className=" flex gap-16 ">
        <CardTestimonial
          text="Their team was instrumental in helping me find my dream home. Their deep understanding of the market and keen attention to my preferences made the entire buying process smooth and efficient. They provided valuable insights, supported me throughout property tours, and were proactive in addressing any concerns. "
          imgUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          clientName="serra john"
          addition="ceo"
        />
        <CardTestimonial
          text="Their team's dedication to understanding my needs and preferences was remarkable. They guided me through the intricate process of finding my ideal home with patience and expertise. From suggesting properties that perfectly aligned with my requirements to providing invaluable insights "
          imgUrl="https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          clientName="emma smith"
          addition="chef"
        />
      </div>
      <div className="flex gap-2 justify-center my-4">
        <button>
          <span class="material-symbols-outlined border-2 rounded-3xl p-1">west</span>
        </button>
        <button>
          <span class="material-symbols-outlined bg-violet-300 p-1 rounded-3xl">east</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

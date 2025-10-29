import React, { forwardRef } from 'react';

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wider uppercase text-white">We Are Crystal Frame Studios</h2>
            <p className="text-brand-muted leading-relaxed">
              Welcome to our creative partnership. We founded this studio on a shared vision: to capture fleeting moments and transform them into timeless works of art. As a duo, we offer a unique perspective, capturing your story from multiple angles to create something truly beautiful togethis.
            </p>
        </div>

        <div className="space-y-20">
            {/* First Owner */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="md:w-1/2 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop"
                    alt="Co-founder of Crystal Frame Studios"
                    className="w-full h-full object-cover"
                  />
              </div>
              <div className="md:w-1/2 text-white">
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">A Word About Guru</h3>
                <p className="text-brand-muted mb-6 leading-relaxed">
                  "Guru is the soul of our studio. His eye for composition is unmatched, and he has this incredible ability to make anyone feel comfortable in front of the camera. He finds the magic in the everyday and turns it into something truly extraordinary. Working alongside his is a constant inspiration."
                </p>
                 <p className="font-medium text-brand-light tracking-wider">- Varun Chakravarthy</p>
              </div>
            </div>
            
            {/* Second Owner */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="md:w-1/2 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop"
                    alt="Co-founder of Crystal Frame Studios"
                    className="w-full h-full object-cover"
                  />
              </div>
              <div className="md:w-1/2 text-white">
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">A Word About Varun</h3>
                 <p className="text-brand-muted mb-6 leading-relaxed">
                  "Varun is the technical genius and the steady hand that guides our vision. His mastery of light is simply brilliant, and he can craft a scene with such precision. He brings a calm, focused energy to every shoot, ensuring that we capture every detail flawlessly. He's the rock of Crystal Frame Studios."
                </p>
                <p className="font-medium text-brand-light tracking-wider">- Guru Charan</p>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
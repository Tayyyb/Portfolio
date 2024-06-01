import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600">We create stunning and responsive websites tailored to your needs.</p>
          </div>
          {/* Service 2 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">We build custom web applications using the latest technologies.</p>
          </div>
          {/* Service 3 */}
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p className="text-gray-600">We optimize your website for search engines to improve visibility and ranking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

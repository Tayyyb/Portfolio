import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1...',
      imageUrl: '/path/to/project1.jpg',
      demoUrl: 'https://demo.project1.com',
      githubUrl: 'https://github.com/yourusername/project1',
      tags: ['React', 'Tailwind CSS', 'Firebase'],
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2...',
      imageUrl: '/path/to/project2.jpg',
      demoUrl: 'https://demo.project2.com',
      githubUrl: 'https://github.com/yourusername/project2',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 text-sm text-gray-700 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

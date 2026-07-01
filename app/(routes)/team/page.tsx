export default function Team() {
  const teamMembers = [
    {
      name: 'Issak Ahmed',
      role: 'Founder & CEO',
      experience: '20 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialty: 'Project Management & Strategy',
    },
    {
      name: 'Hassan Muhammad',
      role: 'Chief Architect',
      experience: '18 years',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      specialty: 'Design & Architecture',
    },
    {
      name: 'Ahmed Khan',
      role: 'Lead Construction Manager',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      specialty: 'Construction Management',
    },
    {
      name: 'Karim Hassan',
      role: 'Interior Designer',
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      specialty: 'Interior Design & Styling',
    },
    {
      name: 'Ibrahim Hussain',
      role: 'Materials Manager',
      experience: '14 years',
      image: 'https://images.unsplash.com/photo-1519085360771-9852909b5fe5?w=400&q=80',
      specialty: 'Materials Supply & Quality',
    },
    {
      name: 'Omar Saleh',
      role: 'Client Relations Manager',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1507371341519-245fc9df6bac?w=400&q=80',
      specialty: 'Client Support & Communication',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-zinc-900 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Team</h1>
          <p className="text-2xl text-gray-300">
            Skilled professionals dedicated to bringing your vision to life
          </p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Professionals
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              With over 150+ dedicated team members and combined experience of 150+ years in the construction industry, we bring expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-black from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-orange-500 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {member.specialty}
                </p>
                <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    <strong>{member.experience}</strong> of experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Why Trust Our Team?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              
              {
                icon: '📚',
                title: 'Continuous Learning',
                desc: 'Regular training and certification to stay updated with latest techniques.',
              },
              {
                icon: '🤝',
                title: 'Client First',
                desc: 'Dedicated to understanding and exceeding client expectations.',
              },
              {
                icon: '⚡',
                title: 'Efficient Execution',
                desc: 'Streamlined processes ensure timely project completion.',
              },
              {
                icon: '🔒',
                title: 'Quality Assurance',
                desc: 'Rigorous quality checks at every stage of the project.',
              },
              {
                icon: '💡',
                title: 'Innovation Focused',
                desc: 'Always exploring new methods and technologies for better results.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-black dark:bg-black border border-neutral-600 p-8 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. If you're passionate about construction and excellence, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </>
  );
}

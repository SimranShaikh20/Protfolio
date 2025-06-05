import React from 'react';

const Achievements = () => {
  const achievements = [
     "Bhashathon(IIT Bombay) Hackathon 2nd Winner",
    "Academic Excellence Award at GTU for 2020-2023",
    "Completed Google GenAI Skill Boost Program",
    "Top 5% contributor at GirlScript Summer of Code",
   
  ];

  return (
    <section id="achievements" className="py-10 px-4 sm:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Achievements</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-6 bg-gray-50 hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-700 text-base font-medium">🎯 {item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

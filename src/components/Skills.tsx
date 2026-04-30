import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 50, icon: '⚛️' },
    { name: 'JavaScript', level: 60, icon: '📘' },
    { name: 'Node.js', level: 40, icon: '🟢' },
    { name: 'Express', level: 39, icon: '🐍' },
    { name: 'Tailwind CSS', level: 60, icon: '🎨' },
    { name: 'Next.js', level: 78, icon: '▲' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'GraphQL', level: 45, icon: '📊' },
  ];

  const categories = {
    frontend: ['Python', 'JavaScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Express', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS', 'Figma'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Core Competencies
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Technology Stack
            </h3>
            <div className="space-y-6">
              {Object.entries(categories).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

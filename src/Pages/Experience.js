import React from "react";

function Experience() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <div className="w-full bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Professional Experience
        </h1>

        {/* Position Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Front-End Engineer at SeeTek</h2>
          <p className="mt-2">
            At SeeTek—a company specializing in innovative mobile banking
            solutions—I worked as a Front-End Engineer. In this role, I focused
            on creating seamless and engaging user interfaces with React, while
            integrating Firebase for secure authentication and robust backend
            functionality.
          </p>
        </div>

        {/* Responsibilities & Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Key Responsibilities & Achievements
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              Designed and implemented responsive web applications using React,
              ensuring a fluid user experience across devices.
            </li>
            <li>
              Integrated Firebase to handle authentication and backend services,
              reinforcing security and reliability.
            </li>
            <li>
              Collaborated with designers, backend developers, and product
              managers to create user-centered solutions that met both technical
              and business needs.
            </li>
            <li>
              Actively participated in agile ceremonies—daily stand-ups, sprint
              planning, and retrospectives—to foster clear communication and
              continuous improvement.
            </li>
            <li>
              Applied best practices in coding and optimization to enhance
              application performance and maintainability.
            </li>
          </ul>
        </div>

        {/* Teamwork & Collaboration */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Teamwork and Collaborative Culture
          </h2>
          <p className="mt-2">
            My time at SeeTek was enriched by a strong collaborative culture. I
            actively contributed ideas during brainstorming sessions and worked
            closely with my teammates to overcome challenges. This environment
            not only honed my technical skills but also reinforced the
            importance of teamwork, communication, and mutual support in
            achieving common goals.
          </p>
        </div>

        {/* Employer Perspectives */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">What Employers Appreciate</h2>
          <p className="mt-2">
            In my experience, a successful project hinges on a balance of
            technical expertise and interpersonal skills. Employers value
            adaptability, creative problem solving, and a proactive attitude. I
            consistently demonstrated these qualities by continuously learning
            new technologies and maintaining a commitment to delivering
            high-quality, user-friendly solutions.
          </p>
        </div>

        {/* Personal Reflection */}
        <div>
          <h2 className="text-2xl font-bold">Reflection on My Journey</h2>
          <p className="mt-2">
            Working at SeeTek was a transformative experience. It taught me the
            importance of merging innovative design with practical
            functionality. I learned how to navigate complex technical
            challenges while fostering a collaborative and supportive work
            environment. This journey not only enhanced my professional skill
            set but also deepened my appreciation for user-centered design and
            continuous learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

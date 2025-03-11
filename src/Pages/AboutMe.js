import React from "react";

function AboutMe() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <div className="w-full bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
            <img
              src="https://via.placeholder.com/160"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg">
            Hi, I'm Kevaun Harris, a passionate software engineer with extensive
            experience in full-stack development. I enjoy creating scalable
            applications and intuitive user interfaces while continuously
            learning new technologies.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="mb-4">
            Ever since I was a child, I’ve been fascinated by the world of
            computers and technology. My curiosity led me to pursue a degree in
            Computer Science, where I learned not just coding, but also the art
            of problem-solving and critical thinking.
          </p>
          <p>
            I spent countless hours tinkering with old hardware and software,
            which eventually evolved into a career driven by innovation and
            creativity.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <p className="mb-4">
            Throughout my career, I've had the opportunity to work with both
            startups and large organizations. From building responsive web
            applications to developing robust backend systems, I thrive in
            dynamic environments.
          </p>
          <p>
            My journey in the tech industry has been filled with challenging
            projects that pushed me to learn and adapt constantly. This
            relentless pursuit of excellence has defined my professional path.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Full-stack Development</li>
              <li>React & Redux</li>
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>Cloud Computing (AWS, Azure)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Interests</h2>
            <ul className="list-disc list-inside">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Open Source Projects</li>
              <li>UI/UX Design</li>
              <li>Travel & Photography</li>
              <li>Gaming & eSports</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod lacus in mi consequat, sed fermentum sem molestie. In hac
            habitasse platea dictumst. Curabitur non orci sed ligula bibendum
            dapibus sit amet non lacus.
          </p>
          <p className="mb-4">
            Suspendisse potenti. Donec vitae orci nec nulla bibendum pharetra.
            Cras euismod lectus ut lectus congue, vel ullamcorper sapien
            malesuada. Etiam tristique diam vel leo aliquet, non tristique dui
            elementum.
          </p>
          <p>
            Vivamus nec ligula nec nisi facilisis vestibulum. Proin et ligula id
            tortor convallis vehicula. Fusce quis sem ac magna cursus malesuada
            at in mauris.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

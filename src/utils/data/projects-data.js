export const projectsData = [
  {
    id: "bugtracker",
    title: "BugTracker",
    description:
      "A comprehensive project management and bug tracking system inspired by industry-leading tools like Jira and Azure Boards. This enterprise-grade solution streamlines project workflows and bug management through an intuitive, real-time interface.",
    content: `<b>Overview</b>
<p>The <b>BugTracker</b> is a comprehensive, role-based application designed to streamline project management, bug tracking, and team collaboration. Born out of the inefficiencies of using Excel sheets for managing project requirements, feedback, and bug tickets in my previous role, this application leverages modern tools and technologies to provide a seamless, real-time experience for teams.</p>

<p>Inspired by platforms like Jira, Azure Boards, and GitLab, the BugTracker Project offers a centralized hub for creating, editing, and managing projects, bugs, and tasks, while ensuring transparency and accountability across the organization.</p>

<b class="text-2xl">🚀 Project & Bug Management</b>  
<p>Admin users can create, edit, and delete projects, assigning each to a <b>Project Manager</b>. Bugs and tickets are linked to specific projects and assigned to developers.</p>

<b class="text-2xl">📊 Status Tracking & Automation</b>  
<p>Users update the status of their assigned tasks, and when all associated bugs/tickets are resolved, the project status is automatically updated.</p>

<b class="text-2xl">🔔 Real-time Notifications</b>  
<p>Using <b>SignalR</b>, the system delivers instant notifications when new events (bugs, comments, assignments) occur. Assigned users also receive email notifications via <b>SendGrid</b> with direct links to relevant tasks.</p>

<b class="text-2xl">📈 Interactive Dashboard & Drill-Downs</b>  
<p>A company-wide dashboard provides insights into project progress, bug resolution trends, and workload distribution. Every metric has drill-down capabilities for deeper analysis.</p>

<b class="text-2xl">🔐 Role-based Access Control</b>  
<p>Different user roles (Admin, Project Manager, Developer) determine permissions for creating, assigning, and managing projects and bugs. Admins can also invite new users to the system.</p>

<b class="text-2xl">💬 Collaboration Tools</b>  
<p>Users can comment on projects and bugs, attach relevant documents, and track discussions within the platform.</p>

<p><b>BugTracker</b> enhances efficiency by replacing outdated spreadsheet-based workflows with a dynamic, automated, and real-time issue-tracking system—bridging the gap between development teams and project management.</p>
`,
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Styled Components",
      ".NET (C#)",
      "SignalR",
      "MS SQL Server",
      "SendGrid",
    ],
    images: [
      "/projects/bug1.png",
      "/projects/bug2.png",
      "/projects/bug3.png",
      "/projects/bug4.png",
      "/projects/bug5.png",
      "/projects/bug6.png",
      "/projects/bug7.png",
      "/projects/bug8.png",
    ],
    githubLink: "https://github.com/moryno/Bug-Tracker",
    demoLink: "",
  },
  {
    id: "techsphere",
    title: "TechSphere",
    description:
      "A modern tech blogging platform built with Next.js 15 and React 19, featuring Clerk authentication and Express 5 backend, designed for tech professionals to share and discover content.",
    content: `<b>Overview</b><p><b>TechSphere</b> is a dynamic blog platform designed for developers, designers, project managers, engineers, and tech enthusiasts to discover, create, and collaborate on the latest trends in technology. From coding tips and gadget reviews to in-depth tutorials and industry insights, TechSphere serves as a hub for sharing knowledge, exploring categories, and connecting with a community of like-minded individuals shaping the future of innovation.</p><p>I created TechSphere to dive deep into the latest advancements in web development, specifically <b>Next.js 15</b> and <b>React 19</b>. The project allowed me to explore modern tools like <b>Clerk</b> for authentication and user management, including role-based access control (e.g., assigning admin roles to feature posts). Additionally, I wanted to gain hands-on experience with <b>Express 5</b> and experiment with alternatives to traditional <code>try-catch</code> error handling in the backend. TechSphere is not just a blog—it's a learning journey and a platform to empower the tech community.</p><b>Key Features</b><ul><li><b>User Authentication & Role Management</b>: Seamless authentication and user management powered by <b>Clerk</b>. Admins can mark posts as favorites to feature them on the platform.</li><li><b>Post Creation & Collaboration</b>: Users can create, edit, and share posts on a wide range of topics, from coding tips to gadget reviews. Collaborate with others by commenting and engaging with posts.</li><li><b>Category Exploration</b>: Explore posts by categories such as Web Development, AI, Gadgets, Design, and more. Easily discover content that aligns with your interests.</li><li><b>Featured Posts</b>: Admins can highlight exceptional posts by marking them as favorites, ensuring high-quality content gets the visibility it deserves.</li><li><b>Community Engagement</b>: Join a vibrant community of tech enthusiasts, share insights, and stay updated on the latest trends and innovations.</li><li><b>Modern Technology Stack</b>: <ul><li><b>Frontend</b>: Built with <b>Next.js 15</b> and <b>React 19</b> for a fast, responsive, and SEO-friendly user experience.</li><li><b>Backend</b>: Powered by <b>Express 5</b> for robust API development and efficient server-side logic.</li><li><b>Authentication</b>: Integrated <b>Clerk</b> for secure and scalable user authentication and role management.</li><li><b>Database</b>: Utilized a modern database solution (e.g., MongoDB or PostgreSQL) for storing posts, user data, and interactions.</li></ul></li></ul><b>Why This Project Stands Out</b><p>TechSphere is more than just a blog—it's a community-driven platform that fosters collaboration and knowledge sharing in the tech space. By leveraging cutting-edge technologies like Next.js 15, React 19, and Clerk, the platform delivers a seamless and modern user experience. The ability to feature posts and assign roles adds a layer of curation and quality control, ensuring that the best content rises to the top.</p>`,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk Authentication",
      "Node.js",
      "Express.js",
      "RESTful API",
      "Responsive Design",
    ],
    images: [
      "/projects/blog1.png",
      "/projects/blog2.png",
      "/projects/blog3.png",
      "/projects/blog4.png",
      "/projects/blog5.png",
      "/projects/blog6.png",
      "/projects/blog7.png",
    ],
    githubLink: "https://github.com/moryno/Blog-APP",
    demoLink: "",
  },
  {
    id: "edumatrix",
    title: "EduMatrix",
    description:
      "A comprehensive school management portal built with Next.js 14 and TypeScript, featuring role-specific dashboards and advanced data visualization for administrators, teachers, students, and parents.",
    content: `<div class='space-y-6'><p class='text-lg leading-relaxed'>EduMatrix is a comprehensive school management portal that provides personalized dashboards and functionalities for administrators, teachers, students, and parents. Built with Next.js 14 and TypeScript, this modern interface offers role-specific features to streamline educational management and enhance communication between all stakeholders.</p><b>Project Overview</b><p class='text-lg leading-relaxed'>This frontend-focused project demonstrates advanced UI/UX design principles while implementing role-based access control and data visualization. Using Recharts, the platform delivers intuitive visual representations of various metrics, enabling better decision-making and progress tracking.</p><p class='text-2xl  mt-8 mb-4'>Role-Specific Features</p><div class='space-y-6'><div><p class='text-xl font-semibold mb-3'>Administrator Dashboard</p><ul class='list-disc pl-6 space-y-2'><li>Comprehensive overview of school statistics (staff, parents, students, teachers)</li><li>Financial tracking with interactive charts and graphs</li><li>Attendance monitoring across all classes</li><li>Event scheduling and management</li><li>Complete database access for all stakeholders</li></ul></div><div class='mt-6'><p class='text-xl font-semibold mb-3'>Teacher Portal</p><ul class='list-disc pl-6 space-y-2'><li>Personalized dashboard showing class-specific metrics</li><li>Individual class attendance tracking</li><li>Calendar management for lessons and events</li><li>Performance analytics and reporting tools</li><li>Student progress monitoring</li></ul></div><div class='mt-6'><p class='text-xl font-semibold mb-3'>Student Dashboard</p><ul class='list-disc pl-6 space-y-2'><li>Personal attendance statistics</li><li>Class schedule and lesson overview</li><li>Performance metrics and grades</li><li>Event participation tracking</li><li>Calendar integration for academic activities</li></ul></div><div class='mt-6'><p class='text-xl font-semibold mb-3'>Parent Portal</p><ul class='list-disc pl-6 space-y-2'><li>Child-specific academic performance tracking</li><li>Class schedule monitoring</li><li>Grade review system</li><li>Event and schedule notifications</li><li>Direct access to relevant academic information</li></ul></div></div><p class='text-lg leading-relaxed mt-6'>The project showcases modern frontend development practices while delivering a practical solution for educational institutions. The interface design prioritizes user experience and accessibility, ensuring that each stakeholder can efficiently access and manage their relevant information.</p></div>`,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Recharts",
    ],
    images: [
      "/projects/school1.png",
      "/projects/school2.png",
      "/projects/school3.png",
      "/projects/school4.png",
      "/projects/school5.png",
      "/projects/school6.png",
      "/projects/school7.png",
    ],
    githubLink: "https://github.com/moryno/next-school-management-dashboard-UI",
    demoLink: "",
  },
  {
    id: "wandervista",
    title: "WanderVista",
    description:
      "WanderVista is a beautifully designed landing page that showcases stunning travel destinations from around the world.",
    content: `<div class='space-y-6'><p class='text-lg leading-relaxed'>WanderVista is an immersive travel destination landing page that showcases beautiful locations around the world through smooth animations and responsive design. Built with Next.js and styled with Tailwind CSS, this personal project transforms wanderlust into an interactive visual experience.</p><b>Project Overview</b><p class='text-lg leading-relaxed'>Created as a creative exploration of modern web design techniques, WanderVista features seamless transitions between dream destinations. The project demonstrates the power of combining Next.js's performance capabilities with Tailwind CSS's utility-first approach to create engaging user experiences.</p><b>Key Features</b><ul class='list-disc pl-6 space-y-2 text-lg'><li>Smooth animations during destination transitions</li><li>Responsive design that adapts to all screen sizes</li><li>Interactive elements that enhance user engagement</li><li>Optimized image loading for performance</li><li>Dynamic content presentation for each destination</li></ul><b>User Experience</b><p class='text-lg leading-relaxed'>The landing page offers a seamless journey through various destinations, with each transition designed to delight users. The responsive layout ensures a consistent experience across devices, while carefully crafted animations add a layer of sophistication to the interface.</p><p class='text-lg leading-relaxed mt-4'>This project serves as both a technical demonstration of modern web development capabilities and a creative outlet for showcasing dream travel destinations. The combination of smooth animations, responsive design, and engaging content creates an inspiring browsing experience for travel enthusiasts.</p></div>`,
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    images: [
      "/projects/travel1.png",
      "/projects/travel2.png",
      "/projects/travel3.png",
      "/projects/travel4.png",
      "/projects/travel5.png",
      "/projects/travel6.png",
    ],
    githubLink: "https://github.com/moryno/Destination-Vacation-Landing-Page",
    demoLink: "https://destination-vacation-landing-page.vercel.app/",
  },
  {
    id: "graphtivities",
    title: "Graphtivities",
    description:
      "A blog platform built with GraphQL, React, Node.js, and MongoDB, showcasing both basic and advanced GraphQL concepts through practical implementation and educational content.",
    content: `<div class='space-y-6'><p class='text-lg leading-relaxed'>Graphtivities is a blog platform built to document and share my learning journey with GraphQL. This project serves dual purposes: implementing GraphQL best practices in a full-stack application while creating comprehensive guides for both beginners and advanced developers looking to master GraphQL.</p><b>Project Overview</b><p class='text-lg leading-relaxed'>The platform demonstrates practical implementation of GraphQL concepts through a fully functional blog system, featuring authentication, CRUD operations, and advanced GraphQL concepts. The project itself serves as a living example of the concepts discussed in its blog posts.</p><b>Featured Blog Content</b><div class='space-y-6'><div><p class='text-xl font-semibold mb-3'>Beginner's Guide to GraphQL</p><ul class='list-disc pl-6 space-y-2'><li>Setting up GraphQL with React frontend</li><li>Implementing Node.js and Express backend</li><li>MongoDB integration and data modeling</li><li>Basic CRUD operations with GraphQL</li><li>Authentication implementation</li></ul></div><div class='mt-6'><p class='text-xl font-semibold mb-3'>Advanced GraphQL Concepts</p><ul class='list-disc pl-6 space-y-2'><li>Input validation techniques</li><li>Error handling strategies</li><li>Request optimization methods</li><li>Performance optimization</li><li>Best practices and patterns</li></ul></div></div><p class='text-2xl  mt-8 mb-4'><p class='text-lg leading-relaxed mt-6'>This project exemplifies the practical application of GraphQL in a real-world scenario while serving as an educational resource for developers at different skill levels.</p></div>`,
    technologies: [
      "GraphQL",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Authentication",
      "Error Handling",
      "Request Optimization",
    ],
    images: [
      "/projects/graph0.png",
      "/projects/graph5.png",
      "/projects/graph1.png",
      "/projects/graph2.png",
      "/projects/graph3.png",
      "/projects/graph4.png",
    ],
    githubLink: "https://github.com/moryno/GraphQL-Blog",
    demoLink: "",
  },
  {
    id: "first-weather-app",
    title: "WeatherScope",
    description:
      "My first independent project - a weather application built with JavaScript that marked the beginning of my true coding journey.",
    content: `<div class='space-y-6'><p class='text-lg leading-relaxed'>I know, you're probably thinking 'who is proud of a simple weather app?' But this project holds a special place in my development journey. It was my first completely independent creation, built without tutorials and marking my first experience with the full software development lifecycle.</p><b>Project Journey</b><p class='text-lg leading-relaxed'>This weather application represents a pivotal moment in my coding journey. It was here that JavaScript finally started making sense to me (as if JavaScript has ever made sense to anyone!). Built with vanilla JavaScript and DOM manipulation before I knew any frameworks like React, this project taught me the fundamentals of web development through blood, sweat, and plenty of console.log statements.</p><p class='text-2xl  mt-8 mb-4'></div></div><p class='text-lg leading-relaxed mt-6'>While it may seem like a modest weather application on the surface, this project represents my transformation from a code-along learner to an independent developer. The countless hours spent debugging, the excitement of making features work, and even the tears of frustration all contributed to a profound realization: this is what I want to do with my life.</p><p class='text-lg leading-relaxed mt-4'>What makes this project special isn't its complexity or scale, but rather the journey it represents. It's the project where I truly fell in love with coding, where each bug fixed felt like a personal victory, and where I learned that the best way to learn is to build something on your own, no matter how simple it might seem.</p></div>`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "OpenWeatherMap API",
      "Git",
    ],
    images: [
      "/projects/weather1.png",
      "/projects/weather2.png",
      "/projects/weather3.png",
    ],
    githubLink: "https://github.com/moryno/WeatherApp-Project",
    demoLink: "https://moryno.github.io/WeatherApp-Project/",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio 1.0",
    description:
      "My first portfolio website built in 2022, showcasing my initial exploration of Tailwind CSS and web development fundamentals.",
    content: `<div class='space-y-6'><p class='text-lg leading-relaxed'>My inaugural portfolio website marks the beginning of my web development journey and my first exploration of Tailwind CSS. Created in 2022, this project represents both my early technical achievements and my growing passion for web development.</p><p class='text-2xl  mt-8 mb-4'>Project Journey</p><p class='text-lg leading-relaxed'>As my first portfolio, this project holds special significance in my development career. It was conceived during my learning phase with Tailwind CSS, challenging me to apply new concepts while creating a professional showcase of my work. The end result exceeded my initial expectations and boosted my confidence in tackling more complex projects.</p><b>Key Features</b><ul class='list-disc pl-6 space-y-2 text-lg'><li>Responsive design implementation using Tailwind CSS</li><li>Clean and modern user interface</li><li>Project showcase section</li><li>Skills and technology display</li><li>Contact information and social links</li><li>Smooth scrolling and navigation</li></ul><p class='text-2xl  mt-8 mb-4'></div></div><p class='text-lg leading-relaxed mt-6'>This portfolio serves as a testament to my early development skills and marks a significant milestone in my journey. While it may be simple compared to my current work, it showcases my ability to learn and implement new technologies effectively.</p><p class='text-lg leading-relaxed mt-4'>The project taught me valuable lessons about web development, design principles, and the importance of creating user-friendly interfaces. It remains a proud reminder of where my journey began and how far I've come since then.</p></div>`,
    technologies: [
      "GraphQL",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    images: [
      "/projects/portolio-v1-1.png",
      "/projects/portolio-v1-2.png",
      "/projects/portolio-v1-3.png",
      "/projects/portolio-v1-4.png",
    ],
    githubLink: "https://github.com/moryno/My-Portfolio",
    demoLink: "http://portfolio-moryno.vercel.app/",
  },
];

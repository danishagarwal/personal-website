const base = import.meta.env.BASE_URL;

export const profile = {
  firstName: 'Danish',
  lastName: 'Agarwal',
  role: 'Frontend Engineer 2',
  headline: 'Software developer building clear, fast product UI.',
  lede: 'ConnectWise · React, JavaScript, Python, SQL · IT engineering, D.Y. Patil (CGPA 8.54).',
  bio: 'I am a software developer with experience in React, JavaScript, Python, and SQL. I studied IT engineering at D.Y. Patil University (CGPA 8.54) and currently work at ConnectWise as a Frontend Engineer 2. I like learning new tools and shipping in a fast-paced product environment.',
  photoSrc: `${base}pic.jpg`,
  photoAlt: 'Portrait of Danish Agarwal',
  resumeHref: `${base}${encodeURIComponent("Danish Agarwal's Resume.pdf")}`,
  linkedin: 'https://www.linkedin.com/in/danishagarwal/',
  github: 'https://github.com/danishagarwal',
  email: 'danishagarwal9@gmail.com'
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
];

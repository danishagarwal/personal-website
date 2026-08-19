const base = import.meta.env.BASE_URL;

export const profile = {
  firstName: 'Danish',
  lastName: 'Agarwal',
  role: 'Frontend Engineer 2',
  headline: 'I build product UI that feels fast.',
  headlineAccent: 'fast',
  lede: 'Frontend Engineer 2 at ConnectWise, with 5+ years building product UI. I care about the last 10% — the motion, the empty states, the thing you only notice when it’s missing.',
  bio: 'I’m a frontend engineer with 5+ years of experience, currently Frontend Engineer 2 at ConnectWise. My work is React in real product surfaces: dense data, lots of interaction, and users who notice when a screen hitch. I don’t stop at “it renders.” I care about what re-renders, how much JavaScript we ship, and how the UI feels under load. I stay close to new tools, but I use them when they make the product faster or clearer — not because they’re new.',
  photoSrc: `${base}pic.jpg`,
  photoAlt: 'Portrait of Danish Agarwal',
  resumeHref: `${base}${encodeURIComponent("Danish Agarwal's Resume.pdf")}`,
  linkedin: 'https://www.linkedin.com/in/danishagarwal/',
  github: 'https://github.com/danishagarwal',
  email: 'danishagarwal9@gmail.com'
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
];

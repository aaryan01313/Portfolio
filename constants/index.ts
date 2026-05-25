import { SiLeetcode } from "react-icons/si";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "C", image: "c.png", width: 80, height: 80 },
  { skill_name: "C++", image: "cpp.png", width: 80, height: 80 },
  { skill_name: "Python", image: "python.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
] as const;

export const SOCIALS = [
  { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/aryan-kumar-790ba9324/" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/aaryan01313" },
  { name: "LeetCode", icon: SiLeetcode, link: "https://leetcode.com/u/IZxjHeoORA/" },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
] as const;

export const PROGRAMMING_SKILL = [] as const;

export const BACKEND_SKILL = [
  { skill_name: "Flask", image: "flaskk.png", width: 150, height: 150 },
] as const;

export const DATA_SCIENCE_SKILL = [
  { skill_name: "NumPy", image: "numpy.png", width: 80, height: 80 },
  { skill_name: "Pandas", image: "pandas.png", width: 80, height: 80 },
  { skill_name: "Scikit-Learn", image: "scikitlearn.svg", width: 80, height: 80 },
  { skill_name: "Matplotlib", image: "matplotlib.png", width: 80, height: 80 },
  { skill_name: "Seaborn", image: "seaborn.png", width: 80, height: 80 },
  { skill_name: "Anaconda", image: "anaconda.png", width: 80, height: 80 },
  { skill_name: "Pickle", image: "pickle.png", width: 80, height: 80 },
  { skill_name: "Joblib", image: "joblib.png", width: 80, height: 80 },
] as const;

export const TOOLS_SKILL = [
  { skill_name: "Git", image: "git.png", width: 80, height: 80 },
  { skill_name: "GitHub", image: "github-new.png", width: 80, height: 80 },
  { skill_name: "VS Code", image: "vscode.png", width: 80, height: 80 },
  { skill_name: "Google Colab", image: "colab.png", width: 80, height: 80 },
  { skill_name: "Kaggle", image: "kaggle-new.png", width: 80, height: 80 },
] as const;

export const PROJECTS = [
  {
    title: "End-to-End Weather Prediction Model",
    description: 'Developed an ensemble machine learning model for accurate weather forecasting. Serialized the optimized model and successfully deployed it via a custom Flask API backend for real-time predictions.',
    image: "/projects/project-1.jpg",
    link: "https://aaryan01313.github.io/Weather-Prediction-Web-App/", 
  },
  {
    title: "Finalist - National CyberShield Hackathon '25",
    description: 'Conceptualized a robust Money Laundering detection system with my Team. Secured a spot in the Top 15 teams across India and presented the solution at the final round in MANIT Bhopal.',
    image: "/projects/project-2.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7371955846936768512/", 
  },
  {
    title: "Consistent Problem Solver",
    description: 'Maintained a rigorous 150-day+ coding streak on LeetCode, solving over 200+ algorithmic challenges. Continuously sharpening logic and data structures skills across multiple programming languages.',
    image: "/projects/project-3.jpg",
    link: "https://leetcode.com/u/IZxjHeoORA/", 
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/aryan-kumar-790ba9324/" },
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/aaryan01313" },
      { name: "LeetCode", icon: SiLeetcode, link: "https://leetcode.com/u/IZxjHeoORA/" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "aryanpandeyy13@gmail.com", icon: null, link: "mailto:aryanpandeyy13@gmail.com" },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/aaryan01313",
};
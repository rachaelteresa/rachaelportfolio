export function getExtraCurriculars() {
  return getPortfolioData().extraCurriculars;
}
export function getAwards() {
  return getPortfolioData().awards;
}
import { Portfolio } from '@/types/portfolio';
import portfolioData from '@/data/portfolio.json';

const isGithubPages = process.env.NODE_ENV === 'production' && typeof window !== 'undefined';
const basePath = isGithubPages ? '/PinkPortfolio' : '';

export function getPortfolioData(): Portfolio {
  const data = { ...portfolioData } as Portfolio;
  
  // Update resume path for GitHub Pages
  if (data.contact.resume) {
    data.contact.resume = `${basePath}${data.contact.resume}`;
  }
  
  return data;
}

export function getPersonalInfo() {
  return getPortfolioData().personal;
}

export function getSkills() {
  return getPortfolioData().skills;
}

export function getExperience() {
  return getPortfolioData().experience;
}

export function getProjects() {
  return getPortfolioData().projects;
}

export function getFeaturedProjects() {
  return getPortfolioData().projects.filter(project => project.featured);
}

export function getEducation() {
  return getPortfolioData().education;
}


export function getContactInfo() {
  return getPortfolioData().contact;
}
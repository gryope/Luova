o/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Menu, X, Instagram, LinkedIn, Share2, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";
import FeaturedCompanyPage from "./FeaturedCompanyPage";
import {
  FEATURED_COMPANIES,
  FeaturedCompany
} from "./data/featuredCompanies";

interface Job {
title: string;
company: string;
location: string;
type: string;
description?: string;
requirements?: string[];
role?: string[];
url?: string;
date?: string;
}



interface HiringCompany {
  name: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  mission: string;
  tags: string[];
  website: string;
}

const HIRING_COMPANIES: HiringCompany[] = [
    {
    name: "AIVEN",
    location: "Finland, FI",
    description: "Aiven is your AI-ready Open Source Data Platform.",
    fullDescription: "Aiven is an AI-ready open source data platform company helping organizations gain more value from data.",
    image: "/Luova/images/companies/Data1.jpg",
    mission: "To simplify cloud infrastructure for developers worldwide.",
    tags: ["Databases", "Software"],
    website: "aiven.io/"
  },

  {
    name: "POLESTAR",
    location: "GOTHENBURG, SE",
    description: "Electric performance car brand focused on minimalist design.",
    fullDescription: "Polestar develops electric performance vehicles through Scandinavian design and sustainable innovation.",
    image: "/Luova/images/companies/polestar.png",
    mission: "To accelerate the shift to sustainable mobility.",
    tags: ["Campaigns", "Motion"],
    website: "polestar.com"
  },
  
  {
  name: "SPACE 10",
  location: "COPENHAGEN, DK",
  description: "Research and design lab exploring sustainable living and circular design through technology and community-driven projects.",
  fullDescription: "SPACE10 was a research and design lab on a mission to create a better everyday life for people and the planet.",
  image: "/Luova/images/companies/Data2.jpg",
  mission: "To enable a more sustainable and equitable future through collaborative research.",
  tags: ["Product Design", "AI", "Technology"],
  website: "space10.com"
}
];

interface HeaderProps {
  onHome: () => void;
  onAbout: () => void;
  onFeatured: () => void;
  activePage: 'featured' | 'opportunities' | 'about';
}

function Header({ onHome, onAbout, onFeatured, activePage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (isActive: boolean, isMobile = false) => 
    isActive 
      ? `text-primary-fixed ${isMobile ? "text-4xl" : "border-b border-primary-fixed pb-1"} uppercase tracking-widest text-[11px] font-action-med`
      : `opacity-80 hover:opacity-100 transition-opacity uppercase tracking-widest text-[11px] ${isMobile ? "text-4xl" : ""}`;

  const handleNavClick = (fn: () => void) => {
    fn();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-page backdrop-blur-lg transition-all duration-300 h-24 md:h-32 ${
  scrolled
    ? "bg-background/80 border-b border-white/10"
    : "bg-background/0 border-b border-white/5"
}`}
      >
        <button 
          onClick={() => handleNavClick(onHome)}
          className="font-monumental-lg !text-[28px] !leading-none text-primary tracking-tighter hover:opacity-70 transition-opacity z-50"
        >
          LUOVA
        </button>
        
        <nav className="hidden lg:flex gap-8 font-interface-reg h-full items-center">
          <button onClick={onFeatured} className={navItemClass(activePage === 'featured')}>Featured</button>
          <button onClick={onHome} className={navItemClass(activePage === 'opportunities')}>Opportunities</button>
          <button onClick={onAbout} className={navItemClass(activePage === 'about')}>About</button>
        </nav>

        <div className="flex items-center gap-6">
          <button
  onClick={() => {
    window.location.href =
      "mailto:hello@luova.io?subject=Submit%20a%20Role&body=Company:%0AWebsite:%0ALocation:%0ARole:%0AApplication%20Link:%0A";
  }}
  className="hidden lg:block font-action-med text-primary-fixed border border-primary-fixed px-6 py-2 rounded-full hover:bg-primary-fixed hover:text-surface-dim transition-all duration-300 text-xs"
>
  SUBMIT A ROLE
</button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-fixed z-50"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/60 backdrop-blur-3xl z-[45] flex flex-col p-margin-page pt-48"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <nav className="flex flex-col gap-12 mt-12">
              <button 
                onClick={() => handleNavClick(onFeatured)} 
                className="flex items-baseline gap-4 text-left"
              >
                <span className="font-metadata-light text-xs opacity-30">01</span>
                <span className={navItemClass(activePage === 'featured', true)}>Featured</span>
              </button>
              <button 
                onClick={() => handleNavClick(onHome)} 
                className="flex items-baseline gap-4 text-left"
              >
                <span className="font-metadata-light text-xs opacity-30">02</span>
                <span className={navItemClass(activePage === 'opportunities', true)}>Opportunities</span>
              </button>
              <button 
                onClick={() => handleNavClick(onAbout)} 
                className="flex items-baseline gap-4 text-left"
              >
                <span className="font-metadata-light text-xs opacity-30">03</span>
                <span className={navItemClass(activePage === 'about', true)}>About</span>
              </button>
            </nav>

            <div className="mt-auto pb-12">
              <div className="flex justify-between items-center opacity-40 font-metadata-light text-[10px] uppercase tracking-[0.3em] border-t border-white/10 pt-8">
                <span>Helsinki, Finland</span>
                <span>Archive 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function JobRow({ job, onSelect }: { job: Job, onSelect: (job: Job) => void }) {
  return (
    <motion.div
      onClick={() => onSelect(job)}
className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-outline-variant/30 cursor-pointer transition-all duration-500 hover:my-2 hover:rounded-2xl"
initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2 max-w-3xl">
        <h2
  className="
  font-headline-md
  text-primary-fixed
  group-hover:text-primary
  transition-colors
  duration-300
  text-[52px]
  leading-[0.95]
  tracking-[-0.04em]
  "
>
  {job.title}
</h2>
        <div className="flex items-center gap-4 font-metadata-light text-on-surface-variant uppercase tracking-widest">
          <div className="flex items-center gap-2 normal-case">
            <span className="text-on-surface capitalize">{job.company}</span>

<span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>

<span className="capitalize">{job.location}</span>

<span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>

<span className="capitalize opacity-60">
  {job.date}
</span>
          </div>
          <span className="hidden md:inline-block px-3 py-1 rounded-full bg-secondary-container/30 text-[10px] font-bold">
            {job.type}
          </span>
        </div>
        <span className="md:hidden mt-2 self-start px-3 py-1 rounded-full bg-secondary-container/30 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {job.type}
        </span>
      </div>
      
<div className="mt-6 md:mt-0 flex items-center gap-4 self-start md:self-auto"> 
         <button
  className="
  px-6 py-2
  rounded-full
  bg-primary-fixed
  text-on-primary-fixed
  border border-transparent
  font-action-med
  text-[12px]
  transition-all
  duration-300

  hover:bg-transparent
  hover:border-primary-fixed
  hover:text-primary-fixed
  hover:shadow-[0_0_20px_rgba(251,219,222,0.15)]

  "
>
  APPLY
</button>
        <ArrowRight 
          className="hidden md:block transition-transform duration-300 group-hover:translate-x-2 text-primary-fixed" 
          size={24} 
        />
      </div>
    </motion.div>
  );
}

function CompanyCard({
  company,
  onSelect
}: {
  company: HiringCompany,
  onSelect: (company: HiringCompany) => void
}){
  return (
    <motion.div 
      onClick={() => onSelect(company)}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="aspect-[4/3.5] rounded-[16px] overflow-hidden mb-4 bg-surface-container relative">
        <img 
          src={company.image} 
          alt={company.name} 
className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
<h4 className="font-headline-md text-[28px] md:text-[48px] text-primary tracking-tight leading-[0.9]">        
  {company.name}
      </h4>
      
      <p className="font-interface-reg text-on-surface-variant mt-4 max-w-sm">
        {company.description}
      </p>
      
      <div className="mt-8 space-y-3">
        <div className="text-xs uppercase tracking-widest text-primary-fixed-dim border-t border-outline-variant/30 pt-4">
          <span className="opacity-60">{company.location}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {company.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded-full border border-outline-variant text-on-surface-variant uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-4 font-metadata-light text-primary-fixed uppercase tracking-widest text-[10px] flex items-center gap-2 group/btn">
          View openings <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function FeaturedPage({ onBack, onSelectCompany }: { onBack: () => void,   onSelectCompany: (company: FeaturedCompany) => void }) 
{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);

const COMPANIES_PER_PAGE = 4;

const totalPages = Math.ceil(
  FEATURED_COMPANIES.length / COMPANIES_PER_PAGE
);

const visibleCompanies = FEATURED_COMPANIES.slice(
  (currentPage - 1) * COMPANIES_PER_PAGE,
  currentPage * COMPANIES_PER_PAGE
);

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="px-margin-page pt-44 md:pt-64 pb-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant font-metadata-light uppercase tracking-widest hover:text-primary transition-colors mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO OPPORTUNITIES 
        </button>

        <div className="max-w-4xl mb-24">
          <motion.h1 
            className="font-monumental-lg text-primary-fixed mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FEATURED <br/>ORGANISATIONS
          </motion.h1>
          <p className="font-interface-reg text-on-surface-variant text-[16px] md:text-xl leading-relaxed max-w-2xl leading-relaxed">
A curated archive of organisations shaping creativity, business and culture. Selected for their ideas, ambition and the opportunities they create.          </p>
        </div>

        <div className="flex flex-col border-t border-outline-variant/30">
{visibleCompanies.map((company) => (
  <motion.div
  key={company.name}
  onClick={() => onSelectCompany(company)}
className="group flex flex-col md:flex-row gap-6 md:gap-16 pt-6 pb-8 md:py-14 border-b border-outline-variant/30 cursor-pointer transition-all duration-500 hover:bg-primary-fixed md:hover:px-8 hover:rounded-2xl"              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
<div className="w-[90%] mx-auto aspect-[4/3] md:w-[28%] md:mx-0 md:aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container">  <img
    src={company.image}
    alt={company.name}
    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
  />
  </div>
<div className="md:w-[72%] flex flex-col h-full px-[4%] md:px-0">
        <div className="flex items-start mb-4">
    <h2
      className="
      font-sans
      font-light
      text-[38px]
      md:text-[56px]
      tracking-[-0.04em]
      leading-[0.9]
      text-primary-fixed
      group-hover:text-black
      transition-colors
      "
    >
      {company.name}
    </h2>
  </div>

  <p className="
    font-interface-reg
    text-on-surface-variant
    text-lg
    md:text-xl
    leading-relaxed
    max-w-[90%]
    md:max-w-2xl
    group-hover:text-black/80
    transition-colors
  ">
    {company.description}
  </p>

<div className="flex flex-wrap gap-2 mt-auto pt-16">
    {company.tags.map(tag => (
    <span
      key={tag}
      className="text-[8px] md:text-[9px] px-2 py-[3px] rounded-full border border-outline-variant text-on-surface-variant uppercase tracking-widest bg-surface-container/30 group-hover:text-black/70 group-hover:border-black/20 group-hover:bg-black/5 transition-colors"
    >
      {tag}
    </span>
  ))}
</div>
</div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 md:mt-24 gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({
                    top: 300,
                    behavior: "smooth",
                  });
                }}
                className={`w-12 h-12 rounded-full border border-outline-variant transition-all duration-300 font-metadata-light tracking-widest flex items-center justify-center ${
                  currentPage === page
                    ? "bg-primary-fixed text-on-primary-fixed border-primary-fixed scale-110 shadow-[0_0_20px_rgba(251,219,222,0.3)]"
                    : "text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed"
                }`}
              >
                {page.toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        )}

      </section>
    </motion.div>
  );
}

function AboutPage({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-primary-fixed text-on-primary-fixed flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
<section className="px-margin-page pt-32 md:pt-48 pb-20 flex-grow overflow-hidden">
          <button 
          onClick={onBack}
          className="flex items-center gap-2 font-metadata-light uppercase tracking-widest hover:opacity-60 transition-opacity mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK TO OPPORTUNITIES 
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
<div className="lg:col-span-8">

<div className="max-w-4xl">
    {/* Left column */}
    <div>
      <motion.h1
  className="
  font-sans
  font-light
  text-[64px]
  md:text-[110px]
  xl:text-[120px]
  leading-[0.9]
  tracking-[-0.06em]
  "
>
  WORD OF
  <br />
  MOUTH.
</motion.h1>

<p className="
  mt-20
  md:mt-24
  text-2xl
  md:text-[40px]
  leading-tight
  max-w-[800px]
">
  Finding your way through an industry shouldn't depend on luck.
</p>

      <motion.div
  className="space-y-16 mt-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >

        <p className="font-interface-reg text-[22px] md:text-[26px] opacity-80 leading-[1.6]">
          The most interesting organisations are rarely the easiest to discover. Opportunities appear and disappear. New companies emerge. Established ones evolve. Valuable information is scattered across websites, newsletters, job boards and private conversations.
        </p>

        <div className="pt-6 border-t border-on-primary-fixed/10">
          <p className="font-interface-reg text-[22px] md:text-[26px] opacity-80 leading-[1.6]">
            Luova exists to make those discoveries easier.
          </p>
        </div>
<div className="pt-6 border-t border-on-primary-fixed/10">
  <p className="font-interface-reg text-[22px] md:text-[26px] opacity-80 leading-[1.6] max-w-3xl">
    We curate organisations, opportunities and ideas from across the creative economy. Some are hiring. Some are looking for collaborators. Some are simply worth knowing.
  </p>
</div>

<div className="pt-6 border-t border-on-primary-fixed/10">
  <p className="font-interface-reg text-[22px] md:text-[26px] opacity-80 leading-[1.6] max-w-3xl">
From architecture and hospitality to technology, branding, design and media, Luova is built for people shaping what comes next.  </p>
</div>

<div className="pt-10">
  <div className="
space-y-5
font-interface-reg
text-[30px]
md:text-[54px]
leading-[1.05]
tracking-[-0.03em]
">
    <p>Some are hiring.</p>
    <p>Some are looking for collaborators.</p>
    <p>Some are simply worth knowing.</p>
  </div>
</div>

      </motion.div>

    </div>

  </div>

</div>
<div className="lg:col-span-4 pt-12 lg:pt-[440px] space-y-20">
                <div className="space-y-6">
  <h3 className="font-metadata-light uppercase tracking-widest opacity-50 text-xs border-b border-on-primary-fixed/20 pb-4">
  Scope
</h3>

<ul className="space-y-4 font-interface-reg text-lg leading-relaxed">
  <li>Design</li>
  <li>Business</li>
  <li>Culture</li>
  <li>Technology</li>
  <li>Finland</li>
  <li>Nordics</li>
</ul>
</div>

            <div className="space-y-6">
              <h3 className="font-metadata-light uppercase tracking-widest opacity-50 text-xs border-b border-on-primary-fixed/20 pb-4">Connect</h3>
              <div className="space-y-4 font-interface-reg text-xl underline underline-offset-8 decoration-on-primary-fixed/30 hover:decoration-on-primary-fixed transition-colors">
                <a href="mailto:hello@luova.io" className="block">hello@luova.io</a>
                <a href="#" className="block">Instagram</a>
                <a href="#" className="block">Archive Access</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}

function CompanyDetail({
  company,
  jobs,
  onBack,
  onSelectJob
}: {
  company: HiringCompany;
  jobs: Job[];
  onBack: () => void;
  onSelectJob: (job: Job) => void;
}) {

const companyJobs = jobs.filter(
  job =>
    job.company?.trim().toLowerCase() ===
    company.name.trim().toLowerCase()
);

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className="px-margin-page pt-32 md:pt-48 pb-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant font-metadata-light uppercase tracking-widest hover:text-primary transition-colors mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12">
            <motion.h1 
              className="font-monumental-lg text-primary-fixed mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building the Future of {company.name.split(' ')[0]}
            </motion.h1>
          </div>
          
          <div className="lg:col-span-8">
<div className="
  w-full
  md:w-full
  max-w-[600px]
  aspect-[4/3.5]
  rounded-[16px]
  overflow-hidden
  bg-surface-container
  relative
">              <img src={company.image} alt={company.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <h3 className="font-metadata-light text-on-surface-variant uppercase tracking-widest opacity-60">HQ Location</h3>
              <p className="font-interface-reg text-xl text-primary">{company.location}</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-metadata-light text-on-surface-variant uppercase tracking-widest opacity-60">Mission</h3>
              <p className="font-interface-reg text-xl leading-relaxed italic">"{company.mission}"</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-metadata-light text-on-surface-variant uppercase tracking-widest opacity-60">Official Archive</h3>
              <a href={`https://${company.website}`} target="_blank" className="font-interface-reg text-xl text-primary-fixed hover:text-primary transition-colors flex items-center gap-3">
                {company.website} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-page py-32 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h3 className="font-action-med text-primary-fixed mb-8">Philosophy</h3>
            <p className="font-interface-reg text-on-surface-variant text-2xl leading-relaxed">
              {company.fullDescription}
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <h3 className="font-action-med text-primary-fixed mb-8">Current Opportunities ({companyJobs.length})</h3>
            <div className="flex flex-col border-t border-outline-variant/30">
              {companyJobs.length > 0 ? (
                companyJobs.map((job, index) => (
                  <JobRow key={index} job={job} onSelect={onSelectJob} />
                ))
              ) : (
                <p className="py-12 font-interface-reg text-on-surface-variant opacity-40 italic">
                  No active listings for this archive at current time.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function JobDetail({ job, onBack }: { job: Job, onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="px-margin-page pt-32 md:pt-48 pb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant font-metadata-light uppercase tracking-widest hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div>
              <motion.h1 
              className="font-monumental-lg text-primary-fixed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {job.title}
            </motion.h1>
            
            <div className="flex flex-wrap items-center gap-6 font-metadata-light text-on-surface uppercase tracking-[0.2em] mb-16">
              <div className="flex items-center gap-2">
                <span className="opacity-40 text-on-surface-variant">Company:</span>
                <span>{job.company}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-outline-variant/30" />
              <div className="flex items-center gap-2">
                <span className="opacity-40 text-on-surface-variant">Location:</span>
                <span>{job.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-outline-variant/30" />
              <div className="flex items-center gap-2">
                <span className="opacity-40 text-on-surface-variant">Type:</span>
                <span>{job.type}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary">
              <Share2 size={20} />
            </button>
            <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-margin-page grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        <div className="lg:col-span-8 space-y-20">
          <div className="space-y-6">
            <h3 className="font-action-med text-primary-fixed-dim border-b border-outline-variant/30 pb-4">The Role</h3>
            <p className="font-interface-reg text-on-surface-variant text-xl leading-relaxed">
              {job.description || "Detailed description coming soon."}
            </p>
            {job.role && (
              <ul className="space-y-4 pt-4">
                {job.role.map((item, i) => (
                  <li key={i} className="flex gap-4 font-interface-reg text-on-surface-variant">
                    <span className="text-primary-fixed opacity-40">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="font-action-med text-primary-fixed-dim border-b border-outline-variant/30 pb-4">Expectations</h3>
            {job.requirements ? (
              <ul className="space-y-4 pt-4">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex gap-4 font-interface-reg text-on-surface-variant">
                    <span className="text-primary-fixed opacity-40">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-interface-reg text-on-surface-variant">Detailed requirements coming soon.</p>
            )}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div className="bg-surface-container p-10 rounded-[2rem] border border-outline-variant/20 sticky top-48">
            <h4 className="font-action-med mb-8 text-center">Ready to join?</h4>
           <a
href={job.url}
target="_blank"
rel="noopener noreferrer"
className="w-full py-5 rounded-full bg-primary-fixed text-on-primary-fixed font-action-med text-base mb-6 hover:bg-primary transition-all duration-300 flex items-center justify-center"
>
Apply Now
</a>
            <p className="font-metadata-light text-on-surface-variant text-center leading-relaxed">
              Redirecting to official company application page.
            </p>
          </div>
        </aside>
      </section>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto">
      <section className="px-margin-page py-12 md:py-20 flex justify-center border-t border-outline-variant/10">
        <div className="font-metadata-light text-primary-fixed uppercase tracking-[0.3em] text-[11px] flex gap-4 md:gap-8 flex-wrap justify-center">
          <span className="opacity-40 text-on-surface-variant w-full md:w-auto text-center">Social:</span>
          <a href="#" className="hover:text-primary transition-colors duration-300">Instagram</a>
          <span className="opacity-20 hidden md:inline">—</span>
          <a href="#" className="hover:text-primary transition-colors duration-300">LinkedIn</a>
        </div>
      </section>

<div className="bg-surface-container-low w-full border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-page py-12 md:py-8 gap-6 md:gap-0 pb-24 lg:pb-8">        
<div className="font-monumental-lg !text-2xl text-primary-fixed tracking-widest uppercase flex items-center justify-center">          LUOVA
        </div>
        
        <div className="font-metadata-light text-on-surface text-center md:text-left text-[10px] md:text-[12px] opacity-60 flex flex-col md:flex-row gap-1 md:gap-2 uppercase tracking-widest">
          <span>© 2026 LUOVA HELSINKI</span>
          <span className="hidden md:inline">|</span>
          <span>INDEPENDENT ARCHIVE FOR CREATIVE INDUSTRY</span>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 font-metadata-light">
          <a
  href="mailto:hello@luova.io"
  className="text-on-secondary-container hover:text-on-surface transition-colors"
>
  CONTACT
</a>

<a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-on-secondary-container hover:text-on-surface transition-colors"
>
  LINKEDIN
</a>

<a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-on-secondary-container hover:text-on-surface transition-colors"
>
  INSTAGRAM
</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/1ihmxZQJ8evOI60KqQQjvwUz-IegeF6Hbv3OhUmHvhyM/gviz/tq?tqx=out:json"
        );

        const text = await response.text();

        const json = JSON.parse(
          text.substring(47).slice(0, -2)
        );

       const rows = json.table.rows.filter(
  (row: any) => row.c[0]?.v !== "Title"
);

const formattedJobs: Job[] = rows.map((row: any) => {
          const columns = row.c;

          return {
  title: columns[0]?.v || "",
  company: columns[1]?.v || "",
  location: columns[2]?.v || "",
  type: columns[3]?.v || "",
  description: columns[4]?.v || "",
  requirements: columns[5]?.v
    ? columns[5].v.split(";").map((r: string) => r.trim())
    : [],
  url: columns[6]?.v || "",
  date: columns[7]?.f || "",
};
        });

        setJobs(formattedJobs);

      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

const [selectedFeaturedCompany, setSelectedFeaturedCompany] =
useState<FeaturedCompany | null>(null);

useEffect(() => {
  const slug = window.location.hash.replace(/^#\/?/, "");

  if (!slug) return;

  const company = FEATURED_COMPANIES.find(
    c => c.slug === slug
  );

  if (company) {
    setSelectedFeaturedCompany(company);
  }
}, []);
const [selectedHiringCompany, setSelectedHiringCompany] =
useState<HiringCompany | null>(null);
const [isAboutVisible, setIsAboutVisible] = useState(false);
const [isFeaturedVisible, setIsFeaturedVisible] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
}, [
  selectedJob,
  selectedFeaturedCompany,
  selectedHiringCompany,
  isAboutVisible,
  isFeaturedVisible
]);

const JOBS_PER_PAGE = 4;
const totalPages = Math.ceil(
  jobs.length / JOBS_PER_PAGE
);




const visibleJobs = jobs.slice(
  (currentPage - 1) * JOBS_PER_PAGE,
  currentPage * JOBS_PER_PAGE
);

const handleHome = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });

  setSelectedJob(null);
  setSelectedHiringCompany(null);
  setSelectedFeaturedCompany(null);
  setIsAboutVisible(false);
  setIsFeaturedVisible(false);
  setCurrentPage(1);
};

const handleAbout = () => {
  window.scrollTo({
    top: 0,
    left: 0,
behavior: "auto"
  });

  setSelectedJob(null);
  setSelectedHiringCompany(null);
  setSelectedFeaturedCompany(null);

  setIsFeaturedVisible(false);
  setIsAboutVisible(true);
};

const handleFeatured = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });

  setSelectedJob(null);
  setSelectedHiringCompany(null);
  setSelectedFeaturedCompany(null);

  setIsAboutVisible(false);
  setIsFeaturedVisible(true);
};

let activePage: 'featured' | 'opportunities' | 'about' = 'opportunities';

if (isAboutVisible) {
  activePage = 'about';
} else if (
  isFeaturedVisible ||
  selectedFeaturedCompany
) {
  activePage = 'featured';
}

const showDock =
  !selectedJob &&
  !selectedHiringCompany &&
  !selectedFeaturedCompany &&
  !isAboutVisible;

  return (
<div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
        <Header onHome={handleHome} onAbout={handleAbout} onFeatured={handleFeatured} activePage={activePage} />

      {isAboutVisible ? (
  <AboutPage onBack={handleHome} />
) : isFeaturedVisible ? (
  <FeaturedPage
    onBack={handleHome}
    onSelectCompany={(c) => {
      window.location.hash = c.slug;

      setSelectedFeaturedCompany(c);
      setIsFeaturedVisible(false);
    }}
  />
        ) : selectedJob ? (
  <JobDetail
    job={selectedJob}
    onBack={() => setSelectedJob(null)}
  />
) : selectedHiringCompany ? (
  <CompanyDetail
    company={selectedHiringCompany}
    jobs={jobs}
    onBack={() => setSelectedHiringCompany(null)}
    onSelectJob={setSelectedJob}
  />
) : selectedFeaturedCompany ? (
  <FeaturedCompanyPage
    company={selectedFeaturedCompany}
    onBack={() => {
      window.location.hash = "";

      setSelectedFeaturedCompany(null);
      setIsFeaturedVisible(true);
    }}
    onPrevious={() => {
      const currentIndex = FEATURED_COMPANIES.findIndex(
        c => c.name === selectedFeaturedCompany.name
      );

      if (currentIndex > 0) {
        setSelectedFeaturedCompany(
          FEATURED_COMPANIES[currentIndex - 1]
        );
      }
    }}
    onNext={() => {
      const currentIndex = FEATURED_COMPANIES.findIndex(
        c => c.name === selectedFeaturedCompany.name
      );

      if (currentIndex < FEATURED_COMPANIES.length - 1) {
        setSelectedFeaturedCompany(
          FEATURED_COMPANIES[currentIndex + 1]
        );
      }
    }}
  />
) : (
        <main className="flex-grow pt-32 md:pt-48 pb-16 md:pb-32">
          {/* Hero Section */}
<section className="px-margin-page relative mb-12 md:mb-20">
              <div className="absolute inset-x-0 top-0 bg-primary-fixed/5 blur-[80px] md:blur-[120px] rounded-full -z-10 w-[90%] md:w-3/4 mx-auto h-[250px] md:h-[400px]"></div>
            
            {/* Mobile */}
<motion.h1
  className="
    block md:hidden
    font-monumental-lg
    text-[38px]
    leading-[0.9]
    tracking-[-0.014em]
    mb-6
    text-primary-fixed
  "
>
  DISCOVER
  <br />
  ORGANISATIONS
  <br />
  WORTH WORKING
  <br />
  FOR.
</motion.h1>

{/* Desktop */}
<motion.h1
  className="
    hidden md:block
    font-monumental-lg
    text-[120px]
    leading-[0.9]
    tracking-[-0.03em]
    mb-8
    text-primary-fixed
  "
>
  DISCOVER ORGANISATIONS
  <br />
  WORTH WORKING FOR.
</motion.h1>
            
            <motion.p
  className="font-interface-reg text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  The best career opportunities often appear before a job posting does.
  <span className="block mt-4">
    Some are hiring.
Some are looking for collaborators.
Some are simply worth knowing.
  </span>
</motion.p>
          </section>

          {/* Job Listings Section */}
          <section className="px-margin-page mb-section-gap">
            <div className="flex flex-col border-t border-outline-variant/30 min-h-[600px]">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                {visibleJobs.map((job, index) => (
                  <JobRow key={`${job.title}-${index}`} job={job} onSelect={setSelectedJob} />
                ))}
              </motion.div>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 md:mt-24 gap-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className={`w-12 h-12 rounded-full border border-outline-variant transition-all duration-300 font-metadata-light tracking-widest flex items-center justify-center ${
                      currentPage === page 
                        ? "bg-primary-fixed text-on-primary-fixed border-primary-fixed scale-110 shadow-[0_0_20px_rgba(251,219,222,0.3)]" 
                        : "text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed"
                    }`}
                  >
                    {page.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* Hiring Section */}
          <section className="px-margin-page mb-section-gap">
            <h3 className="font-interface-reg text-on-surface-variant uppercase tracking-widest mb-12 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-outline-variant"></span>
              WHO'S HIRING?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
              {HIRING_COMPANIES.map((company) => (
                <CompanyCard 
  key={company.name} 
  company={company} 
onSelect={setSelectedHiringCompany}
                  />
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Mobile/Tablet Dock */}
      <AnimatePresence>
        {showDock && (
          <motion.div 
            key="floating-dock"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed bottom-0 inset-x-0 p-4 bg-background/40 backdrop-blur-2xl border-t border-white/5 z-[100] transform-gpu"
          >
            <div className="max-w-md mx-auto">
              <button
  onClick={() => {
    window.location.href =
      "mailto:hello@luova.io?subject=Submit%20a%20Role&body=Company:%0AWebsite:%0ALocation:%0ARole:%0AApplication%20Link:%0A";
  }}
  className="w-full font-action-med text-primary-fixed border border-primary-fixed px-6 py-3 rounded-full hover:bg-primary-fixed hover:text-surface-dim transition-all duration-300 uppercase tracking-widest text-[10px]"
>
  SUBMIT A ROLE
</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

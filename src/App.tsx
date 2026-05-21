/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Menu, X, Instagram, Linkedin, Share2, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

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


interface Company {
  name: string;
  location: string;
  description: string;
  fullDescription: string;
  mission: string;
  image: string;
  tags: string[];
  website: string;
}

const FEATURED_COMPANIES: Company[] = [
  {
    name: "Aiven",
    location: "Finland, FI",
    description: "Aiven is your AI-ready Open Source Data Platform.",
    fullDescription: "Aiven is an AI-ready open source data platform company, helping organizations gain more value from their data. Aiven’s cloud platform combines open choice services to stream, store, and serve data, simply, securely, and rapidly across major cloud providers to power innovation. Aiven is trusted by thousands of customers to create next-generation applications confidently and quickly.Aiven is headquartered in Helsinki and has hubs in Amsterdam, Berlin, Paris, London, Singapore, Sydney, Auckland, Austin and Toronto.",
    image: "/Luova/images/companies/Data1.jpg",
    mission: "To simplify cloud infrastructure for developers worldwide.",
    tags: ["Databases", "Software"],
    website: "aiven.io/"
  },
  {
    name: "POLESTAR",
    location: "GOTHENBURG, SE",
    description: "Electric performance car brand focused on minimalist design, sustainable technology, and architectural retail experiences.",
    fullDescription: "Polestar is an electric performance car brand determined to improve the society we live in by focusing on uncompromised design and technology. They utilize design as a tool for progress, creating vehicles that are as beautiful as they are sustainable, often showcased in minimalist 'Spaces' that feel like high-end art galleries.",
    mission: "To accelerate the shift to sustainable mobility through design-led innovation.",
    image: "/Luova/images/companies/polestar.png",
    tags: ["Campaigns", "Motion", "Interactive"],
    website: "polestar.com"
  },
  {
    name: "SPACE 10",
    location: "COPENHAGEN, NO",
    description: "Research and design lab exploring sustainable living and circular design through technology and community-driven projects.",
    fullDescription: "SPACE10 was a research and design lab on a mission to create a better everyday life for people and the planet. Based in Copenhagen, the lab explored how to make our lives more sustainable, healthy, and affordable through cross-disciplinary collaborations that sat at the intersection of design, technology, and social trends.",
    mission: "To enable a more sustainable and equitable future through collaborative research.",
 image: "/Luova/images/companies/Data2.jpg",
    tags: ["Product Design", "AI", "Technology"],
    website: "space10.com"
  },
];
const HIRING_COMPANIES: Company[] = [
  FEATURED_COMPANIES[0],
  FEATURED_COMPANIES[1],
  FEATURED_COMPANIES[2],
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
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-page transition-all duration-300 h-24 md:h-32 ${
          scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent border-b border-white/5"
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
          <button className="hidden lg:block font-action-med text-primary-fixed border border-primary-fixed px-6 py-2 rounded-full hover:bg-primary-fixed hover:text-surface-dim transition-all duration-300 text-xs">
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
      className="group flex flex-col md:flex-row justify-between md:items-baseline py-8 md:py-12 border-b border-outline-variant/30 transition-all duration-500 hover:bg-surface-container/40 md:hover:px-8 hover:rounded-2xl hover:my-2 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2 max-w-3xl">
        <h2 className="font-headline-md text-primary-fixed group-hover:text-primary transition-colors duration-300">
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
        <button className="px-6 py-2 rounded-full bg-primary-fixed text-on-primary-fixed font-action-med text-[12px]">
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

function CompanyCard({ company, onSelect }: { company: Company, onSelect: (company: Company) => void }) {
  return (
    <motion.div 
      onClick={() => onSelect(company)}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-surface-container relative">
        <img 
          src={company.image} 
          alt={company.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <h4 className="font-headline-md !text-3xl md:!text-4xl text-primary tracking-tight">
        {company.name}
      </h4>
      
      <p className="font-interface-reg text-on-surface-variant mt-2 max-w-sm">
        {company.description}
      </p>
      
      <div className="mt-4 space-y-3">
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

function FeaturedPage({ onBack, onSelectCompany }: { onBack: () => void, onSelectCompany: (company: Company) => void }) {
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
      <section className="px-margin-page pt-32 md:pt-48 pb-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-on-surface-variant font-metadata-light uppercase tracking-widest hover:text-primary transition-colors mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>

        <div className="max-w-4xl mb-24">
          <motion.h1 
            className="font-monumental-lg text-primary-fixed mb-8 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FEATURED <br/>CO.
          </motion.h1>
          <p className="font-interface-reg text-on-surface-variant text-xl md:text-2xl leading-relaxed">
            A curated selection of the industry's most influential studios, agencies, and brands. These are the teams defining the visual landscape of our time.
          </p>
        </div>

        <div className="flex flex-col border-t border-outline-variant/30">
{FEATURED_COMPANIES.map((company) => (
  <motion.div
              key={company.name}
              onClick={() => onSelectCompany(company)}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-outline-variant/30 cursor-pointer hover:bg-surface-container/40 md:hover:px-8 transition-all duration-500 hover:my-2 hover:rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden rounded-2xl bg-surface-container">
                <img src={company.image} alt={company.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-monumental-lg !text-[48px] md:!text-[64px] leading-tight text-primary-fixed group-hover:text-primary transition-colors">{company.name}</h2>
                  <ArrowRight className="text-primary-fixed opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
                <div className="font-metadata-light text-primary-fixed-dim uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4 inline-block self-start">
                  {company.location}
                </div>
                <p className="font-interface-reg text-on-surface-variant text-xl leading-relaxed max-w-2xl">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {company.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-outline-variant text-on-surface-variant uppercase tracking-widest bg-surface-container/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
      <section className="px-margin-page pt-32 md:pt-48 pb-20 flex-grow">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-metadata-light uppercase tracking-widest hover:opacity-60 transition-opacity mb-20 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Close Archive
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
          <div className="lg:col-span-8">
            <motion.h1 
              className="font-monumental-lg !leading-[0.9] !text-[12vw] md:!text-[10vw] mb-16 tracking-tighter"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              CRAFTING THE <br/>FUTURE OF <br/>WORK.
            </motion.h1>

            <motion.div 
              className="space-y-12 max-w-3xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-interface-reg text-2xl md:text-4xl leading-tight">
                LUOVA is a curated digital archive and intelligence platform dedicated to the global creative industry. 
              </p>
              <p className="font-interface-reg text-xl md:text-2xl opacity-80 leading-relaxed">
                We believe that design isn't just a department—it's the core engine of modern value creation. By indexing the world's most innovative agencies, studios, and internal teams, we provide a bridge between visionary talent and groundbreaking opportunities. Based in Helsinki, operating globally.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-20">
            <div className="space-y-6">
              <h3 className="font-metadata-light uppercase tracking-widest opacity-50 text-xs border-b border-on-primary-fixed/20 pb-4">Our Values</h3>
              <ul className="space-y-4 font-action-med text-xl uppercase italic">
                <li>01. Radical Minimalism</li>
                <li>02. Architectural Integrity</li>
                <li>03. Cultural Relevance</li>
                <li>04. Human-Centric Systems</li>
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
  company: Company;
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
            <div className="aspect-video rounded-[3rem] overflow-hidden bg-surface-container relative">
              <img src={company.image} alt={company.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
          <div className="lg:col-span-6">
            <h3 className="font-action-med text-primary-fixed mb-8">Philosophy</h3>
            <p className="font-interface-reg text-on-surface-variant text-2xl leading-relaxed">
              {company.fullDescription}
            </p>
          </div>
          <div className="lg:col-span-6 space-y-12">
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
          <div className="max-w-4xl">
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
          <a href="#" className="hover:text-primary transition-colors duration-300">Linkedin</a>
        </div>
      </section>

      <div className="bg-surface-container-low w-full border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-page py-8 gap-8 md:gap-0 pb-32 lg:pb-8">
        <div className="font-monumental-lg !text-2xl text-primary-fixed tracking-widest uppercase">
          LUOVA
        </div>
        
        <div className="font-metadata-light text-on-surface text-center md:text-left text-[10px] md:text-[12px] opacity-60 flex flex-col md:flex-row gap-1 md:gap-2 uppercase tracking-widest">
          <span>© 2026 LUOVA HELSINKI</span>
          <span className="hidden md:inline">|</span>
          <span>INDEPENDANT ARCHIVE FOR CREATIVE INDUSTRY</span>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 font-metadata-light">
          <a href="#" className="text-on-secondary-container hover:text-on-surface transition-colors">PRIVACY</a>
          <a href="#" className="text-on-secondary-container hover:text-on-surface transition-colors">TERMS</a>
          <a href="#" className="text-on-secondary-container hover:text-on-surface transition-colors">CONTACT</a>
          <a href="#" className="text-on-secondary-container hover:text-on-surface transition-colors">LIST</a>
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

 const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
const [selectedHiringCompany, setSelectedHiringCompany] = useState<string | null>(null);
const [isAboutVisible, setIsAboutVisible] = useState(false);
const [isFeaturedVisible, setIsFeaturedVisible] = useState(false);
const [currentPage, setCurrentPage] = useState(1);

const JOBS_PER_PAGE = 4;

const filteredJobs = selectedHiringCompany
  ? jobs.filter(
      (job) =>
        job.company?.trim().toLowerCase() ===
        selectedHiringCompany.trim().toLowerCase()
    )
  : jobs;

const totalPages = Math.ceil(
  filteredJobs.length / JOBS_PER_PAGE
);

const visibleJobs = filteredJobs.slice(
  (currentPage - 1) * JOBS_PER_PAGE,
  currentPage * JOBS_PER_PAGE
);

const handleHome = () => {
  setSelectedHiringCompany(null);
  setSelectedJob(null);
  setSelectedCompany(null);
  setIsAboutVisible(false);
  setIsFeaturedVisible(false);
  setCurrentPage(1);
};

const handleAbout = () => {
  setSelectedJob(null);
  setSelectedCompany(null);
  setIsFeaturedVisible(false);
  setIsAboutVisible(true);
};

const handleFeatured = () => {
  setSelectedJob(null);
  setSelectedCompany(null);
  setIsAboutVisible(false);
  setIsFeaturedVisible(true);
};

let activePage: 'featured' | 'opportunities' | 'about' = 'opportunities';

if (isAboutVisible) {
  activePage = 'about';
} else if (isFeaturedVisible || selectedCompany) {
  activePage = 'featured';
}

const showDock =
  !selectedJob &&
  !selectedCompany &&
  !isAboutVisible;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onHome={handleHome} onAbout={handleAbout} onFeatured={handleFeatured} activePage={activePage} />

      {isAboutVisible ? (
        <AboutPage onBack={() => setIsAboutVisible(false)} />
      ) : isFeaturedVisible ? (
        <FeaturedPage 
          onBack={() => setIsFeaturedVisible(false)} 
          onSelectCompany={(c) => {
            setSelectedCompany(c);
            setIsFeaturedVisible(false);
          }} 
        />
      ) : selectedJob ? (
        <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
      ) : selectedCompany ? (
       <CompanyDetail 
  company={selectedCompany} 
  jobs={jobs}
  onBack={() => setSelectedCompany(null)} 
  onSelectJob={setSelectedJob} 
/>
      ) : (
        <main className="flex-grow pt-32 md:pt-48 pb-16 md:pb-32">
          {/* Hero Section */}
          <section className="px-margin-page relative mb-12 md:mb-20">
            <div className="absolute inset-x-0 top-0 bg-primary-fixed/5 blur-[80px] md:blur-[120px] rounded-full -z-10 w-[90%] md:w-3/4 mx-auto h-[250px] md:h-[400px]"></div>
            
            <motion.h1 
              className="font-monumental-lg mb-6 md:mb-8 max-w-5xl text-primary-fixed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              THE CREATIVE INDUSTRY INDEX
            </motion.h1>
            
            <motion.p 
              className="font-interface-reg text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Cross-disciplinary roles in <strong className="font-bold text-on-surface">Agencies</strong>, <strong className="font-bold text-on-surface">Startups</strong>, and <strong className="font-bold text-on-surface">In-house</strong> teams. Curated for the global creative economy.
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
  onSelect={() => {
    setSelectedHiringCompany(company.name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }} 
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
            className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-background/40 backdrop-blur-2xl border-t border-white/5 z-[100] transform-gpu"
          >
            <div className="max-w-md mx-auto">
              <button className="w-full font-action-med text-primary-fixed border border-primary-fixed px-6 py-3 rounded-full hover:bg-primary-fixed hover:text-surface-dim transition-all duration-300 uppercase tracking-widest text-[10px]">
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

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

interface FeaturedCompanyPageProps {
  company: Company;
  onBack: () => void;
}

export default function FeaturedCompanyPage({ company, onBack }: FeaturedCompanyPageProps) {
  return (
<main className="min-h-screen bg-[#090909] text-[#f5f1ec] overflow-x-hidden selection:bg-[#e7c3cb] selection:text-black pt-28 md:pt-36">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
<section className="relative z-0 min-h-[760px] md:min-h-0 mx-5 md:ml-10 md:mr-0 lg:ml-12 bg-[#e7c3cb] text-black rounded-b-[28px] md:rounded-bl-[30px] px-5 md:px-12 lg:px-14 pt-10 md:pt-16 pb-12 md:pb-20">        {/* Nav row */}
<div className="flex items-center justify-between font-metadata-light text-[11px] uppercase tracking-widest opacity-60">

  <button
    onClick={onBack}
    className="hover:opacity-100 transition-opacity"
  >
    ← FEATURED
  </button>

  <div className="hidden md:flex gap-8 pr-4 md:pr-6 lg:pr-8">

    <button
      className="hover:opacity-100 transition-opacity"
    >
      PREVIOUS
    </button>

    <button
      className="hover:opacity-100 transition-opacity"
    >
      NEXT
    </button>

  </div>

</div>

        {/* Breadcrumb */}
        <p className="mt-10 md:mt-16 text-[11px] tracking-[0.22em] uppercase opacity-55 font-['Inter',sans-serif] font-normal">
          Curation / Hardware / 2026
        </p>

        {/* Company name — Inter extralight, fixed 96px */}
<h1 className="mt-14 md:mt-14 text-[72px] md:text-[96px] leading-[0.88] tracking-[-0.05em] font-extralight font-['Inter',sans-serif]">
  {company.name}
</h1>
        {/* Tagline — short description, Inter regular, 32px */}
<h2 className="mt-5 md:mt-6 text-[20px] md:text-[23px] leading-[1.35] tracking-[-0.01em] font-normal font-['Inter',sans-serif] max-w-[560px]">          {company.description}
        </h2>

        {/* Spacer */}
<div className="h-20 md:h-72" />
        {/* Stats bar */}
        <div className="mr-6 md:mr-8 lg:mr-10 border-t border-black/10 pt-8 pb-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">            {[
  { label: 'Founded',   value: '2022' },
  { label: 'Location',  value: 'Helsinki, FI / Lisbon, PT' },
  { label: 'Team Size', value: '2–10' },
  { label: 'Status',    value: '• Independent' },
].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] tracking-[0.22em] uppercase opacity-28 font-normal font-['Inter',sans-serif]">
                  {item.label}
                </p>
                <p className="mt-4 text-[14px] tracking-[-0.02em] leading-none font-normal font-['Inter',sans-serif]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <section className="px-5 md:px-12 lg:px-14 pt-6 md:pt-16 pb-16 md:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-[700px_360px] justify-between gap-8 md:gap-12 items-start">
  <div>            {/* Lead paragraph — Inter extralight, ~26px, max ~480px wide */}
    <p className="text-[13px] md:text-[18px] leading-[1.75] tracking-[-0.01em] text-[#f1ede7] font-extralight font-['Inter',sans-serif] max-w-[680px]">            
  Paloceras is an independent eyewear studio operating between Helsinki and Lisbon. Through a practice informed by digital design, contemporary craft and material experimentation, the studio has developed a distinctive approach to object-making that sits between fashion and industrial design.
            </p>

            {/* Body copy — Inter regular, 14px, muted, same max-width */}
<div className="mt-8 md:mt-14 space-y-6 text-[13px] leading-[1.9] tracking-[0] text-[#8b857f] font-normal font-['Inter',sans-serif] max-w-[680px]">
  <p>
    Its work explores the translation of digital form into physical object, resulting in collections defined by sculptural silhouettes, technical precision and a strong sense of authorship.
  </p>

  <p>
    Part of a growing wave of digitally informed design practices, Paloceras reflects changing relationships between technology, craft and production. The studio's work demonstrates how contemporary tools can expand traditional disciplines rather than replace them.
  </p>

  <p>
    The result is eyewear that functions not only as an accessory, but as an expression of contemporary design culture.
  </p>
</div>

            {/* Carbon composite image card */}
<div className="mt-8 md:mt-14 max-w-[680px] overflow-hidden rounded-[12px] md:rounded-[16px]">
      <img
    src={company.image}
    alt={company.name}
    className="w-full aspect-[3/2] object-cover"
  />
</div>

</div>

{/* ── RIGHT COLUMN ── */}
<div className="order-first lg:order-last flex flex-col gap-4 md:gap-5 w-full">            {/* Fig 01 — Product Elevation */}
            <div className="overflow-hidden rounded-[16px] bg-[#111]">
              <div className="px-5 pt-4 pb-2">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/45 font-normal font-['Inter',sans-serif]">
                  Fig 01. Selected Work
                </p>
              </div>
<img
  src={company.image}
  alt={company.name}
className="w-full aspect-[4/4.6] object-cover"/>  
          </div>

            {/* Added to Luova */}
            <div className="rounded-[16px] bg-[#111] px-4 md:px-5 py-5 md:py-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 text-white/35">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 8h16" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-normal font-['Inter',sans-serif]">
                    Added to Luova
                  </p>
                  <p className="mt-3 text-[14px] tracking-[-0.03em] leading-none text-[#e5b8c2] font-normal font-['Inter',sans-serif]">
                    November 2026
                  </p>
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] tracking-[-0.02em] text-[#e5b8c2] hover:opacity-75 transition-opacity font-normal font-['Inter',sans-serif]"
                    >
                      {company.website}
                    </a>
<span className="text-[#e5b8c2] text-[20px] leading-none">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Known For */}
            <div className="rounded-[16px] bg-[#111] px-5 py-6">
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/40 font-normal font-['Inter',sans-serif]">
                Known For
              </p>
              <div className="mt-5 md:mt-6 space-y-3 md:space-y-4 text-[14px] tracking-[-0.01em] text-[#efeae4] font-normal font-['Inter',sans-serif]">
                {company.tags.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="text-[#e7c3cb] select-none">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

               </div>
        </div>
      </section>

    </main>
  );
}

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
<section className="ml-0 md:ml-10 lg:ml-12 bg-[#e7c3cb] text-black rounded-bl-[24px] md:rounded-bl-[30px] px-5 md:px-12 lg:px-14 pt-10 md:pt-16 pb-12 md:pb-20">        {/* Nav row */}
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[10px] md:text-[11px] tracking-[0.2em] uppercase opacity-60 font-['Inter',sans-serif]">          <button onClick={onBack} className="hover:opacity-100 transition-opacity">
            ← All Featured
          </button>
          <div className="flex gap-8 pr-4 md:pr-6 lg:pr-8">
            <button className="hover:opacity-100 transition-opacity">Prev</button>
            <button className="hover:opacity-100 transition-opacity">Next</button>
          </div>
        </div>

        {/* Breadcrumb */}
        <p className="mt-10 md:mt-16 text-[11px] tracking-[0.22em] uppercase opacity-55 font-['Inter',sans-serif] font-normal">
          Curation / Hardware / 2026
        </p>

        {/* Company name — Inter extralight, fixed 96px */}
        <h1 className="mt-14 text-[48px] md:text-[96px] leading-[0.95] tracking-[-0.03em] font-extralight font-['Inter',sans-serif]">
          {company.name}
        </h1>

        {/* Tagline — short description, Inter regular, 32px */}
        <h2 className="mt-6 text-[18px] md:text-[23px] leading-[1.15] tracking-[-0.02em] font-normal font-['Inter',sans-serif] max-w-[560px]">
          {company.description}
        </h2>

        {/* Spacer */}
        <div className="h-12 md:h-72" />

        {/* Stats bar */}
        <div className="mr-6 md:mr-8 lg:mr-10 border-t border-black/10 pt-8 pb-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">            {[
              { label: 'Founded',   value: '2026' },
              { label: 'Location',  value: company.location },
              { label: 'Team Size', value: '11–50' },
              { label: 'Status',    value: '• Early stage' },
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
<section className="px-5 md:px-12 lg:px-14 pt-10 md:pt-16 pb-16 md:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-[700px_360px] justify-between gap-10 md:gap-12 items-start">    <div>
            {/* Lead paragraph — Inter extralight, ~26px, max ~480px wide */}
            <p className="text-[17px] md:text-[18px] leading-[1.65] tracking-[-0.02em] text-[#f1ede7] font-extralight font-['Inter',sans-serif] max-w-[680px]">
              Aiven develops open-source cloud infrastructure that helps organisations manage, stream and scale data across major cloud platforms. Headquartered in Helsinki, the company has become one of Finland's most internationally recognised software companies, enabling teams to build and operate modern data systems without vendor lock-in.
            </p>

            {/* Body copy — Inter regular, 14px, muted, same max-width */}
<div className="mt-10 md:mt-14 space-y-7 text-[14px] leading-[1.9] tracking-[0] text-[#8b857f] font-normal font-['Inter',sans-serif] max-w-[680px]">              <p>
                By combining precision optics, industrial design and ambient computing principles, the company is building technology that feels almost invisible, responding to human behaviour instead of demanding constant focus.
              </p>
              <p>
                The broader philosophy behind IXI removes spectacle from the experience entirely. The product is designed to disappear into use: soft interfaces, restrained form language and seamless interaction replacing the visual noise commonly associated with consumer hardware.
              </p>
            </div>

            {/* Carbon composite image card */}
<div className="mt-10 md:mt-14 max-w-[680px] overflow-hidden rounded-[12px] md:rounded-[16px]">
      <img
    src={company.image}
    alt={company.name}
    className="w-full aspect-[3/2] object-cover"
  />
</div>

</div>

{/* ── RIGHT COLUMN ── */}
<div className="flex flex-col gap-4 md:gap-5 w-full">
            {/* Fig 01 — Product Elevation */}
            <div className="overflow-hidden rounded-[16px] bg-[#111]">
              <div className="px-5 pt-4 pb-2">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/45 font-normal font-['Inter',sans-serif]">
                  Fig 01. Product Elevation
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
                      className="text-[15px] tracking-[-0.02em] text-[#e5b8c2] hover:opacity-75 transition-opacity font-normal font-['Inter',sans-serif]"
                    >
                      {company.website}
                    </a>
                    <span className="text-[#e5b8c2] text-sm">↗</span>
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

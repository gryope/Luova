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
    <main className="min-h-screen bg-[#090909] text-[#f5f1ec] overflow-x-hidden selection:bg-[#e7c3cb] selection:text-black pt-24 md:pt-32">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#e7c3cb] text-black rounded-bl-[48px] px-8 md:px-12 lg:px-14 pt-6 pb-0">

        {/* Nav row — sits right at the top of the pink area */}
        <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase opacity-60">
          <button onClick={onBack} className="hover:opacity-100 transition-opacity">
            ← All Featured
          </button>
          <div className="flex gap-8">
            <button className="hover:opacity-100 transition-opacity">Prev</button>
            <button className="hover:opacity-100 transition-opacity">Next</button>
          </div>
        </div>

        {/* Breadcrumb */}
        <p className="mt-10 text-[11px] tracking-[0.22em] uppercase opacity-55">
          Curation / Hardware / 2026
        </p>

        {/* Company name — Inter extralight */}
        <h1 className="mt-4 text-[120px] leading-none tracking-[-0.03em] font-extralight font-['Inter',sans-serif]">
          {company.name}
        </h1>

        {/* Tagline — Inter regular */}
        <h2 className="mt-6 text-[40px] leading-[1.1] tracking-[-0.025em] font-normal font-['Inter',sans-serif] max-w-[580px]">
          {company.description}
        </h2>

        {/* Generous spacer between tagline and stats rule */}
        <div className="h-28" />

        {/* Stats bar */}
        <div className="border-t border-black/10 pt-8 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
            {[
              { label: 'Founded',   value: '2026' },
              { label: 'Location',  value: company.location },
              { label: 'Team Size', value: '11–50' },
              { label: 'Status',    value: '• Early stage' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] tracking-[0.22em] uppercase opacity-40 font-normal font-['Inter',sans-serif]">
                  {item.label}
                </p>
                <p className="mt-4 text-[18px] tracking-[-0.02em] leading-none font-normal font-['Inter',sans-serif]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-12 lg:px-14 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="max-w-[400px]">

            {/* Lead paragraph — Inter extralight ~28px */}
            <p className="text-[28px] leading-[1.5] tracking-[-0.025em] text-[#f1ede7] font-extralight font-['Inter',sans-serif]">
              {company.fullDescription}
            </p>

            {/* Body copy — Inter regular ~14px, muted */}
            <div className="mt-10 space-y-7 text-[14px] leading-[1.9] tracking-[-0.01em] text-[#7a7470] font-normal font-['Inter',sans-serif]">
              <p>
                By combining precision optics, industrial design and ambient computing principles, the company is building technology that feels almost invisible, responding to human behaviour instead of demanding constant focus.
              </p>
              <p>
                The broader philosophy behind IXI removes spectacle from the experience entirely. The product is designed to disappear into use: soft interfaces, restrained form language and seamless interaction replacing the visual noise commonly associated with consumer hardware.
              </p>
            </div>

            {/* Carbon composite image card */}
            <div className="mt-12 overflow-hidden rounded-[16px] bg-[#111]">
              <div className="aspect-[4/3.2] bg-[linear-gradient(160deg,#2a2a2a_0%,#0d0d0d_100%)]" />
              <div className="flex items-center justify-between px-5 py-4 border-t border-white/[0.06]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#f0ece6]">
                  Carbon Composite Detail
                </p>
                <button className="text-white/40 hover:text-white transition-colors text-[16px] leading-none">
                  ⊕
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — 300px fixed width ── */}
          <div className="flex flex-col gap-3 w-full">

            {/* Fig 01 — Product Elevation */}
            <div className="overflow-hidden rounded-[16px] bg-[#111]">
              <div className="px-5 pt-4 pb-2">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/45">
                  Fig 01. Product Elevation
                </p>
              </div>
              <div className="aspect-[4/3] bg-[radial-gradient(ellipse_at_60%_50%,#242424_0%,#060606_75%)]" />
            </div>

            {/* Added to Luova */}
            <div className="rounded-[16px] bg-[#111] px-5 py-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 text-white/35">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 8h16" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">
                    Added to Luova
                  </p>
                  <p className="mt-3 text-[30px] tracking-[-0.03em] leading-none text-[#e5b8c2]">
                    November 2026
                  </p>
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[22px] tracking-[-0.025em] text-[#e5b8c2] hover:opacity-75 transition-opacity"
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
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">
                Known For
              </p>
              <div className="mt-6 space-y-4 text-[14px] tracking-[-0.02em] text-[#efeae4]">
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

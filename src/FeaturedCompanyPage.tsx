export default function LuovaIXIPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-[#f5f1ec] overflow-x-hidden selection:bg-[#e7c3cb] selection:text-black">
      <div className="relative">
        <section className="relative mr-[-2vw] rounded-bl-[30px] bg-[#e7c3cb] text-black pt-10 pb-20 px-10 md:px-16 lg:px-20 min-h-[760px]">
          <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase opacity-80">
            <button className="hover:opacity-100 transition-opacity">
              ← All Featured
            </button>

            <div className="flex gap-8">
              <button className="hover:opacity-100 transition-opacity">Prev</button>
              <button className="hover:opacity-100 transition-opacity">Next</button>
            </div>
          </div>

          <div className="mt-20 max-w-[640px]">
            <p className="text-[11px] tracking-[0.24em] uppercase opacity-70">
              Curation / Hardware / 2026
            </p>

            <h1 className="mt-10 text-[120px] leading-none tracking-[-0.08em] font-light">
              IXI
            </h1>

            <h2 className="mt-10 text-[54px] leading-[1.08] tracking-[-0.045em] font-normal max-w-[620px]">
              Autofocus eyewear that adapts in real time to how we see.
            </h2>
          </div>

          <div className="absolute bottom-20 left-10 right-10 md:left-16 md:right-16 lg:left-20 lg:right-20 border-t border-black/10 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-12">
              {[
                {
                  label: 'Founded',
                  value: '2026',
                },
                {
                  label: 'Location',
                  value: 'Espoo, Finland',
                },
                {
                  label: 'Team Size',
                  value: '11–50',
                },
                {
                  label: 'Status',
                  value: '• Early stage',
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] tracking-[0.24em] uppercase opacity-45">
                    {item.label}
                  </p>

                  <p className="mt-5 text-[26px] tracking-[-0.03em] leading-none font-normal">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

<section className="relative px-10 md:px-16 lg:px-20 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_0.8fr] gap-20 lg:gap-28">
          <div>
            <div className="max-w-[520px]">
              <p className="text-[50px] md:text-[58px] leading-[1.34] tracking-[-0.045em] text-[#f1ede7] font-light">
                Founded by veterans from Varjo, IXI explores a quieter direction for consumer technology: adaptive eyewear designed to integrate naturally into everyday life rather than compete for attention.
              </p>

              <div className="mt-16 space-y-12 text-[20px] leading-[1.95] tracking-[-0.02em] text-[#b8b2aa]">
                <p>
                  By combining precision optics, industrial design and ambient computing principles, the company is building technology that feels almost invisible, responding to human behaviour instead of demanding constant focus.
                </p>

                <p>
                  The broader philosophy behind IXI removes spectacle from the experience entirely. The product is designed to disappear into use: soft interfaces, restrained form language and seamless interaction replacing the visual noise commonly associated with consumer hardware.
                </p>
              </div>
            </div>

            <div className="mt-20 max-w-[470px] overflow-hidden rounded-[18px] border border-white/5 bg-white/[0.02]">
              <div className="aspect-[1.12/1] bg-[linear-gradient(180deg,#202020_0%,#090909_100%)]" />

              <div className="flex items-center justify-between px-5 py-4 border-t border-white/5">
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#f0ece6]">
                  Carbon Composite Detail
                </p>

                <button className="text-white/60 hover:text-white transition-colors text-lg">
                  ⊕
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[620px] lg:ml-auto w-full">
            <div className="overflow-hidden rounded-[20px] border border-white/5 bg-[#0d0d0d]">
              <div className="px-6 pt-5">
                <p className="text-[10px] tracking-[0.24em] uppercase text-white/70">
                  Fig 01. Product Elevation
                </p>
              </div>

              <div className="aspect-[1.12/1] bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#070707_70%)]" />
            </div>
rounded-[20px] border border-white/5 bg-white/[0.025]
            <div className="mt-5  px-7 py-7 backdrop-blur-sm">
              <div className="flex items-start gap-5">
                <div className="text-[#e7c3cb] text-xl mt-1">⌲</div>

                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-white/55">
                    Added to Luova
                  </p>

                  <p className="mt-4 text-[44px] tracking-[-0.05em] leading-none text-[#f2eee8]">
                    November 2026
                  </p>

                  <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
                    <a
                      href="#"
                      className="text-[32px] tracking-[-0.04em] text-[#f2eee8] hover:opacity-80 transition-opacity"
                    >
                      ixi.com
                    </a>

                    <span className="text-[#e7c3cb] text-2xl">↗</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-white/[0.02] px-7 py-8 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.24em] uppercase text-white/55">
                Known For
              </p>

              <div className="mt-8 space-y-7 text-[22px] tracking-[-0.03em] text-[#efeae4]">
                {[
                  'Post-Varjo hardware team',
                  'Precision optics',
                  'Ambient computing direction',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-5">
                    <span className="text-[#e7c3cb]">—</span>
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

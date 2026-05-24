import { motion } from "framer-motion";

export default function FeaturedCompanyPage({ company, onBack }: any) {
  return (
    <motion.div
      className="min-h-screen bg-[#f3dfe3] text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* HERO */}
      <section className="px-8 md:px-12 pt-40 pb-24">

        {/* TOP NAV */}
        <div className="flex items-center justify-between mb-16">

          <button
            onClick={onBack}
            className="uppercase tracking-[0.2em] text-[11px] opacity-60 hover:opacity-100 transition-opacity"
          >
            ← All Featured
          </button>

          <div className="flex items-center gap-8 uppercase tracking-[0.2em] text-[11px]">
            <button className="opacity-40 hover:opacity-100 transition-opacity">
              Prev
            </button>

            <button className="hover:opacity-60 transition-opacity">
              Next
            </button>
          </div>

        </div>

        {/* HERO GRID */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-start">

          {/* IMAGE */}
          <div className="aspect-[5/4] overflow-hidden rounded-[28px] bg-black/5">
            <img
              src={company.image}
              alt={company.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="pt-2">

            <h1 className="font-monumental-lg text-[64px] md:text-[92px] leading-none mb-10">
              {company.name}
            </h1>

            <div className="mb-16">

  <p className="uppercase tracking-[0.22em] text-[11px] opacity-50 mb-6">
    Featured Archive
  </p>

  <div className="space-y-2">

    <p className="text-[30px] leading-tight">
      {company.location}
    </p>

    <p className="text-[18px] opacity-60 leading-relaxed max-w-md">
      {company.tags.join(" / ")}
    </p>

  </div>

</div>

            <div className="space-y-10 max-w-[680px]">

              <p className="text-[22px] md:text-[24px] leading-[1.6]">
                {company.description}
              </p>

              <p className="text-[22px] leading-[1.7] opacity-80">
                {company.fullDescription}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EDITORIAL SECTION */}
      <section className="px-8 md:px-12 pb-24">

        <div className="border-t border-black/10 pt-16">

          <div className="grid md:grid-cols-[0.42fr_0.58fr] gap-20">

            {/* LEFT METADATA */}
            <div className="space-y-10">

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
                  Headquarters
                </p>

                <p className="text-[22px]">
                  {company.location}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
                  Category
                </p>

                <p className="text-[22px] leading-relaxed">
                  {company.tags.join(" / ")}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
                  Mission
                </p>

                <p className="text-[20px] leading-relaxed opacity-80">
                  {company.mission}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
                  Official Website
                </p>

                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] underline underline-offset-4"
                >
                  {company.website}
                </a>
              </div>

            </div>

            {/* WHY IT MATTERS */}
            <div className="border-l border-black/10 pl-12">

              <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-8">
                Why It Matters
              </p>

              <div className="space-y-10">

                <p className="text-[42px] leading-[1.25] font-light">
                  IXI represents a quieter direction for consumer technology:
                  products designed to integrate naturally into everyday life
                  rather than compete for attention.
                </p>

                <p className="text-[24px] leading-[1.75] opacity-80 max-w-[900px]">
                  The company reflects a broader Nordic movement toward calmer,
                  more ambient forms of computing where hardware becomes less
                  performative and more seamlessly integrated into human behaviour.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </motion.div>
  );
}

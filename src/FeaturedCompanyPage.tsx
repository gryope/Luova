import { motion } from "framer-motion";

export default function FeaturedCompanyPage({ company }: any) {
  return (
    <motion.div
      className="min-h-screen bg-[#f3dfe3] text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* HERO */}
      <section className="px-8 md:px-12 pt-40 pb-24">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
            <img
              src={company.image}
              alt={company.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col">

            <p className="uppercase tracking-[0.2em] text-[11px] mb-6 opacity-60">
              {company.name}
            </p>

            <h1 className="font-monumental-lg text-[72px] leading-none mb-8">
              {company.name}
            </h1>

            <div className="space-y-1 mb-12">
              <p className="text-[28px] leading-tight">
                {company.location}
              </p>

              <p className="text-[24px] opacity-70">
                {company.tags.join(" / ")}
              </p>
            </div>

            <div className="space-y-10 max-w-xl">

  <p className="text-[24px] leading-relaxed">
    {company.description}
  </p>

  <p className="text-[22px] leading-relaxed opacity-80">
    {company.fullDescription}
  </p>

  <div className="space-y-10 pt-12 border-t border-black/10">

    <div>
      <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
        CATEGORY
      </p>

      <p className="text-[20px] leading-relaxed">
        {company.tags.join(" / ")}
      </p>
    </div>

    <div>
      <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
        MISSION
      </p>

      <p className="text-[20px] leading-relaxed opacity-80">
        {company.mission}
      </p>
    </div>

    <div>
      <p className="uppercase tracking-[0.2em] text-[11px] opacity-50 mb-3">
        OFFICIAL WEBSITE
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

</div>

          </div>

        </div>

      </section>

    </motion.div>
  );
}

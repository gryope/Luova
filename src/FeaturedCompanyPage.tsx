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
                {company.category}
              </p>
            </div>

            <div className="space-y-8 max-w-xl">

              <p className="text-[24px] leading-relaxed">
                {company.intro}
              </p>

              <p className="text-[22px] leading-relaxed opacity-80">
                {company.description}
              </p>

            </div>

          </div>

        </div>

      </section>

    </motion.div>
  );
}

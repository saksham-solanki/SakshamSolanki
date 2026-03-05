"use client"

const logos = [
  "Paytm",
  "IKEA",
  "Nestle",
  "Sequoia",
  "Snapdeal",
  "Shiprocket",
  "Dripify",
  "Novagems",
  "Vizitor",
  "Klarity",
  "Lohum",
  "Vikram Solar",
  "Chemco",
  "Jewellerybox",
  "BSF",
  "NGX",
]

export function LogoMarquee({ title }: { title?: string }) {
  return (
    <div className="py-8">
      {title && (
        <p className="text-text-tertiary text-sm text-center mb-6 uppercase tracking-widest">
          {title}
        </p>
      )}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="mx-8 text-text-tertiary/50 hover:text-text-primary text-sm font-semibold tracking-wide transition-colors duration-300 cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

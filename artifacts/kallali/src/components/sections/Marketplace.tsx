"use client";
import { motion } from "framer-motion";
import { Sprout, Package, Tractor, MapPin, ArrowRight } from "lucide-react";

const actions = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Post Crops",
    description: "List your harvest directly — set your price, reach buyers across Telangana.",
    color: "bg-green-50 text-kallali-green border-green-100",
    tag: "Sell",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Buy Seeds & Inputs",
    description: "Certified seeds, fertilisers, and pesticides from verified suppliers at fair prices.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    tag: "Buy",
  },
  {
    icon: <Tractor className="w-6 h-6" />,
    title: "Rent Equipment",
    description: "Access tractors, harvesters, and irrigation equipment from your neighbours.",
    color: "bg-sky-50 text-sky-600 border-sky-100",
    tag: "Rent",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Find Nearby Buyers",
    description: "Connect with mandis, wholesalers, and direct buyers near your village — no middlemen.",
    color: "bg-rose-50 text-rose-600 border-rose-100",
    tag: "Connect",
  },
];

const productCards = [
  { name: "Hybrid Cotton Seeds", price: "₹1,200/kg", seller: "AgriFresh, Warangal", badge: "Top Seller" },
  { name: "Urea Fertiliser", price: "₹266/bag", seller: "Govt. Rate · Certified", badge: "Gov Rate" },
  { name: "Tractor (per day)", price: "₹1,800/day", seller: "Raju Farms · 3 km away", badge: "Nearby" },
  { name: "Tomatoes (1 ton)", price: "₹18,000", seller: "Your listing · Active", badge: "Listed" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold uppercase tracking-wide mb-4">
            Marketplace
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Sell directly to buyers.
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Buy what you need. Sell what you grow. Rent what you don't own. All in one place — built for Indian farmers.
          </p>
        </motion.div>

        {/* Action cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {actions.map((a) => (
            <motion.div
              key={a.title}
              variants={card}
              className={`group bg-white rounded-2xl border p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${a.color}`}
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${a.color}`}>
                {a.icon}
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-gray-900">{a.title}</h3>
                <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold">
                  {a.tag}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Product listing preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-900">Live Listings</p>
              <p className="text-xs text-gray-400 mt-0.5">Telangana region · Updated now</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-kallali-green hover:text-kallali-green-dark transition-colors"
            >
              View all listings <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {productCards.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 hover:bg-gray-50/60 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                    {i === 0 ? "🌱" : i === 1 ? "🧪" : i === 2 ? "🚜" : "🍅"}
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-green-50 text-kallali-green text-[10px] font-semibold border border-green-100">
                    {p.badge}
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-kallali-green transition-colors">
                  {p.name}
                </p>
                <p className="text-base font-extrabold text-kallali-green mt-1">{p.price}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.seller}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

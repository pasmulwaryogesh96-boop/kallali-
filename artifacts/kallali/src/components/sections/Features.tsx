"use client";
import { motion } from "framer-motion";
import { CloudSun, Sprout, Bot, Wallet, BookOpen, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <CloudSun className="w-6 h-6" />,
    emoji: "🌦",
    title: "Weather Intelligence",
    description:
      "Hyperlocal 14-day forecasts with AI-generated farm alerts. Know exactly when to plant, irrigate, or harvest based on real weather data for your village.",
    color: "bg-sky-50 text-sky-600",
    badge: "Hyperlocal",
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    emoji: "🪴",
    title: "Crop Health",
    description:
      "AI-powered disease and pest detection using your phone camera. Get instant diagnosis and treatment recommendations before damage spreads.",
    color: "bg-green-50 text-kallali-green",
    badge: "AI Detection",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    emoji: "🤖",
    title: "Kemraj AI Assistant",
    description:
      "Ask anything in Telugu, Hindi, or English — from planting schedules to soil health. Expert guidance available 24×7, even offline.",
    color: "bg-violet-50 text-violet-600",
    badge: "24×7",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    emoji: "💰",
    title: "Farm Finance",
    description:
      "Track income, expenses, and loans in one place. Discover government schemes, Kisan Credit Card benefits, and microfinance options tailored for you.",
    color: "bg-amber-50 text-amber-600",
    badge: "Smart Insights",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    emoji: "📒",
    title: "Digital Farm Diary",
    description:
      "Log planting dates, treatments, yields, and observations. Your AI diary learns from your history to give sharper advice every season.",
    color: "bg-teal-50 text-teal-600",
    badge: "Always Learning",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    emoji: "🛒",
    title: "Marketplace",
    description:
      "Buy seeds, fertilisers, and tools at the best prices. Sell your produce directly to buyers in Hyderabad and across Telangana — no middlemen.",
    color: "bg-rose-50 text-rose-600",
    badge: "Direct Trade",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
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
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Everything you need to manage your farm
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Every tool built with Indian farmers in mind — simple to use, powerful under the hood.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.color}`}>
                  {f.icon}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 text-[11px] font-medium border border-gray-100">
                  {f.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                <span className="mr-1.5">{f.emoji}</span>
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-kallali-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, CloudSun, Sprout, TrendingUp, Sparkles } from "lucide-react";

const pills = [
  { emoji: "🌱", label: "Built for Indian farmers" },
  { emoji: "🤖", label: "Powered by Kemraj AI" },
  { emoji: "📍", label: "Works across India" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-100/30 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-50/40 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-kallali-green animate-pulse" />
              🌾 India's AI Powered Farming Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight"
          >
            Empowering
            <br />
            <span className="text-kallali-green">Farmers</span>
            <br />
            with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed"
          >
            Manage your farm, finances, marketplace and crops with{" "}
            <span className="font-semibold text-gray-700">Kemraj</span> — your AI farming companion
            built for Indian agriculture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-kallali-green text-white font-semibold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-700 font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-kallali-green fill-kallali-green" />
              </div>
              Watch Demo
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 font-medium shadow-sm"
              >
                <span>{p.emoji}</span>
                {p.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — premium illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main phone + farmer illustration */}
          <div className="relative flex justify-center">
            {/* Farmer avatar card */}
            <div className="relative z-10">
              {/* Phone frame */}
              <div className="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-kallali-green px-4 pt-3 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-xs font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-1.5 bg-white/60 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">Kemraj AI</p>
                        <p className="text-green-100 text-[10px]">Online · Ready to help</p>
                      </div>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="p-3 space-y-2 bg-gray-50">
                    <div className="flex justify-end">
                      <div className="bg-kallali-green text-white text-[11px] rounded-2xl rounded-br-sm px-3 py-2 max-w-[75%]">
                        My cotton leaves have brown spots
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-kallali-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="bg-white text-gray-700 text-[11px] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[75%] shadow-sm border border-gray-100">
                        This may indicate fungal infection. Upload a photo for analysis.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-kallali-green text-white text-[11px] rounded-2xl rounded-br-sm px-3 py-2">
                        When should I spray?
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-kallali-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="bg-white text-gray-700 text-[11px] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[75%] shadow-sm border border-gray-100">
                        Evening spray is best today — humidity drops after 6pm. ✅
                      </div>
                    </div>
                  </div>
                  {/* Input */}
                  <div className="px-3 pb-4 bg-white">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                      <span className="text-[11px] text-gray-400 flex-1">Ask in Telugu, Hindi or English…</span>
                      <div className="w-5 h-5 rounded-full bg-kallali-green flex items-center justify-center">
                        <ArrowRight className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 top-8 bg-white rounded-2xl border border-gray-100 shadow-lg p-3 w-44"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center">
                  <CloudSun className="w-4 h-4 text-sky-500" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Weather Alert</span>
              </div>
              <p className="text-xs text-gray-500">Rain expected Thursday — adjust irrigation plan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-6 top-16 bg-white rounded-2xl border border-gray-100 shadow-lg p-3 w-44"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-kallali-green" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Crop Health</span>
              </div>
              <p className="text-xs text-gray-500">Cotton — 78% healthy · Next check in 2 days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-2 bottom-16 bg-white rounded-2xl border border-gray-100 shadow-lg p-3 w-44"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Market Price</span>
              </div>
              <p className="text-xs text-gray-500">Cotton · ₹6,800/quintal · ↑ 4% this week</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

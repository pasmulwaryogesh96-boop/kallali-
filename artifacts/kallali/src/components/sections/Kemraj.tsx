"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Mic, Brain, CloudSun, Leaf, ShieldCheck } from "lucide-react";

const capabilities = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "24×7 AI Assistant — never offline" },
  { icon: <Mic className="w-5 h-5" />, label: "Voice Chat in Telugu, Hindi or English" },
  { icon: <Brain className="w-5 h-5" />, label: "Learns your farm history every season" },
  { icon: <CloudSun className="w-5 h-5" />, label: "Proactive weather alerts before problems" },
  { icon: <Leaf className="w-5 h-5" />, label: "Disease detection from a single photo" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Soil health recommendations" },
];

const messages = [
  { from: "user", text: "My cotton leaves have brown spots." },
  {
    from: "ai",
    text: "This may indicate fungal infection. Upload a photo so I can analyze it. Based on today's weather in your area, spraying during the evening is recommended for best results.",
  },
  { from: "user", text: "Which fungicide should I use?" },
  {
    from: "ai",
    text: "For early blight, Mancozeb 75% WP at 2g/litre works well. Available at your nearest Rythu Seva Kendra. Want me to log this treatment in your farm diary?",
  },
];

export default function Kemraj() {
  return (
    <section id="kemraj" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold uppercase tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Meet Your AI Companion
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Meet <span className="text-kallali-green">Kemraj</span> —<br />
              Your Personal AI<br />Farming Expert
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Kemraj understands your crops, soil, weather and farming practices. Ask questions in{" "}
              <span className="font-semibold text-gray-700">Telugu, English or Hindi</span> and
              receive instant AI-powered guidance.
            </p>

            <ul className="mt-8 space-y-3">
              {capabilities.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-kallali-green flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-kallali-green text-white font-semibold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                Chat with Kemraj
              </a>
            </div>
          </motion.div>

          {/* Right — chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white">
                <div className="w-9 h-9 rounded-xl bg-kallali-green flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Kemraj</p>
                  <p className="text-xs text-kallali-green font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-kallali-green inline-block animate-pulse" />
                    Online — ready to help
                  </p>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 bg-gray-50/50">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "ai" && (
                      <div className="w-7 h-7 rounded-lg bg-kallali-green flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-kallali-green text-white rounded-br-sm"
                          : "bg-white border border-gray-100 text-gray-700 shadow-sm rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-5 py-4 border-t border-gray-100 bg-white flex items-center gap-3">
                <div className="flex-1 h-10 rounded-xl bg-gray-50 border border-gray-200 px-4 flex items-center">
                  <span className="text-sm text-gray-400">Ask in Telugu, Hindi or English…</span>
                </div>
                <button className="w-10 h-10 rounded-xl bg-kallali-green flex items-center justify-center hover:bg-kallali-green-dark transition-colors flex-shrink-0">
                  <Mic className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

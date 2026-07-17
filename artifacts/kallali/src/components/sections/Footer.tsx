"use client";
import { Leaf } from "lucide-react";

const links = {
  Product: ["Features", "Kemraj AI", "Marketplace", "Weather", "Farm Diary"],
  Company: ["About", "Blog", "Contact", "Careers"],
  Support: ["Help", "Community", "Privacy Policy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-kallali-green flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Kallali</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Empowering Indian farmers with AI-powered tools to grow smarter, sell better, and thrive.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "f"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-kallali-green text-gray-400 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 Kallali Technologies. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Made with ❤️ in India for Indian Farmers 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Megaphone,
  MessageSquare,
  Bookmark,
  Compass,
  Users,
  Globe,
  Network,
  Share2,
  Copy,
  Check,
  School,
  Star,
  Layers,
  ChevronLeft,
  ExternalLink,
  BookOpen,
  Sparkles,
  BookmarkMinus,
  Laptop
} from "lucide-react";
import { COLLEGE_LINKS, LEVELS_DATA, LinkItem, LevelData } from "./data";

// Custom SVG Telegram Icon for Brand Fidelity
function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.82-.77 4.47-1.08 6.16-.13.72-.4 1-.66 1.02-.56.05-1-.38-1.54-.74-.84-.57-1.32-.93-2.14-1.47-.95-.62-.33-.97.21-1.53.14-.15 2.59-2.38 2.64-2.59.01-.03.01-.14-.05-.2-.07-.06-.17-.04-.24-.02-.1.02-1.7 1.08-4.81 3.18-.46.31-.87.47-1.24.46-.4-.01-1.18-.23-1.75-.41-.71-.23-1.27-.35-1.22-.73.03-.2.3-.41.82-.62 3.2-1.39 5.34-2.31 6.42-2.75 3.07-1.25 3.7-1.47 4.12-1.48.09 0 .3.02.44.13.11.1.15.23.16.33.02.1.01.42 0 .57z" />
    </svg>
  );
}

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<"college" | "levels">("college");
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  // Load favorites from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("qd_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites", e);
    }
  }, []);

  // Save favorites to local storage on change
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let updated: string[];
    if (favorites.includes(id)) {
      updated = favorites.filter((fId) => fId !== id);
      triggerAlert("تمت الإزالة من المفضلة السريعة");
    } else {
      updated = [...favorites, id];
      triggerAlert("تمت الإضافة إلى المفضلة السريعة! 📌");
    }
    setFavorites(updated);
    localStorage.setItem("qd_favorites", JSON.stringify(updated));
  };

  // Trigger transient alert banner
  const triggerAlert = (text: string) => {
    setAlertText(text);
    setShowCopiedAlert(true);
    setTimeout(() => {
      setShowCopiedAlert(false);
    }, 2200);
  };

  // Helper to copy text to clipboard
  const copyToClipboard = (text: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    triggerAlert("تم نسخ الرابط بنجاح! 📋");
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // App Sharing option
  const shareApp = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    triggerAlert("تم نسخ رابط الدليل لمشاركته! 🔗");
  };

  // Get active rendering level data
  const currentLevelData = LEVELS_DATA.find((l) => l.number === activeLevel) || LEVELS_DATA[0];

  // Retrieve all bookmarked links object list
  const getBookmarkedLinks = (): { item: LinkItem; source: string }[] => {
    const list: { item: LinkItem; source: string }[] = [];

    // Search college
    COLLEGE_LINKS.forEach((link) => {
      if (favorites.includes(link.id)) {
        list.push({ item: link, source: "روابط الكلية العامة" });
      }
    });

    // Search levels
    LEVELS_DATA.forEach((lvl) => {
      lvl.sections.forEach((sec) => {
        sec.links.forEach((link) => {
          if (favorites.includes(link.id)) {
            list.push({
              item: link,
              source: `${lvl.name} • ${sec.title}`,
            });
          }
        });
      });
    });

    return list;
  };

  const bookmarkedItems = getBookmarkedLinks();

  // Helper to render correct icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case "MessageSquare":
        return <Users className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />;
      case "Bookmark":
        return <BookOpen className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />;
      case "Users":
        return <Users className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case "Network":
        return <Network className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />;
      case "School":
        return <School className="w-5 h-5 text-sky-400" />;
      case "Star":
        return <Star className="w-5 h-5 text-amber-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-sky-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  // Arabic numbers level quick translation
  const getLevelArabicWord = (lvl: number) => {
    const words = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن"];
    return words[lvl - 1] || lvl.toString();
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative overflow-x-hidden bg-[#030712] selection:bg-sky-500/30 selection:text-sky-200" dir="rtl">
      
      {/* Premium background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Decorative top tech lines */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent absolute top-0" />

      {/* Header Container */}
      <header className="max-w-4xl w-full mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white glow-text-blue"
        >
          دليل <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 via-sky-300 to-teal-300">الحاسب</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-lg mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          منصة سريعة ومنظمة للوصول إلى كافة المجموعات والقنوات الدراسية والمبادرات الطلابية بكلية الحاسب.
        </motion.p>
      </header>

      {/* Main Panel */}
      <main className="max-w-3xl w-full mx-auto px-4 flex-1 z-10 pb-24">
        
        {/* Translucent Banner Alerts */}
        <AnimatePresence>
          {showCopiedAlert && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-sky-500/90 text-white text-center font-bold py-3 px-6 rounded-xl shadow-lg shadow-sky-950/40 mb-6 backdrop-blur-md flex items-center justify-center gap-2 text-sm max-w-md mx-auto relative overflow-hidden"
            >
              <div className="w-1.5 h-full bg-teal-300 absolute left-0 top-0 animate-pulse" />
              <span>{alertText}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Favorites Section (Conditionally Rendered) */}
        <AnimatePresence>
          {bookmarkedItems.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 animate-pulse" />
                  <h2 className="text-base font-bold text-slate-100">📌 مفضلتك السريعة ({bookmarkedItems.length})</h2>
                </div>
                <button
                  onClick={() => {
                    setFavorites([]);
                    localStorage.removeItem("qd_favorites");
                    triggerAlert("تم تفريغ المفضلة");
                  }}
                  className="text-xs text-rose-400/80 hover:text-rose-400 transition-colors cursor-pointer hover:underline"
                >
                  إزالة الكل
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bookmarkedItems.map(({ item, source }) => (
                  <motion.div
                    key={`fav-${item.id}`}
                    layoutId={`fav-item-${item.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="glass-card glass-card-hover rounded-xl p-4.5 flex items-center justify-between group transition-all cursor-pointer"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center gap-3"
                    >
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-sky-500/20 group-hover:bg-slate-800 transition-colors">
                        {renderIcon(item.iconName)}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white text-sm group-hover:text-sky-300 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {source}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-1">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-amber-400 hover:text-rose-400 transition-colors cursor-pointer"
                        title="إزالة من المفضلة"
                      >
                        <BookmarkMinus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* NORMAL CATEGORY TABBED VIEW */}
        <div className="relative">
              {/* Animated Switcher Tab selector */}
              <div className="flex bg-slate-900/90 border border-slate-800 p-1.5 rounded-full mt-6 md:mt-12 mb-10 max-w-sm mx-auto shadow-lg">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMainTab("college")}
                  className={`flex-1 text-center py-2.5 px-6 rounded-full text-sm font-semibold transition-all relative cursor-pointer ${
                    activeMainTab === "college"
                      ? "text-slate-900"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {activeMainTab === "college" && (
                    <motion.div
                      layoutId="mainTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    <School className="w-4 h-4" />
                    الكلية
                  </span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMainTab("levels")}
                  className={`flex-1 text-center py-2.5 px-6 rounded-full text-sm font-semibold transition-all relative cursor-pointer ${
                    activeMainTab === "levels"
                      ? "text-slate-900"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {activeMainTab === "levels" && (
                    <motion.div
                      layoutId="mainTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    المستويات
                  </span>
                </motion.button>
              </div>

              {/* Tab Contents */}
              <AnimatePresence mode="wait">
                {activeMainTab === "college" ? (
                  /* COLLEGE PORTAL LINKS */
                  <motion.div
                    key="tab-college"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl p-6 glow-box-blue"
                  >
                    <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4 mb-5">
                      <div className="p-3 bg-sky-500/10 rounded-xl border border-sky-500/20">
                        <School className="w-5 h-5 text-sky-400" />
                      </div>
                      <div className="text-right">
                        <h2 className="text-lg font-bold text-white">المجموعات العامة</h2>
                        <p className="text-xs text-slate-400 mt-0.5">القنوات المعتمدة والمناقشات لحاسب جامعة القصيم</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* First two links */}
                      <div className="space-y-3">
                        {COLLEGE_LINKS.filter((link) => ["col-1", "col-2"].includes(link.id)).map((link) => (
                          <motion.div
                            key={link.id}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-sky-500/25 group transition-all duration-300"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center gap-3"
                            >
                              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-sky-500/20 group-hover:bg-slate-800 transition-colors">
                                {renderIcon(link.iconName)}
                              </div>
                              <div className="text-right">
                                <span className="block font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                                  {link.name}
                                </span>
                              </div>
                            </a>

                            <div className="flex items-center gap-3">
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                onClick={(e) => toggleFavorite(link.id, e)}
                                className="p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                                title="إضافة للمفضلة"
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.includes(link.id)
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-slate-400 hover:text-amber-400"
                                  }`}
                                />
                              </motion.button>

                              <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:translate-x-[-4px] transition-transform" />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Header for Hawsib */}
                      <div className="flex items-center gap-2 text-white text-xs font-bold tracking-wider uppercase bg-white/5 px-2.5 py-1 rounded-md w-max border border-white/10 mt-6 mb-1">
                        <Laptop className="w-3.5 h-3.5 text-white/95" />
                        <span>حوسب</span>
                      </div>

                      {/* Hawsib Links */}
                      <div className="space-y-3">
                        {COLLEGE_LINKS.filter((link) => ["col-3", "col-4"].includes(link.id)).map((link) => (
                          <motion.div
                            key={link.id}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-sky-500/25 group transition-all duration-300"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center gap-3"
                            >
                              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-sky-500/20 group-hover:bg-slate-800 transition-colors">
                                {renderIcon(link.iconName)}
                              </div>
                              <div className="text-right">
                                <span className="block font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                                  {link.name}
                                </span>
                              </div>
                            </a>

                            <div className="flex items-center gap-3">
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                onClick={(e) => toggleFavorite(link.id, e)}
                                className="p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                                title="إضافة للمفضلة"
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.includes(link.id)
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-slate-400 hover:text-amber-400"
                                  }`}
                                />
                              </motion.button>

                              <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:translate-x-[-4px] transition-transform" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* LEVELS SECTIONS EXPLORER */
                  <motion.div
                    key="tab-levels"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
                      {LEVELS_DATA.map((lvl) => (
                        <motion.button
                          key={lvl.number}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.90 }}
                          onClick={() => setActiveLevel(lvl.number)}
                          className={`py-2 px-2.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer text-center ${
                            activeLevel === lvl.number
                              ? "bg-sky-500/15 border-sky-400/80 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.1)] font-bold"
                              : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900"
                          }`}
                        >
                          <span className="block text-[9px] text-slate-500 font-normal leading-tight">المستوى</span>
                          <span className="leading-tight">{getLevelArabicWord(lvl.number)}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Active Selected Level Card with custom layout transition */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeLevel}
                        initial={{ opacity: 0, scale: 0.98, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="glass-card rounded-2xl p-6 glow-box-blue"
                      >
                        <div className="space-y-6">
                          {currentLevelData.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-2.5">
                              <div className="flex items-center gap-2 text-white text-xs font-bold tracking-wider uppercase bg-white/5 px-2.5 py-1 rounded-md w-max border border-white/10">
                                {renderIcon(section.icon)}
                                <span className="text-white">{section.title}</span>
                              </div>

                              <div className="space-y-2.5">
                                {section.links.map((link) => (
                                  <motion.div
                                    key={link.id}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-sky-500/25 group transition-all duration-300"
                                  >
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 flex items-center gap-3"
                                    >
                                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-sky-500/20 group-hover:bg-slate-800 transition-colors">
                                        {renderIcon(link.iconName)}
                                      </div>
                                      <div className="text-right">
                                        <span className="block font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                                          {link.name}
                                        </span>
                                      </div>
                                    </a>

                                    <div className="flex items-center gap-3">
                                      <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        onClick={(e) => toggleFavorite(link.id, e)}
                                        className="p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                                        title="إضافة للمفضلة"
                                      >
                                        <Star
                                          className={`w-4 h-4 ${
                                            favorites.includes(link.id)
                                              ? "fill-amber-400 text-amber-400"
                                              : "text-slate-400 hover:text-amber-400"
                                          }`}
                                        />
                                      </motion.button>

                                      <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:translate-x-[-4px] transition-transform" />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
      </main>

      {/* Futuristic Fixed Footer */}
      <footer className="w-full bg-[#030712]/90 border-t border-slate-900 backdrop-blur-md py-4 px-6 fixed bottom-0 left-0 flex flex-row items-center justify-between z-40 max-w-none shadow-2xl">
        {/* Right side (أقصى اليمين) - Telegram Icon */}
        <div className="z-10 flex items-center">
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.90 }}
            href="https://t.me/Sherisherre"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/20 transition-all shadow-sm flex items-center justify-center cursor-pointer"
            title="تليجرام"
          >
            <TelegramIcon className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Left side (أقصى اليسار) - Developed by Sherisherre */}
        <div className="text-slate-400 text-xs sm:text-sm font-medium z-10 flex items-center gap-1.5">
          <span>Developed by Sherisherre </span>
        </div>
      </footer>
    </div>
  );
}

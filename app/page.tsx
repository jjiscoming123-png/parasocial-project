"use client";

import Logo from "@/components/Logo";

const NOTIFICATIONS = [
  { user: "Your favorite streamer", action: "went live", time: "2m ago", read: false },
  { user: "That podcast host", action: "posted a story", time: "14m ago", read: false },
  { user: "The influencer you DM'd", action: "was active 3m ago", time: "1h ago", read: true },
  { user: "The creator you donated $500 to", action: "thanked 'everyone'", time: "3h ago", read: true },
  { user: "Your parasocial best friend", action: "doesn't know your name", time: "always", read: true },
];

const MANIFESTO = [
  {
    num: "01",
    title: "You know their coffee order",
    text: "You know what time they wake up, their dog's name, their take on the market. They have never heard your voice. This is not a relationship. This is a one-way mirror.",
  },
  {
    num: "02",
    title: "The algorithm sold you a friend",
    text: "Platforms are loneliness machines that monetize the gap between connection and the illusion of connection. Every notification is a hit. Every 'like' is a transaction.",
  },
  {
    num: "03",
    title: "Your attention is their income",
    text: "You are not a fan. You are not a supporter. You are a revenue stream with a profile picture. The parasocial economy runs on your unreciprocated emotional investment.",
  },
  {
    num: "04",
    title: "The cure is awareness",
    text: "We are not here to shame you. We are here to name it. Once you see the pattern, you can't unsee it. PARASOCIAL is the mirror the feed doesn't want you to look into.",
  },
];

const STATS = [
  { label: "Hours you watched them", value: "2,847" },
  { label: "Times they saw your comment", value: "0" },
  { label: "Messages you sent", value: "342" },
  { label: "Messages they read", value: "0" },
];

export default function Home() {
  return (
    <>
      <div className="grain" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#12121f]/80 border-b border-[#ff6b9d]/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-semibold text-sm text-[#ff6b9d]/80 tracking-wide">PARASOCIAL</span>
          </div>
          <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-1.5 border border-[#ff6b9d]/30 text-[#ff6b9d]/80 rounded-full hover:bg-[#ff6b9d]/10 transition-all">
            Follow
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-up fade-up-1 mb-6">
            <Logo size={64} className="mx-auto" />
          </div>
          <p className="fade-up fade-up-1 text-[#ff6b9d]/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            The Parasocial Protocol
          </p>
          <h1 className="fade-up fade-up-2 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="text-white">They don&apos;t know</span>
            <br />
            <span className="text-[#ff6b9d]">you exist</span>
          </h1>
          <p className="fade-up fade-up-3 text-lg text-[#b0b0c0] max-w-lg mx-auto leading-relaxed mb-10">
            You watched every stream. Liked every post. Sent every super chat.
            <br />
            They have never said your name.
          </p>
          <div className="fade-up fade-up-4">
            <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#ff6b9d] text-white font-semibold rounded-full hover:bg-[#ff6b9d]/90 transition-all text-sm">
              Break the Illusion →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-16" />
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight">
            Your Relationship In Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="notif-card rounded-lg p-5 text-center">
                <div className="text-2xl font-black text-[#ff6b9d] mb-2">{s.value}</div>
                <div className="text-xs text-[#b0b0c0]/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="section-divider mb-16" />
          <p className="text-center text-[#ff6b9d]/40 text-xs tracking-[0.3em] uppercase mb-4">Notifications</p>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight">
            The Feed That Feeds On You
          </h2>
          <div className="space-y-3">
            {NOTIFICATIONS.map((n, i) => (
              <div key={i} className={`notif-card rounded-lg px-5 py-4 glitch-hover ${!n.read ? 'border-l-[#ff6b9d]' : 'border-l-[#ff6b9d]/30'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-white font-medium">{n.user}</span>
                    <span className="text-sm text-[#b0b0c0]/60"> {n.action}</span>
                  </div>
                  <span className="text-xs text-[#b0b0c0]/30">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />
          <p className="text-center text-[#ff6b9d]/40 text-xs tracking-[0.3em] uppercase mb-4">The Manifesto</p>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-16 tracking-tight">
            Why PARASOCIAL Exists
          </h2>
          <div className="space-y-12">
            {MANIFESTO.map((m) => (
              <div key={m.num} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-[#ff6b9d]/20 text-xs font-bold mt-1 shrink-0">{m.num}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ff6b9d] transition-colors">{m.title}</h3>
                    <p className="text-sm text-[#b0b0c0] leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-divider mb-16" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Stop watching. <span className="text-[#ff6b9d]">Start seeing.</span>
          </h2>
          <p className="text-sm text-[#b0b0c0] mb-10">The first step is admitting the connection was never real.</p>
          <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 bg-[#ff6b9d] text-white font-semibold rounded-full hover:bg-[#ff6b9d]/90 transition-all text-sm">
            Join the Protocol →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ff6b9d]/10 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={18} />
            <span className="text-xs text-[#ff6b9d]/30">PARASOCIAL</span>
          </div>
          <p className="text-[10px] text-[#b0b0c0]/20">They still don&apos;t know you exist.</p>
          <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#b0b0c0]/30 hover:text-[#ff6b9d] transition-colors">𝕏</a>
        </div>
      </footer>
    </>
  );
}

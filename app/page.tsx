"use client";

import Logo from "@/components/Logo";

const DM_HISTORY = [
  { sent: "omg i love your content so much", reply: null },
  { sent: "this video literally changed my life", reply: null },
  { sent: "hey i know you probably won't see this but", reply: null },
  { sent: "happy birthday!! 🎂🎉", reply: null },
  { sent: "just donated $50 on your stream!", reply: null },
];

const NOTIFICATIONS = [
  { who: "Your favorite streamer", did: "went live", when: "2m ago", unread: true },
  { who: "That podcast host", did: "posted a story", when: "14m ago", unread: true },
  { who: "The influencer you DM'd", did: "was active 3m ago", when: "1h ago", unread: false },
  { who: "Creator you donated $500 to", did: "thanked 'everyone'", when: "3h ago", unread: false },
  { who: "Your parasocial best friend", did: "doesn't know your name", when: "always", unread: false },
];

export default function Page() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] font-semibold tracking-wide text-[var(--color-pink)]/60">PARASOCIAL</span>
        </div>
        <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-semibold text-white bg-[var(--color-pink)] px-4 py-1.5 rounded-full hover:bg-[var(--color-pink-dim)] transition-colors">
          Follow
        </a>
      </nav>

      {/* ── HERO: Fake DM conversation ── */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-16 relative">
        {/* Ambient pink glow */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[var(--color-pink)]/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-md w-full">
          <p className="text-[10px] text-[var(--color-pink)]/40 tracking-[0.3em] uppercase mb-6 text-center anim-up d1">The Parasocial Protocol</p>
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4 anim-up d2 leading-tight">
            <span className="text-white">They don&apos;t know</span><br />
            <span className="text-[var(--color-pink)]">you exist.</span>
          </h1>
          <p className="text-center text-sm text-[var(--color-muted)] mb-10 anim-up d3">
            Your messages. Your donations. Your loyalty.<br />They never saw any of it.
          </p>

          {/* DM Mock */}
          <div className="anim-up d4 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-5 space-y-3">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--color-pink)]/10 flex items-center justify-center text-[var(--color-pink)] text-xs">★</div>
              <div>
                <p className="text-xs text-white font-semibold">Your Favorite Creator</p>
                <p className="text-[10px] text-[var(--color-muted)]">Last active 3m ago</p>
              </div>
            </div>
            {DM_HISTORY.map((dm, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-end">
                  <div className="bubble-sent">{dm.sent}</div>
                </div>
                <div className="flex justify-start">
                  <div className="bubble-empty">Seen</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR RELATIONSHIP IN NUMBERS ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] text-[var(--color-pink)]/40 tracking-[0.3em] uppercase mb-8 text-center">Your Relationship in Numbers</p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "2,847", l: "Hours you watched them" },
              { n: "0", l: "Times they saw your comment" },
              { n: "342", l: "Messages you sent" },
              { n: "0", l: "Messages they read" },
            ].map((s, i) => (
              <div key={i} className="notif text-center py-5 glitch">
                <div className={`counter ${s.n === '0' ? 'text-[var(--color-pink)]' : 'text-white'}`}>{s.n}</div>
                <p className="counter-label">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTIFICATIONS ── */}
      <section className="py-16 md:py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] text-[var(--color-pink)]/40 tracking-[0.3em] uppercase mb-3">Notifications</p>
          <h2 className="text-2xl font-bold text-white mb-8">The Feed That Feeds On You</h2>
          <div className="space-y-2">
            {NOTIFICATIONS.map((n, i) => (
              <div key={i} className={`notif glitch ${n.unread ? 'unread' : ''}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-white font-medium">{n.who}</span>
                    <span className="text-sm text-[var(--color-muted)]"> {n.did}</span>
                  </div>
                  <span className="text-[10px] text-[var(--color-muted)]">{n.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TRUTH ── */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <p className="text-[10px] text-[var(--color-pink)]/40 tracking-[0.3em] uppercase mb-3">The Truth</p>
            <h2 className="text-2xl font-bold text-white">How You Got Here</h2>
          </div>
          {[
            { t: "You know their coffee order.", d: "You know what time they wake up, their dog's name, their take on crypto. They have never heard your voice. This is not a relationship. This is surveillance you pay for with attention." },
            { t: "The algorithm sold you a friend.", d: "Every notification is a hit. Every like is a transaction. Platforms are loneliness machines that monetize the gap between connection and the illusion of connection." },
            { t: "Your attention is their revenue.", d: "You are not a fan. You are not a supporter. You are a revenue stream with a profile picture and a recurring donation habit." },
            { t: "Naming it is the first step.", d: "PARASOCIAL doesn't cure the longing. It names it. Once you see the one-way mirror, you can't unsee it. And that's the whole point." },
          ].map((item, i) => (
            <div key={i} className="group pl-5 border-l-2 border-[var(--color-pink)]/10 hover:border-[var(--color-pink)]/40 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-pink)] transition-colors">{item.t}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-border)] text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,157,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-3">
            Stop watching.<br />
            <span className="text-[var(--color-pink)]">Start seeing.</span>
          </h2>
          <p className="text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
            The first step is admitting the connection was never real. The second is finding real ones.
          </p>
          <a href="https://x.com/ParasocialCoin" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[var(--color-pink)] px-6 py-3 rounded-full hover:bg-[var(--color-pink-dim)] transition-colors">
            <span>𝕏</span> Follow
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={14} />
          <span className="text-[9px] text-[var(--color-pink)]/30">PARASOCIAL</span>
        </div>
        <p className="text-[9px] text-[var(--color-muted)]/40">They still don&apos;t know you exist.</p>
      </footer>
    </>
  );
}

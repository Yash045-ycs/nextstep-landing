// app/page.tsx
"use client";

import { useEffect } from "react";

export default function HomePage() {
  // Scroll reveal logic for .scroll-fade elements
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/80 border-b border-slate-200/60 backdrop-blur-xl transition animate-[slideInBlur_0.8s_ease-out_0.2s_forwards] translate-y-[-20px] blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-4 flex items-center justify-between pb-4">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
  <div className="h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 bg-white">
    <img
      src="/logo-nextstep.png"     // 👈 same name you put in public/
      alt="NextStep logo"
      className="h-10 w-10 object-contain"
    />
  </div>
  <span className="text-xl font-bold tracking-tight text-slate-900">
    NextStep
  </span>
</a>

            {/* Center pill nav */}
            <nav className="hidden md:flex items-center px-2 py-1 bg-slate-100/80 border border-slate-200 rounded-full gap-1">
              <a
                href="#problem"
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition"
              >
                Why Us
              </a>
              <a
                href="#services"
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition"
              >
                Pricing
              </a>
            </nav>

            {/* Right CTA */}
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
            >
              Book Counselling
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="relative">
        <section className="max-w-7xl mx-auto pt-40 pb-24 px-6 md:pt-48 md:pb-32">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo above "Trusted by 500+ Students" */}
<div className="relative mb-8">
  <div className="relative flex items-center justify-center">
    <img
      src="/logo.jpeg"           // exact name in /public
      alt="NextStep – Your College Compass"
      className="h-52 w-auto object-contain"  // BIG: ~128px high
    />
  </div>
</div>



            {/* Eyebrow */}
            <div className="mb-6 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_0.8s_forwards]">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_0_2px_rgba(59,130,246,0.2)] animate-pulse" />
                Trusted by 500+ Students
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[0.95] text-slate-900 opacity-0 translate-y-8 blur-sm animate-[slideInBlur_1s_ease-out_1s_forwards]">
              <span className="block">Right Rank.</span>
              <span className="block">Right College.</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal opacity-0 translate-y-6 blur-sm animate-[slideInBlur_0.8s_ease-out_1.2s_forwards]">
              CET, JEE, NEET ke baad confusion? Hum samajhte hain. NextStep
              helps you find the best college for your rank, budget, and career
              goals — clearly and honestly.
            </p>

            {/* Hero CTAs */}
            <div className="pt-8 pb-8 flex flex-col sm:flex-row items-center gap-4 opacity-0 translate-y-6 blur-sm animate-[slideInBlur_0.8s_ease-out_1.2s_forwards]">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-transform duration-150 ease-out active:scale-[0.98]"
              >
                Attend Free Webinar
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-transform duration-150 ease-out active:scale-[0.98]"
              >
                Book 1-1 Counselling
              </a>
            </div>

            {/* Hero stats row (matches screenshot top of problem section) */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-slate-500 opacity-0 translate-y-4 blur-sm animate-[slideInBlur_0.8s_ease-out_1.6s_forwards]">
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  500+
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest">
                  Students Guided
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  Engg + Med
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest">
                  Both Streams
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  MH + All India
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest">
                  Wide Coverage
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight text-slate-900">
                  No Commission
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest">
                  Honest Guidance
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* EXAMS MARQUEE (CSS-based, same as old project) */}
<section className="w-full border-y border-slate-200 bg-slate-50/70 mt-8">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
    <span className="hidden md:inline-flex items-center rounded-full bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1">
      Exams Covered
    </span>

    <div className="skills-marquee flex-1">
      <div className="skills-track">
        <span>MHT-CET</span>
        <span>JEE Main</span>
        <span>JEE Advanced</span>
        <span>NEET UG</span>
        <span>COMEDK</span>
        <span>BITSAT</span>
        <span>VITEEE</span>
        <span>SRMJEEE</span>
        <span>KCET</span>
        <span>WBJEE</span>
        <span>MIT</span>

        {/* duplicate list for seamless loop */}
        <span>MHT-CET</span>
        <span>JEE Main</span>
        <span>JEE Advanced</span>
        <span>NEET UG</span>
        <span>COMEDK</span>
        <span>BITSAT</span>
        <span>VITEEE</span>
        <span>SRMJEEE</span>
        <span>KCET</span>
        <span>WBJEE</span>
        <span>MIT</span>
      </div>
    </div>
  </div>
</section>


      {/* PROBLEM SECTION */}
      <section
        id="problem"
        className="w-full max-w-7xl mx-auto px-6 pt-16 pb-20 scroll-fade"
      >
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            The Problem We Solve
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900">
            After Exams,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 italic">
              Confusion Begins.
            </span>
          </h2>
          <p className="mt-4 md:text-lg text-slate-600 leading-relaxed">
            You have a rank, but which college is right? Too many options, no
            clarity, and stressed families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Four cards */}
          <ProblemCard
            title="Too Many Colleges, No Clarity"
            description="Hundreds of options but no way to filter what's realistic for your rank and budget."
          />
          <ProblemCard
            title="Rank vs Reality Mismatch"
            description="Last year's cutoffs don't tell the full story. What's actually possible this year?"
          />
          <ProblemCard
            title="Confusing Cutoffs & Options"
            description="CAP rounds, domicile rules, category-wise seats — it's overwhelming."
          />
          <ProblemCard
            title="Parents & Students Stressed"
            description="One wrong choice can mean wasted years or money. The pressure is real."
          />
        </div>
      </section>

      {/* SOLUTION / FEATURES */}
      <section
        id="services"
        className="w-full max-w-7xl mx-auto px-6 py-20 scroll-fade scroll-fade-delay"
      >
        <div className="flex items-center justify-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            Your College Compass
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900">
            How NextStep{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 italic">
              Helps You
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            }
            title="Seat Sorting"
            description="Filter colleges by your exact rank, branch, and category. No guessing."
          />
          <FeatureCard
            icon={<circle cx="11" cy="11" r="8" />}
            extraIcon={
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            }
            title="Smart College Search"
            description="Search by fees, location, placements, and facilities. Find your fit."
          />
          <FeatureCard
            icon={
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            }
            title="Expert Guidance"
            description="Honest advice with no college commissions. We work for you, not them."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 scroll-fade scroll-fade-delay-2">
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            Simple Process
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900">
            How It{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 italic">
              Works
            </span>
          </h2>
          <p className="mt-4 md:text-lg text-slate-600 leading-relaxed">
            Four simple steps from confusion to confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Orbital visual */}
          <div className="relative flex items-center justify-center min-h-[400px] scroll-fade scroll-fade-delay-2">
            <div className="relative pointer-events-none flex items-center justify-center scale-90 md:scale-100">
              <div className="absolute h-[340px] w-[340px] rounded-full border border-slate-200 animate-pulse" />
              <div className="absolute h-[240px] w-[240px] rounded-full border border-slate-300 animate-pulse" />
              <div className="absolute h-[140px] w-[140px] rounded-full border border-blue-200 animate-pulse" />

              <div className="relative z-10 h-20 w-20 rounded-full border border-blue-300 bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] p-5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Orbiting numbers */}
              <div className="absolute h-[240px] w-[240px] animate-[spin_12s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
              </div>
              <div className="absolute h-[240px] w-[240px] animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-0 h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
              </div>
              <div className="absolute h-[240px] w-[240px] animate-[spin_10s_linear_infinite]">
                <div className="absolute bottom-0 right-0 h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
              </div>
              <div className="absolute h-[240px] w-[240px] animate-[spin_18s_linear_infinite_reverse]">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps list */}
          <div className="space-y-6 scroll-fade scroll-fade-delay-3">
            <Step
              number="1"
              title="Share Exam Details"
              text="Tell us your rank, exam (CET/JEE/NEET), category, and preferences."
            />
            <Step
              number="2"
              title="Get Shortlisted Colleges"
              text="We filter and shortlist realistic options based on your profile."
            />
            <Step
              number="3"
              title="Attend Counselling or Webinar"
              text="Join our expert session to understand your options clearly."
            />
            <Step
              number="4"
              title="Take the Next Step Confidently"
              text="Make an informed choice and start your college journey stress-free."
            />
          </div>
        </div>
      </section>

      {/* PRICING (Choose Your Plan) */}
<section
  id="pricing"
  className="w-full max-w-7xl mx-auto px-6 py-20 scroll-fade scroll-fade-delay-3"
>
  <div className="flex items-center justify-center">
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
      ₹ Transparent Pricing
    </span>
  </div>

  <div className="max-w-3xl mx-auto text-center mt-6 mb-16">
    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900">
      Choose Your{" "}
      <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700">
        Plan
      </span>
    </h2>
  </div>

  <div className="grid gap-8 lg:grid-cols-3">
    {/* Free Webinar */}
    <PlanCard
      title="Free Webinar"
      subtitle="Perfect for getting started"
      price="₹0"
      items={[
        "Understanding difference between top, mid-tier & emerging colleges",
        "How to plan admissions based on rank, budget & preferences",
        "LIVE Q&A session to clear doubts in real time",
        "Common mistakes students & parents should avoid",
        "Engineering & Medical admission pathways explained clearly",
      ]}
      buttonText="Register Free"
      buttonHref="https://calendly.com/nextstep295/30min"    // 👈 paste webinar link
    />

    {/* Group Counselling */}
    <PlanCard
      title="Group Counselling"
      subtitle="Small group, focused guidance"
      price="₹999"
      items={[
        "Group of 4 students max",
        "Rank-based college list",
        "Weekly meetings scheduled ",
        "Seat selection priority based on minority/caste/economic status",
        "Parent-friendly explanations (no technical jargon)",
        "Group discussion on safe & aspirational college options",
        "Highlighting & resolving frequent mistakes in group",
      ]}
      buttonText="Book Group Session"
      buttonHref="https://form.jotform.com/260094307347052" // 👈 paste group link
    />

    {/* 1-1 Counselling highlighted */}
    <div className="relative w-full h-fit overflow-hidden rounded-3xl border border-blue-500 bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg ring-2 ring-blue-400/20">
      <div className="absolute top-4 right-4">
        <span className="inline-block rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Most Effective
        </span>
      </div>
      <div className="p-8 text-white">
        <h3 className="text-xl font-bold tracking-tight">1-1 Counselling</h3>
        <p className="mt-2 text-sm text-blue-100">Personalized expert guidance</p>
        <div className="mt-6 mb-8 flex items-baseline gap-3">
  {/* Original price with strike-through */}
  <span className="text-lg text-blue-100/80 line-through">
    ₹2,399
  </span>

  {/* Discounted price */}
  <span className="text-4xl font-bold text-white">
    ₹1,199
  </span>

  <span className="text-xs font-semibold text-blue-50 uppercase tracking-wide">
    50% Off
  </span>
</div>

        <div className="space-y-4 text-sm">
          <HighlightItem text="Personal mentor dedicated to you" />
          <HighlightItem text="Custom shortlist for your profile" />
          <HighlightItem text="Seat filling strategy & CAP guidance" />
          <HighlightItem text="Form filling & choice guidance" />
          <HighlightItem text="Seat selection priority based on minority/caste/economic status" />
          <HighlightItem text="Individual seat allocation" />
          <HighlightItem text="Detailed college & branch strategy" />
          <HighlightItem text="LIVE Video call session with students from your target college" />
          <HighlightItem text="Backup pathways explained to avoid last-minute panic" />
        </div>
        <a
          href="https://form.jotform.com/260094763374058"   // 👈 paste 1‑1 link
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-blue-50 transition"
        >
          Book 1-1 Session
        </a>
      </div>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            {/* Brand block */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center">
                  <img
      src="/logo-nextstep.png"     // 👈 same name you put in public/
      alt="NextStep logo"
      className="h-10 w-10 object-contain"
    />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  NextStep
                </span>
              </div>
              <p className="max-w-sm text-sm text-slate-600 leading-relaxed">
                Helping students find the right college for their rank, budget,
                and career goals. Honest guidance, no commissions.
              </p>
            </div>
            </div>

            {/* footer links */}
<div className="grid grid-cols-2 gap-12 text-sm text-slate-600">
  {/* Left: nav links (unchanged) */}
  <div className="space-y-3">
    <a
      href="#problem"
      className="block hover:text-slate-900 transition-colors"
    >
      <b>Why NextStep</b>
    </a>
    <a
      href="#services"
      className="block hover:text-slate-900 transition-colors"
    >
      <b>Features</b>
    </a>
    <a
      href="#pricing"
      className="block hover:text-slate-900 transition-colors"
    >
      <b>Pricing</b>
    </a>
  </div>

  {/* Right: contact details with icons (plain text) */}
  <div className="space-y-2 text-right md:text-left">
    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
      <b>Contact Us</b>
    </h4>

    {/* Email */}
    <div className="flex items-center justify-end md:justify-start gap-2">
      <svg
        className="h-4 w-4 text-slate-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
      <span>nextstep295@gmail.com</span> {/* your email */}
    </div>

    {/* Phone */}
    <div className="flex items-center justify-end md:justify-start gap-2">
      <svg
        className="h-4 w-4 text-slate-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.22 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.77.72 2.6a2 2 0 0 1-.45 2.11L8.1 9.82a16 16 0 0 0 6 6l1.39-1.39a2 2 0 0 1 2.11-.45c.83.35 1.7.6 2.6.72A2 2 0 0 1 22 16.92z" />
      </svg>
      <span>+91 86573 46224</span> {/* your phone */}
    </div>
  </div>
</div>



          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2026 NextStep. All rights reserved.</p>
            <p>Made with care for students and parents in India.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* SMALL COMPONENTS */

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-white/80 p-8 min-h-[18rem] hover:bg-white hover:ring-slate-300 transition-all backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent" />
      <div className="relative z-10">
        <div className="mb-6 h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center ring-1 ring-blue-200/50">
          {/* simple icon placeholder */}
          <span className="text-lg font-bold">✕</span>
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

function FeatureCard({
  icon,
  extraIcon,
  title,
  description,
}: {
  icon: React.ReactNode;
  extraIcon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white/80 p-6 hover:bg-white transition-all backdrop-blur-sm">
      <div className="mb-4 h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center ring-1 ring-blue-500/20 shadow-lg shadow-blue-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
          {extraIcon}
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </article>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg font-bold">
        {number}
      </div>
      <div>
        <h4 className="mb-1 text-lg font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  subtitle,
  price,
  items,
  buttonText,
  buttonHref,
}: {
  title: string;
  subtitle: string;
  price: string;
  items: string[];
  buttonText: string;
  buttonHref?: string;    // optional so it doesn't error
}) {
  const href = buttonHref ?? "#";

  return (
    <div className="relative w-full h-fit overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
      <div className="p-8">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        <div className="mt-6 mb-8 flex items-baseline gap-3">
  {/* Original price with strike-through (50% off example) */}
  {price !== "₹0" && (
    <span className="text-lg text-slate-400 line-through">
      {price === "₹999" ? "₹1,999" : "₹2,399"}
    </span>
  )}
  {/* Discounted price */}
  <span className="text-4xl font-bold text-slate-900">{price}</span>
  {price !== "₹0" && (
    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
      50% Off
    </span>
  )}
</div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <a
          href={href}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}


function HighlightItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg
        className="mt-0.5 h-5 w-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Mail,
  MousePointerClick,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

const LANDING_URL = "https://park-x-landing-page.vercel.app/";

const stats = [
  ["14", "email sign-ups", "Formspree"],
  ["15", "active users, last 30 days", "PostHog"],
  ["20", "sessions, last 7 days", "PostHog"],
  ["30", "pageviews, last 7 days", "PostHog"],
];

const pageSections = [
  ["Hero", "Two entry points: “Find your spot” for drivers and “I have a space” for owners."],
  ["How it works", "The booking flow in a few short steps."],
  ["Why ParkX", "The story behind the idea, built on our discovery research."],
  ["For owners", "Pitch for people with an unused spot, with a “List your space” button."],
  ["Join the waitlist", "A single email field. Every submission is tagged with its source (parkx-landing-page)."],
];

const events = [
  ["$pageview", "Every page load", "Counts visitors and shows where they come from."],
  [
    "cta_clicked",
    "Any call-to-action button, with a location property (nav, hero, owners)",
    "Shows which placement of the button gets used.",
  ],
  [
    "waitlist_form_started",
    "First click into the email field",
    "Separates people who were interested from people who actually started.",
  ],
  ["waitlist_submitted", "The form is sent successfully", "The conversion we care about."],
];

const automaticTracking = [
  "Autocapture of clicks and form changes, so we can see which links and menu items are used.",
  "Page-leave events with scroll depth, to see how far down the page people read.",
  "Web vitals (loading speed) per device.",
  "Session replay, to watch how real visits unfold.",
];

const funnel = [
  ["Pageview", "18", "100%"],
  ["cta_clicked", "7", "38.9%"],
  ["waitlist_form_started", "3", "16.7%"],
  ["waitlist_submitted", "1", "5.6%"],
];

const findings = [
  {
    title: "The first click is where most visitors leave",
    text: "11 of 18 visitors (61%) never pressed a call-to-action. Of the 7 who did, 3 started the form and 1 finished it. With so few visitors each person moves the rate by about 5 points, so we read these numbers as a direction, not as a benchmark.",
  },
  {
    title: "Drivers and owners sign up through the same form",
    text: "The form collects only an email address. Both the driver buttons (“Find your spot”) and the owner buttons (“I have a space”, “List your space”) lead to it, so we cannot tell which side a lead belongs to. Owners are the scarcer side (Milestone 4), so this matters.",
  },
  {
    title: "Mobile navigation is used a lot",
    text: "In the recorded mobile sessions the menu button is one of the most clicked elements, and the “Get early access” link lives inside that menu. On a phone the main call to action should be visible without opening anything.",
  },
  {
    title: "We cannot yet tell which channel brings people",
    text: "Almost every visit arrives as direct traffic and none of the visits carry UTM tags, so PostHog cannot attribute a visit to a post or group. This is fixed by using a different tagged link for every channel in the next round.",
  },
  {
    title: "One CTA is not tracked",
    text: "The “I have a space” link in the hero is captured only by autocapture, not as a cta_clicked event, so it is missing from the funnel. We will add the event.",
  },
  {
    title: "Loading speed on phones needs work",
    text: "On one Android phone the first content appeared after 2.9 s, which PostHog rates “needs improvement”. An iPhone on a good connection loaded in 0.9 s. We will compress images and defer non-critical scripts.",
  },
];

const nextSteps = [
  "Add a “I am a driver / I own a spot” choice to the form, so every lead is labelled.",
  "Create one tagged link per channel (for example ?utm_source=facebook-group) and publish a separate post for each, to compare channels fairly.",
  "Track the “I have a space” button as a cta_clicked event.",
  "Show the main call to action outside the mobile menu.",
  "Filter team traffic out of PostHog, so the funnel only counts real visitors.",
];

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-mint mt-[2px]">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Screenshot({ src, alt, caption }) {
  return (
    <figure>
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl bg-white p-2 border border-white/10 hover:border-mint/50 transition"
      >
        <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
      </a>
      <figcaption className="text-xs text-slate-500 mt-2">{caption}</figcaption>
    </figure>
  );
}

export default function Milestone5() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-140px] w-[520px] h-[520px] rounded-full bg-mint/10 blur-[110px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-14 md:pt-28 relative">
          <span className="pill">STARTUP ENGINEERING · MILESTONE 5</span>
          <h1 className="mt-7 text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Lead generation
            <br />
            <span className="text-mint">Do people want ParkX?</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            We built a landing page that collects emails for the waitlist,
            measured how visitors behave on it with PostHog, and used the
            results to decide what to fix before the next round of promotion.
          </p>
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-mint hover:underline"
          >
            Open the live landing page <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <nav
        aria-label="Milestone 5 sections"
        className="mx-auto max-w-6xl px-5 pb-10 flex gap-x-6 gap-y-3 flex-wrap text-sm text-slate-300"
      >
        {[
          ["m5-collection", "Lead collection"],
          ["m5-analytics", "Analytics setup"],
          ["m5-results", "Results"],
          ["m5-findings", "What the data shows"],
          ["m5-next", "Next steps"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="hover:text-mint transition">
            {label}
          </a>
        ))}
      </nav>

      <section className="pb-6">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(([value, label, source]) => (
            <div key={label} className="glass p-5">
              <div className="text-4xl font-bold text-mint">{value}</div>
              <div className="text-sm text-slate-200 mt-2">{label}</div>
              <div className="text-xs text-slate-500 mt-1">{source}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="m5-collection" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="01 / Lead collection"
            title="A landing page that asks for one thing"
            desc="The page explains ParkX to both sides of the market and ends with a short waitlist form. We ask only for an email address, to keep the effort for the visitor as low as possible."
          />
          <div className="grid lg:grid-cols-2 gap-5">
            <article className="glass p-7">
              <Mail className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-4">What the page contains</h3>
              <ul className="divide-y divide-white/5">
                {pageSections.map(([name, text]) => (
                  <li key={name} className="py-3 text-sm">
                    <span className="font-semibold text-white">{name}</span>
                    <span className="text-slate-400"> · {text}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass p-7">
              <Users className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-4">How leads are stored</h3>
              <BulletList
                items={[
                  "The form is handled by Formspree. Each submission arrives in a Formspree inbox with its date, email and a source tag.",
                  "14 people joined the waitlist between 24 and 25 November. 11 of them signed up between 16:00 and 18:25 on 25 November, which is when we started sharing the page.",
                  "The count includes at least one test submission made by the team.",
                  "Formspree is our source of truth for the number of leads. PostHog is used to understand behaviour.",
                ]}
              />
              <div className="mt-6 rounded-xl border border-mint/25 bg-mint/[.05] p-4 flex gap-3">
                <ShieldCheck size={18} className="text-mint shrink-0 mt-[2px]" />
                <p className="text-sm text-slate-200 leading-relaxed">
                  Email addresses belong to real people, so we do not publish
                  them here. Only counts and dates are shown.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="m5-analytics" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="02 / Analytics setup"
            title="Measuring the call to action"
            desc="PostHog is installed on the landing page for web analytics, product analytics and session replay. On top of the automatic tracking we added four named events, so the whole path from visit to sign-up can be drawn as a funnel."
          />
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
            <div className="glass overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[560px]">
                <thead className="text-slate-500 text-xs uppercase tracking-widest">
                  <tr className="border-b border-white/10">
                    <th className="p-4 font-bold">Event</th>
                    <th className="p-4 font-bold">When it fires</th>
                    <th className="p-4 font-bold">Why we track it</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(([name, when, why]) => (
                    <tr key={name} className="border-b border-white/5 last:border-0 align-top">
                      <td className="p-4 font-mono text-mint text-xs">{name}</td>
                      <td className="p-4 text-slate-300">{when}</td>
                      <td className="p-4 text-slate-400">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <article className="glass p-7">
              <Eye className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-4">Also tracked automatically</h3>
              <BulletList items={automaticTracking} />
            </article>
          </div>
        </div>
      </section>

      <section id="m5-results" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="03 / Results"
            title="From visit to sign-up"
            desc="Screenshots taken from PostHog on 25 November 2026. Click a screenshot to open it at full size."
          />
          <div className="space-y-6">
            <Screenshot
              src="/m5/posthog-dashboard.jpg"
              alt="PostHog dashboard: 15 active users in 30 days, 20 sessions and 30 pageviews in 7 days"
              caption="Web analytics: 15 active users (30 days), 20 sessions and 30 pageviews (7 days)."
            />
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
              <Screenshot
                src="/m5/posthog-funnel.jpg"
                alt="PostHog conversion funnel from pageview to waitlist submission"
                caption="Conversion funnel, last 7 days: 5.56% total conversion, median time to convert 4 min 26 s."
              />
              <article className="glass p-7">
                <MousePointerClick className="text-mint mb-5" size={26} />
                <h3 className="text-xl font-bold mb-4">The funnel in numbers</h3>
                <table className="w-full text-sm">
                  <thead className="text-slate-500 text-xs uppercase tracking-widest">
                    <tr className="border-b border-white/10 text-left">
                      <th className="py-2 font-bold">Step</th>
                      <th className="py-2 font-bold text-right">People</th>
                      <th className="py-2 font-bold text-right">Of all</th>
                    </tr>
                  </thead>
                  <tbody>
                    {funnel.map(([step, people, share]) => (
                      <tr key={step} className="border-b border-white/5 last:border-0">
                        <td className="py-2.5 font-mono text-xs text-slate-300">{step}</td>
                        <td className="py-2.5 text-right text-slate-300">{people}</td>
                        <td className="py-2.5 text-right text-mint font-semibold">{share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-slate-400 mt-5 leading-relaxed">
                  Step by step: 38.9% of visitors click a call to action, 42.9%
                  of those start the form, and 33.3% of those submit it.
                </p>
              </article>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[.03] p-5 text-sm text-slate-300 leading-relaxed">
              <span className="font-bold text-white">Why 14 sign-ups but only 1 in the funnel? </span>
              The two tools count different things. Formspree records every
              submission. The funnel counts only people who went through all
              four steps in order within the tracked events, so visits that
              reached the form another way, or were not tracked, do not appear
              in it. We use Formspree for the number of leads and PostHog for
              behaviour.
            </div>
          </div>
        </div>
      </section>

      <section id="m5-findings" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / What the data shows"
            title="Six things we learned"
            desc="From the funnel, the click events and the session recordings."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {findings.map((finding) => (
              <article key={finding.title} className="glass p-6">
                <h3 className="font-bold mb-3">{finding.title}</h3>
                <p className="muted text-sm">{finding.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="m5-next" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="05 / Next steps"
            title="What we change before the next round"
          />
          <div className="glass p-6 md:p-7">
            <ul className="divide-y divide-white/5">
              {nextSteps.map((step) => (
                <li key={step} className="py-3 flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-mint shrink-0 mt-[2px]" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

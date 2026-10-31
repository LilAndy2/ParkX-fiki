import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { interviews, interviewStats } from "./m2Interviews.js";

const problemQuestions = [
  "Tell me about the last time you had difficulty finding parking. Where were you going, and what happened?",
  "How often has this happened recently? Can you recall specific dates or occasions?",
  "What did you do to solve it? What alternatives did you consider?",
  "Where do you leave the car overnight / at work, and do you already rent a spot?",
  "What have you paid recently (lots, SMS parking, fines), and what did you give up (time, appointments, driving)?",
  "Have you tried OLX, Facebook groups, building groups, or neighbors to rent a spot? What happened?",
  "For owners: when is the space unused, have you rented it before, and what stopped you?",
];

const solutionQuestions = [
  "What would need to be true for a private reserved spot to be worth paying for?",
  "How would access work if there is a barrier or remote?",
  "What price feels reasonable for a few hours vs a monthly daytime arrangement?",
  "Would you rather host one stable daytime tenant or many short bookings?",
  "What would make this a poor fit for you?",
];

function EvidenceCard({ interview, participantNumber }) {
  const [open, setOpen] = React.useState(false);

  return (
    <article className="glass p-6 md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-mint text-xs font-bold tracking-widest">
            {interview.method === "audio" ? "AUDIO" : "WHATSAPP"}
          </p>
          <h3 className="font-bold text-xl mt-2">
            Persoana {participantNumber}
          </h3>
          <p className="muted text-sm mt-2">{interview.segment}</p>
        </div>
        <div className="text-sm text-slate-400 text-right">
          <p>{interview.date.split(",")[0]}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        {interview.highlights.map((item) => (
          <li key={item} className="rounded-xl bg-white/[.035] px-4 py-3">
            {item}
          </li>
        ))}
      </ul>

      {interview.audio && (
        <div className="mt-5">
          <p className="text-xs text-slate-500 mb-2">Audio recording</p>
          <audio className="w-full" controls preload="none" src={encodeURI(interview.audio)}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {interview.screenshots.length > 0 && (
        <div className="mt-5">
          <p className="text-xs text-slate-500 mb-2">WhatsApp proof screenshots</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interview.screenshots.map((src) => (
              <a key={src} href={encodeURI(src)} target="_blank" rel="noreferrer" className="block">
                <img
                  src={encodeURI(src)}
                  alt={`Persoana ${participantNumber} WhatsApp evidence`}
                  className="w-full h-36 object-cover rounded-xl border border-white/10 hover:border-mint/40 transition"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a
          href={encodeURI(interview.pdf)}
          target="_blank"
          rel="noreferrer"
          className="text-mint hover:underline"
        >
          Open transcript PDF
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-slate-300 hover:text-mint transition"
        >
          {open ? "Hide on-page transcript" : "Show on-page transcript"}
        </button>
      </div>

      {open && (
        <div className="mt-4 max-h-80 overflow-y-auto rounded-xl bg-black/30 border border-white/10 p-4 text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
          {interview.transcript}
        </div>
      )}
    </article>
  );
}

export default function MilestoneTwo() {
  const [activeInterviewIndex, setActiveInterviewIndex] = React.useState(0);
  const touchStart = React.useRef(null);

  function showPreviousInterview() {
    setActiveInterviewIndex((index) => Math.max(0, index - 1));
  }

  function showNextInterview() {
    setActiveInterviewIndex((index) =>
      Math.min(interviews.length - 1, index + 1),
    );
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event) {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX < 0) showNextInterview();
    else showPreviousInterview();
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-140px] w-[520px] h-[520px] rounded-full bg-mint/10 blur-[110px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-14 md:pt-28 relative">
          <span className="pill">STARTUP ENGINEERING · MILESTONE 2</span>
          <h1 className="mt-7 text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Customer discovery
            <br />
            <span className="text-mint">Problem first. Solution second.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Record of ParkX customer discovery: {interviewStats.total} completed
            interviews ({interviewStats.audio} audio, {interviewStats.whatsapp}{" "}
            WhatsApp), covering drivers and private-space owners in Bucharest.
            Findings below are tied to dated evidence in{" "}
            <code className="text-mint">public/evidence/m2</code>.
          </p>
        </div>
      </section>

      <nav
        aria-label="Customer discovery sections"
        className="mx-auto max-w-6xl px-5 pb-10 flex gap-x-6 gap-y-3 flex-wrap text-sm text-slate-300"
      >
        {[
          ["discovery-problem", "Problem"],
          ["discovery-solution", "Solution hypothesis"],
          ["discovery-plan", "Plan"],
          ["discovery-segments", "Segments"],
          ["discovery-method", "Methods"],
          ["discovery-questions", "Questions"],
          ["discovery-findings", "Findings"],
          ["discovery-product", "Product impact"],
          ["discovery-validation", "Validation readiness"],
          ["discovery-evidence", "Evidence"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="hover:text-mint transition">
            {label}
          </a>
        ))}
      </nav>

      <section id="discovery-problem" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="01 / Starting point"
            title="How we identified the problem"
            desc="Our initial problem hypothesis came from the parking situation in Bucharest and a review of existing parking services."
          />
          <div className="glass p-7 md:p-9">
            <p className="muted">
              We began with a familiar challenge in Bucharest: finding a
              convenient parking space, particularly in busy areas. Drivers
              may spend time searching for a spot, while privately owned
              parking spaces can remain unused during parts of the day.
            </p>
            <p className="muted mt-4">
              During Milestone 1, we reviewed existing services, including
              Parking București, AmParcat, ParkApp.ro and yeParking. Our review
              suggested that some services focus on paying for public parking,
              while private-space rental options may be oriented toward longer
              rental periods. This highlighted a possible gap for short-term
              parking in privately owned spaces.
            </p>
            <p className="muted mt-4">
              This desk research helped us form the hypothesis that drivers
              looking for short-term parking could be connected with owners
              whose spaces are temporarily unused. Milestone 2 tested whether
              people actually experience this problem, how they cope today, and
              what would need to be true for a marketplace like ParkX to fit.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-solution" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="02 / Hypothesis"
            title="Our initial solution"
            desc="ParkX is our proposed response to the opportunity identified in our initial research. It remains a hypothesis refined by discovery."
          />
          <div className="glass p-7 md:p-9 border-mint/20">
            <p className="muted">
              We propose ParkX as a peer-to-peer marketplace connecting
              drivers with owners of privately owned parking spaces. Drivers
              would be able to find spaces near their destination, reserve a
              space for specific hours and pay through the platform. Owners
              would be able to list their spaces, set their availability and
              earn income when those spaces are not in use.
            </p>
            <p className="muted mt-4">
              The proposed business model earns a commission on each completed
              booking. Discovery confirmed demand-side pain and existing informal
              monthly rentals, but also showed that access, trust and owner
              preference for stable daytime tenants are major constraints on a
              pure hourly stranger-to-stranger model.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
              {[
                ["Driver value", "A suitable, known spot reserved in advance."],
                ["Owner value", "Potential income from otherwise idle hours."],
                ["Key assumptions", "Enough local supply, demand, trust and willingness to transact."],
                ["What discovery tested", "Whether the problem is real before whether this approach fits."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-white/[.035] p-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="muted text-sm mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="discovery-plan" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="03 / Plan"
            title="Customer discovery plan"
            desc="Objective: learn whether the parking problem is real, how significantly it affects potential customers, and whether ParkX could address needs they actually have."
          />
          <div className="glass p-7 md:p-9 mb-5">
            <span className="text-mint text-xs font-bold tracking-widest">
              SHORT OVERVIEW
            </span>
            <p className="muted mt-4">
              We investigated two groups: drivers looking for convenient
              parking and owners of private spaces that are unused at certain
              times. We used audio interviews and WhatsApp message interviews,
              recruiting through personal networks and a short screening form.
              Conversations started with past experiences and current
              workarounds before introducing ParkX-style ideas. We then compared
              responses across segments and used the evidence to refine the
              product and assess readiness for customer validation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["1. Select segments", "Drivers (commuters, residents, hospital/center trips) and private-space owners (idle daytime spots, multi-spot landlords)."],
              ["2. Recruit participants", "Personal outreach plus Vanessa’s screening form; WhatsApp follow-ups for message interviews."],
              ["3. Collect information", `${interviewStats.total} interviews completed: ${interviewStats.audio} audio recordings and ${interviewStats.whatsapp} WhatsApp chats with screenshots.`],
              ["4. Analyze and decide", "Pattern analysis across demand and supply; product implications; validation readiness decision."],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Problem first, solution second</h3>
            <p className="muted text-sm mt-3">
              In each conversation we first asked about real past parking
              episodes, frequency, spend, fines and informal rental attempts.
              Solution questions (guarantee, access, price, monthly vs hourly)
              came only after the problem discussion, so participants described
              behavior before reacting to ParkX.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-segments" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / Who we learned from"
            title="Customer segments and recruitment"
            desc={`${interviewStats.drivers} participants spoke mainly as drivers; ${interviewStats.owners} as owners (Andra appears on both sides).`}
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="glass p-7">
              <h3 className="font-bold text-xl">Drivers — demand side</h3>
              <p className="muted text-sm mt-3">
                Denis, Lorena, George, Persoana 1 (Regie commute), Persoana 2
                (hospital routes), plus Andra when parking for work in Pipera.
              </p>
              <p className="text-sm text-slate-300 mt-4">
                Common thread: searching near home or destination regularly
                costs 10–25 minutes, creates stress, and sometimes changes the
                mode of transport or leads to fines / paid lots.
              </p>
            </article>
            <article className="glass p-7">
              <h3 className="font-bold text-xl">Parking-space owners — supply</h3>
              <p className="muted text-sm mt-3">
                Cristina (basement spot idle daytime), Andra (complex spot with
                barrier), Persoana 3 (multiple spots rented with apartments;
                some currently vacant).
              </p>
              <p className="text-sm text-slate-300 mt-4">
                Common thread: informal monthly rentals already happen via
                trust networks; strangers, remotes/barriers and admin risk make
                short-term sharing hard.
              </p>
            </article>
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Recruitment log</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-sm">
              {[
                "Channels: personal network (Andrei L / Andrei M) and Vanessa’s screening form → WhatsApp interviews",
                "Eligibility: recent Bucharest parking struggle and/or control of a private spot",
                `${interviewStats.total} conversations completed (30–31 Oct 2026)`,
                "Methods mix: 4 audio + 4 WhatsApp message interviews",
                "IDs used on this page: A-Andra, A-Cristina, A-Denis, A-Lorena, W-George, W-P1, W-P2, W-P3",
                "Limitation: convenience sample via team networks; not statistically representative",
              ].map((item) => (
                <p key={item} className="rounded-xl bg-white/[.035] p-4 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="discovery-method" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="05 / How we collected information"
            title="Research methods and process"
            desc="Only methods we actually ran are listed as used."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="glass p-6 border-mint/20">
              <h3 className="font-bold">Audio interviews (used)</h3>
              <p className="muted text-sm mt-3">
                Andra, Cristina, Denis, Lorena. Recorded with consent; MP3 + PDF
                transcript stored under{" "}
                <code className="text-slate-300">Conversatii Audio/</code>.
              </p>
            </article>
            <article className="glass p-6 border-mint/20">
              <h3 className="font-bold">WhatsApp message interviews (used)</h3>
              <p className="muted text-sm mt-3">
                George, Persoana 1–3. Chat screenshots + PDF transcripts under{" "}
                <code className="text-slate-300">Conversatii mesaje/</code>.
                Vanessa’s interviews started from a short screening form.
              </p>
            </article>
            <article className="glass p-6">
              <h3 className="font-bold">Focus groups</h3>
              <p className="muted text-sm mt-3">Not used in Milestone 2.</p>
            </article>
            <article className="glass p-6">
              <h3 className="font-bold">Landing page / email capture</h3>
              <p className="muted text-sm mt-3">
                Not used for discovery evidence in Milestone 2. A short form was
                used only as a recruitment screen for some WhatsApp interviews.
              </p>
            </article>
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Interview procedure</h3>
            <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-2">
              <li>Explain purpose and keep personal details minimal; anonymize WhatsApp participants where needed.</li>
              <li>Ask about the most recent real parking episode in the participant’s own words.</li>
              <li>Probe frequency, workaround, money/time spent, fines and informal rental attempts.</li>
              <li>Only then discuss reserved private spots, access, price and poor-fit conditions.</li>
              <li>Store audio or chat screenshots, write the transcript PDF, and link insights to interview IDs.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="discovery-questions" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="06 / Interview guide"
            title="Questions we asked"
            desc="Common question bank used across interviews. Exact wording varies by conversation; full phrasing is in each transcript PDF."
          />
          <div className="grid lg:grid-cols-2 gap-5">
            <article className="glass p-7">
              <h3 className="font-bold text-lg">Problem discovery</h3>
              <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-3">
                {problemQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </article>
            <article className="glass p-7">
              <h3 className="font-bold text-lg">Solution discovery (after the problem)</h3>
              <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-3">
                {solutionQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section id="discovery-findings" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="07 / Results"
            title="Findings"
            desc="Patterns from the 8 interviews. Quotes and details live in the evidence cards; IDs below show independent sources."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "Research snapshot",
                `${interviewStats.total} interviews on 30–31 Oct 2026: ${interviewStats.audio} audio, ${interviewStats.whatsapp} WhatsApp. Convenience sample via team networks + screening form.`,
              ],
              [
                "Searching is a recurring cost",
                "Drivers independently described 10–25 minute searches near home or destination (Denis, Lorena, George, W-P1, W-P2). Early arrival or weekends can be easier (Lorena, W-P1).",
              ],
              [
                "Workarounds already exist",
                "Paid lots under time pressure, metro/Bolt/Uber instead of driving, leaving earlier, blocking cars with a phone number in Regie (W-P1), informal monthly rentals via neighbors/colleagues.",
              ],
              [
                "Informal rental market is trust-based",
                "Cristina rented to a colleague; George and W-P2 already rent monthly; Andra found Pipera supply via a colleague after OLX failed. OLX/Facebook often unreliable or low-trust (Cristina, Andra, W-P3).",
              ],
              [
                "Owner blockers for hourly P2P",
                "Barrier/remote access, stranger risk, admin/rules, overtime/overstay, and reclaiming access (Andra, Cristina, W-P3). Andra prefers one stable daytime tenant; W-P3 will not hand remotes to non-residents.",
              ],
              [
                "Price & commitment signals",
                "Monthly anchors ~200–350 lei / ~50€. George: ~20–25 lei for 2h guaranteed nearby feels ok; 40–50 lei/hour loses to Uber. Denis: pays only if near and guaranteed free.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Surprises and open questions</h3>
            <p className="muted text-sm mt-3">
              Multi-spot landlords (W-P3) already monetize via apartments and
              are cautious about short stays. Some demand is hyper-local (Regie,
              hospital belts) where private rentable inventory may be scarce.
              We still lack a paid commitment test and denser owner coverage
              inside one micro-area.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-product" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="08 / Product implications"
            title="How discovery changed the product"
            desc="Evidence → decision chain for ParkX after the 8 interviews."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              [
                "Before",
                "Assumed a city-wide hourly P2P marketplace was the primary fit: drivers book strangers’ idle spots by the hour; owners casually list leftover time.",
              ],
              [
                "Evidence",
                "Demand pain is real, but owners fear access/strangers and often prefer stable monthly daytime tenants. Informal rentals already work through trust networks. Guarantee and local density matter more than total city inventory.",
              ],
              [
                "After / decision",
                "Keep the marketplace vision, but prioritize: (1) guaranteed availability + reserve-before-travel, (2) access/gated-complex controls and reclaim rules, (3) monthly daytime listings alongside hourly, (4) launch in dense micro-areas (e.g. Floreasca/Dorobanți, Regie/Grozăvești, hospital belts), (5) verification / simplified owner agreements.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="glass p-7">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="discovery-validation" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="09 / Next decision"
            title="Are we ready for customer validation?"
            desc="Customer validation tests whether customers will take meaningful steps to buy — not only whether they like the idea."
          />
          <div className="glass p-7 md:p-9">
            <span className="text-amber-300 text-xs font-bold tracking-widest">
              DECISION: NOT YET FOR BROAD SELLING — READY FOR A NARROW EXPERIMENT
            </span>
            <p className="muted mt-4">
              We are ready to design a low-risk validation experiment in one
              micro-area, but not ready to claim ParkX can sell at scale.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                ["Yes — problem is confirmed", "Multiple drivers independently described recent, costly parking searches and workarounds without being pitched ParkX first."],
                ["Yes — first narrow use cases exist", "Examples: guaranteed near-destination evening parking; monthly daytime listing for idle residential spots; dense zones like Regie / hospital belts."],
                ["Not yet — supply constraints", "Owner interviews show access, remotes, trust and preference for stable tenants. Hourly stranger booking is not obviously the first sellable wedge."],
                ["Not yet — no payment commitment", "We have stated willingness and price anchors, but no deposit, pre-order or live booking yet."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-white/[.035] p-4">
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="muted text-sm mt-2">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300 mt-6">
              Next experiment: recruit 3–5 real spots in one micro-area, offer
              real reservations or deposits for a defined window, and measure
              whether drivers pay and owners complete access handoff.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-evidence" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="10 / Audit trail"
            title="Evidence and research records"
            desc="Each card links the interview metadata to audio or WhatsApp screenshots, the PDF transcript, and an on-page transcript."
          />
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPreviousInterview}
              disabled={activeInterviewIndex === 0}
              aria-label="Previous interview"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.035] text-slate-200 transition hover:border-mint/40 hover:text-mint disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="min-w-0 text-center" aria-live="polite">
              <p className="text-sm font-semibold text-slate-200">
                Interview {activeInterviewIndex + 1} of {interviews.length}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Persoana {activeInterviewIndex + 1}
              </p>
            </div>
            <button
              type="button"
              onClick={showNextInterview}
              disabled={activeInterviewIndex === interviews.length - 1}
              aria-label="Next interview"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.035] text-slate-200 transition hover:border-mint/40 hover:text-mint disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={22} />
            </button>
          </div>
          <div
            className="mt-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <EvidenceCard
              key={interviews[activeInterviewIndex].id}
              interview={interviews[activeInterviewIndex]}
              participantNumber={activeInterviewIndex + 1}
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {interviews.map((interview, index) => (
              <button
                key={interview.id}
                type="button"
                onClick={() => setActiveInterviewIndex(index)}
                aria-label={`Go to interview ${index + 1}: Persoana ${index + 1}`}
                aria-current={activeInterviewIndex === index ? "step" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  activeInterviewIndex === index
                    ? "w-8 bg-mint"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

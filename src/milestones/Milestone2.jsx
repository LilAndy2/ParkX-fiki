import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { interviews, interviewStats } from "./m2Interviews.js";

const surveyStats = {
  total: 23,
  drivers: 13,
  owners: 8,
  other: 2,
  driversByDays: [
    ["1–2 days", 5],
    ["3–4 days", 4],
    ["5+ days", 3],
  ],
  driversWhoDrove: 12,
  driverSpend: [
    ["0 lei", 1],
    ["Under 50 lei", 5],
    ["50–150 lei", 4],
    ["150–300 lei", 1],
    ["Over 300 lei", 2],
  ],
  driverFineHistory: [
    ["No", 9],
    ["Once", 2],
    ["2–3 times", 2],
  ],
  ownersNeverRented: 8,
  ownersByRules: [
    ["Yes", 4],
    ["No", 2],
    ["Unsure", 2],
  ],
  ownersByAccess: [
    ["Open access", 3],
    ["Barrier or remote", 3],
    ["Key or card", 1],
    ["LPR", 1],
  ],
  followUpYes: 9,
  followUpAnswered: 21,
};

function SurveyBarChart({ title, total, rows }) {
  return (
    <article className="glass p-6">
      <h3 className="font-bold">{title}</h3>
      <p className="muted text-xs mt-1">Responses: {total}</p>
      <div className="mt-5 space-y-4">
        {rows.map(([label, count]) => {
          const percentage = Math.round((count / total) * 100);

          return (
            <div
              key={label}
              role="img"
              aria-label={`${label}: ${count} of ${total} responses, ${percentage}%`}
            >
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-300">{label}</span>
                <span className="shrink-0 text-slate-400">
                  {count} ({percentage}%)
                </span>
              </div>
              <div
                aria-hidden="true"
                className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"
              >
                <div
                  className="h-full rounded-full bg-mint"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

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
  const anonymousTranscript = React.useMemo(() => {
    let transcript = interview.transcript;

    [interview.interviewer, "Vanessa", "Andrei M.", "Andrei L."].forEach(
      (name) => {
        transcript = transcript.split(name).join("Interviewer");
      },
    );
    ["Intervievatorul", "Intervievator"].forEach((label) => {
      transcript = transcript.split(label).join("Interviewer");
    });
    transcript = transcript.replace(
      /\bParticipant(?: \d+)?\b/g,
      `Persoana ${participantNumber}`,
    );
    ["Andra", "Cristina", "Denis", "Lorena", "George"].forEach((name) => {
      transcript = transcript.replace(
        new RegExp(`\\b${name}\\b`, "g"),
        `Persoana ${participantNumber}`,
      );
    });
    return transcript.replace(/Persoana \d+/g, `Persoana ${participantNumber}`);
  }, [interview, participantNumber]);

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
          {anonymousTranscript}
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
            Findings below are tied to the interview records and evidence.
          </p>
        </div>
      </section>

      <nav
        aria-label="Customer discovery sections"
        className="mx-auto max-w-6xl px-5 pb-10 flex gap-x-6 gap-y-3 flex-wrap text-sm text-slate-300"
      >
        {[
          ["discovery-problem", "Problem"],
          ["discovery-solution", "Proposed solution"],
          ["discovery-plan", "Discovery plan"],
          ["discovery-segments", "Process in detail"],
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
              times. We used audio interviews, WhatsApp message interviews,
              and an online questionnaire with {surveyStats.total} responses.
              Participants were reached through personal networks and the
              questionnaire. Conversations started with past experiences and
              current workarounds before introducing ParkX-style ideas. We
              then compared responses across segments and used the evidence
              to refine the product and assess readiness for customer validation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["1. Select segments", "Drivers (commuters, residents, hospital/center trips) and private-space owners (idle daytime spots, multi-spot landlords)."],
              ["2. Recruit participants", "Personal outreach and an online questionnaire. Some respondents were invited to a follow-up interview."],
              ["3. Collect information", `${surveyStats.total} questionnaire responses and ${interviewStats.total} interviews: ${interviewStats.audio} audio recordings and ${interviewStats.whatsapp} WhatsApp chats with screenshots.`],
              ["4. Analyze and decide", "We compared demand and supply patterns, then considered product implications and readiness for validation."],
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
              Interviews focused on real past parking episodes, frequency,
              spending, fines, and current workarounds. Some earlier interviews
              also included follow-up questions about renting, access, or price.
              The four interviews conducted by another team member focused on
              participants’ past experiences and current behavior.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-segments" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / Detailed process"
            title="Describe the process in detail"
            desc="The following sections document who we spoke with, how we recruited and interviewed them, the questions we asked, and what we learned."
          />
          <h3 className="mb-4 mt-7 font-bold text-xl">
            Customer segments and recruitment
          </h3>
          <p className="muted mb-5">
            {interviewStats.drivers} participants spoke mainly as drivers,{" "}
            {interviewStats.owners} as owners (two participants appear on both
            sides).
          </p>
          <div className="grid md:grid-cols-2 items-stretch gap-5">
            <article className="glass flex h-full flex-col p-7">
              <h3 className="font-bold text-xl">Drivers — demand side</h3>
              <p className="muted text-sm mt-3">
                <span className="font-semibold text-slate-200">Participants:</span>{" "}
                1, 3–7, and 9–13.
              </p>
              <p className="muted text-sm mt-2">
                Participant 6 commutes to Regie. Participant 7 drives regularly
                to hospitals. Participant 1 looks for parking near work in
                Pipera. Participants 10–13 described different experiences in
                central and unfamiliar areas.
              </p>
              <div className="mt-auto border-t border-white/10 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-mint">
                  Common pattern
                </h4>
                <p className="text-sm text-slate-300 mt-2">
                  Finding parking near home or a destination often takes 10–25
                  minutes, causes stress, and can lead to paid parking, fines,
                  or changing how they travel.
                </p>
              </div>
            </article>
            <article className="glass flex h-full flex-col p-7">
              <h3 className="font-bold text-xl">
                Parking-space owners — supply
              </h3>
              <p className="muted text-sm mt-3">
                <span className="font-semibold text-slate-200">Participants:</span>{" "}
                1, 2, 8, and 9.
              </p>
              <p className="muted text-sm mt-2">
                Participant 1 has a space in a gated complex. Participant 2
                has a spot that is unused during the day. Participant 8 owns
                multiple spots, and Participant 9 owns a spot in Drumul
                Taberei.
              </p>
              <div className="mt-auto border-t border-white/10 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-mint">
                  Common pattern
                </h4>
                <p className="text-sm text-slate-300 mt-2">
                  Informal monthly rentals rely on personal trust. Owners are
                  cautious about strangers, access controls, building rules,
                  and short-term sharing.
                </p>
              </div>
            </article>
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Recruitment log</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-sm">
              {[
                `Channels: team members’ personal networks and an online questionnaire with ${surveyStats.total} responses, followed by interviews`,
                "Eligibility: recent Bucharest parking struggle and/or control of a private spot",
                `${interviewStats.total} conversations completed (30–31 Oct 2026)`,
                `Methods mix: ${interviewStats.audio} audio + ${interviewStats.whatsapp} WhatsApp message interviews`,
                "Participants are anonymized in the interview evidence cards",
                "Limitation: this was a convenience sample, so it is not statistically representative",
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
            tag="04.1 / Research methods"
            title="Research methods and process"
          />
          <div className="grid md:grid-cols-3 gap-5">
            <article className="glass p-6 border-mint/20">
              <h3 className="font-bold">Audio interviews</h3>
              <p className="muted text-sm mt-3">
                Participants 1–4 took part in audio interviews. MP3 recordings
                and PDF transcripts are available in the evidence cards.
              </p>
            </article>
            <article className="glass p-6 border-mint/20">
              <h3 className="font-bold">WhatsApp message interviews</h3>
              <p className="muted text-sm mt-3">
                Participants 5–13 took part in WhatsApp interviews. Chat
                screenshots and PDF transcripts are available in the evidence
                cards. Some participants had also completed the online
                questionnaire.
              </p>
            </article>
            <article className="glass p-6 border-mint/20">
              <h3 className="font-bold">Online questionnaire</h3>
              <p className="muted text-sm mt-3">
                {surveyStats.total} responses covered driving frequency,
                parking episodes, workarounds, payments, costs, fines, private
                spaces, availability, rental history, access, and building
                rules. {surveyStats.followUpYes} of the{" "}
                {surveyStats.followUpAnswered} respondents who answered the
                follow-up question agreed to be contacted.
              </p>
            </article>
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Interview procedure</h3>
            <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-2">
              <li>Explain the purpose and keep personal details minimal. Anonymize WhatsApp participants where needed.</li>
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
            tag="04.2 / Interview guide"
            title="Questions we asked"
            desc="These are recurring question themes from the interviews. Exact wording and topics varied by conversation. Full transcripts are available in the evidence cards."
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
              <h3 className="font-bold text-lg">Follow-up questions in some interviews</h3>
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
            tag="04.3 / Results"
            title="Findings"
            desc={`Findings from ${surveyStats.total} questionnaire responses and ${interviewStats.total} interviews. Participant labels identify interview sources.`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "Research snapshot",
                `${surveyStats.total} questionnaire responses and ${interviewStats.total} interviews (${interviewStats.audio} audio, ${interviewStats.whatsapp} WhatsApp). Convenience sample recruited through personal networks and the questionnaire.`,
              ],
              [
                "Searching is a recurring cost",
                "Several drivers described searches lasting 10–25 minutes near home or a destination (Participants 3–7, 9, 12, and 13). Experiences varied. Participant 10 usually finds central parking in about five minutes on weekends, while Participants 12 and 13 described unsuccessful searches.",
              ],
              [
                "Workarounds already exist",
                "Participants described using paid lots, taking the metro or Bolt instead of driving, leaving earlier, and informal monthly rentals. Participant 6 sometimes blocks cars in Regie and leaves a phone number. Participant 10 avoids peak traffic, Participant 12 checks Waze parking suggestions, and Participant 13 once parked partly on a green verge after searching.",
              ],
              [
                "Informal rental market is trust-based",
                "Some interview participants already rent parking monthly. Participant 1 found a spot in Pipera through a colleague after OLX did not work. Other owners described trust concerns or unreliable listings on OLX and Facebook. In the questionnaire, all 8 private-space owners said they had never rented out their space, highlighting that owner participation cannot be assumed.",
              ],
              [
                "Owner blockers for hourly P2P",
                "Barrier or remote access, stranger risk, building rules, overstay, and reclaiming access are concerns for Participants 1, 2, 8, and 9. Participant 9 would lend the spot to a trusted neighbor but worries about strangers, damage, and returning before a booking ends.",
              ],
              [
                "Price & commitment signals",
                "Interview participants cited monthly prices from about 200–350 lei to €50. In the questionnaire, drivers reported a wide range of monthly parking spend: 1 reported 0 lei, 5 under 50 lei, 4 between 50 and 150 lei, 1 between 150 and 300 lei, and 2 over 300 lei. Participant 11 reported paying around 30 lei for three hours and said lot prices vary. These are reported behaviors, not purchase commitments.",
              ],
              [
                "Availability and pricing information",
                "Participants 10 and 11 said parking signs or lot prices can be unclear. Participant 12 noted that drivers may only discover a lot is full after arriving. This points to uncertainty about rules, price, and real-time availability.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              ["Responses", surveyStats.total],
              ["Drivers", surveyStats.drivers],
              ["Private-space owners", surveyStats.owners],
              ["Neither segment", surveyStats.other],
            ].map(([label, count]) => (
              <article key={label} className="glass p-5">
                <p className="text-3xl font-bold text-mint">{count}</p>
                <h3 className="muted text-sm mt-1">{label}</h3>
              </article>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <SurveyBarChart
              title="Driving frequency among active drivers last week"
              total={surveyStats.driversWhoDrove}
              rows={surveyStats.driversByDays}
            />
            <SurveyBarChart
              title="Drivers — parking spend last month"
              total={surveyStats.drivers}
              rows={surveyStats.driverSpend}
            />
            <SurveyBarChart
              title="Drivers — parking fines or towing in past year"
              total={surveyStats.drivers}
              rows={surveyStats.driverFineHistory}
            />
            <SurveyBarChart
              title="Owners — access to their space"
              total={surveyStats.owners}
              rows={surveyStats.ownersByAccess}
            />
            <SurveyBarChart
              title="Owners — building rules"
              total={surveyStats.owners}
              rows={surveyStats.ownersByRules}
            />
            <article className="glass p-6">
              <h3 className="font-bold">Owners — rental experience</h3>
              <p className="muted text-xs mt-1">
                Responses: {surveyStats.owners}
              </p>
              <p className="mt-5 text-3xl font-bold text-mint">
                {surveyStats.ownersNeverRented}/{surveyStats.owners}
              </p>
              <p className="muted text-sm mt-1">
                had never rented out their space.
              </p>
              <div
                role="img"
                aria-label={`${surveyStats.ownersNeverRented} of ${surveyStats.owners} owners had never rented out their space`}
                className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
              >
                <div
                  aria-hidden="true"
                  className="h-full rounded-full bg-mint"
                  style={{
                    width: `${(surveyStats.ownersNeverRented / surveyStats.owners) * 100}%`,
                  }}
                />
              </div>
              <p className="muted text-sm mt-5">
                This differs from interview participants who already rent
                spaces, so owner availability and willingness need further
                validation.
              </p>
            </article>
          </div>
          <p className="muted text-xs mt-4">
            The questionnaire included {surveyStats.drivers} drivers,{" "}
            {surveyStats.owners} private-space owners, and {surveyStats.other}{" "}
            respondents who selected neither segment. To protect respondents,
            individual rows and contact details are not published; the figures
            shown here are aggregated from the original form export.
          </p>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Surprises and open questions</h3>
            <p className="muted text-sm mt-3">
              Participant 8 already rents parking spaces with apartments and
              is cautious about short stays. In contrast, all 8 questionnaire
              respondents with a private space said they had never rented it
              out. The new driver interviews also show that parking difficulty
              is not uniform. Weekend parking may
              be manageable in some central areas, while drivers in unfamiliar
              areas face uncertainty about price and availability. We still
              lack a paid commitment test and denser owner coverage inside one
              micro-area.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-product" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="05 / Product impact"
            title="How discovery changed the product"
            desc={`Evidence → decision chain for ParkX after ${surveyStats.total} questionnaire responses and ${interviewStats.total} interviews.`}
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              [
                "Before",
                "We assumed a city-wide hourly peer-to-peer marketplace was the primary fit. Drivers would book strangers’ unused spaces by the hour, and owners would list spaces whenever they were free.",
              ],
              [
                "Evidence",
                "Interview participants described demand pain and informal monthly rentals, while the questionnaire captured varied driver spending and 8 of 8 private-space owners had never rented out their space. Owner supply, access, trust, and willingness therefore remain unproven.",
              ],
              [
                "After / decision",
                "Keep the marketplace vision, but prioritize: (1) clear price and availability before travel, (2) access/gated-complex controls and reclaim rules, (3) test monthly daytime listings alongside hourly, (4) launch in dense micro-areas (e.g. Floreasca/Dorobanți, Regie/Grozăvești, hospital belts), (5) verification / simplified owner agreements.",
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
            tag="06 / Validation readiness"
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
                ["Yes — first narrow use cases exist", "Possible use cases include guaranteed evening parking near a destination, daytime monthly rentals for unused residential spaces, and dense areas such as Regie or hospital districts."],
                ["Not yet — supply constraints", "In the questionnaire, all 8 private-space owners said they had never rented out their space. Interviews also show access, trust and preference for stable tenants are barriers."],
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
            tag="Supporting evidence"
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

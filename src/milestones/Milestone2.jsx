import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";

const discoveryQuestions = [
  {
    title: "Problem discovery — ask before presenting ParkX",
    questions: [
      "Tell me about the last time you had difficulty finding parking. Where were you going, and what happened?",
      "How often has this happened recently? Can you recall specific dates or occasions?",
      "What did you do to solve it? What alternatives did you consider?",
      "What was the most frustrating or costly part (time, money, uncertainty, or something else)?",
      "What do you currently pay or give up to deal with this problem?",
      "For space owners: tell me about the last time your parking space was unused. What do you do with it?",
      "For space owners: have you ever considered letting someone else use it? What stopped you, or how did it work?",
      "What have I not asked that would help me understand your experience?",
    ],
  },
  {
    title: "Solution discovery — only after understanding the problem",
    questions: [
      "Based on what you described, what would a better outcome look like for you?",
      "How do you currently decide whether to trust a parking listing or its owner?",
      "What concerns would you have about reserving a privately owned space by the hour?",
      "What would you need to know before trying a service like this?",
      "Space owners: what availability, access, payment, and safety controls would you need?",
      "What would make this proposed approach a poor fit for you?",
    ],
  },
];

export default function MilestoneTwo() {
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
            This page is the record of the discovery process. Separate what was
            assumed from what participants actually said, and support every
            finding with dated evidence. Do not treat the suggested questions
            below as interviews already conducted.
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
            desc="Document the observations that led to the problem hypothesis. The statements below are prompts to complete with your own sources, not claims that research has already confirmed."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="glass p-7">
              <span className="text-mint text-xs font-bold tracking-widest">
                INITIAL PROBLEM HYPOTHESIS
              </span>
              <p className="muted mt-4">
                Drivers may have difficulty finding a convenient, reliable
                parking spot when and where they need one, while privately
                owned spaces may sit unused for some hours. Discovery must test
                whether this is frequent and important for specific people.
              </p>
            </article>
            <article className="glass p-7">
              <span className="text-mint text-xs font-bold tracking-widest">
                RECORD YOUR ORIGIN AND EVIDENCE
              </span>
              <ul className="muted mt-4 space-y-2 text-sm">
                <li>What observation, experience, or source raised this problem?</li>
                <li>Who was affected, where, and in what situation?</li>
                <li>What evidence existed before customer interviews?</li>
                <li>Which parts were assumptions that still needed testing?</li>
              </ul>
              <p className="text-xs text-slate-500 mt-5">
                Add dates, source links, photos or notes where appropriate in
                the evidence section below.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="discovery-solution" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="02 / Hypothesis"
            title="What we thought could solve it"
            desc="Describe the proposed solution as a hypothesis—not as a validated need. Do not lead with this idea during problem interviews."
          />
          <div className="glass p-7 md:p-9 border-mint/20">
            <p className="text-slate-200 leading-relaxed">
              Initial solution hypothesis: a marketplace where drivers can
              discover and reserve privately owned parking spaces by the hour,
              with owners choosing when their spaces are available and booking
              and payment handled in the service.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
              {[
                ["Driver value", "A suitable, known spot reserved in advance."],
                ["Owner value", "Potential income from otherwise idle hours."],
                ["Key assumptions", "Enough local supply, demand, trust and willingness to transact."],
                ["What discovery tests", "Whether the problem is real before whether this approach fits."],
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
            desc="Short overview: learn about recent parking experiences without pitching; compare patterns across driver and owner segments; only then explore whether the proposed solution addresses a proven need; document evidence and decide whether further validation is justified."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["1. Define", "Write down the riskiest problem assumptions and the customer segments to investigate."],
              ["2. Recruit", "Reach people who recently experienced the situation, not only friends who want to be supportive."],
              ["3. Learn", "Conduct neutral, experience-based interviews; capture exact notes and evidence with consent."],
              ["4. Decide", "Synthesize recurring and disconfirming evidence; update the product and readiness decision."],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Before starting, record</h3>
            <p className="muted text-sm mt-3">
              Research dates and location · interviewer(s) · target number of
              conversations and rationale · recruitment channels · consent and
              privacy approach · note-taking owner · how responses will be
              grouped and compared.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Fill in the actual plan and dates; do not report proposed targets
              as completed research.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-segments" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / Who to learn from"
            title="Customer segments and recruitment"
            desc="Use these as candidate segments from the initial project concept. Narrow or replace them based on evidence, and record who you actually spoke with."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Drivers — demand side",
                examples: "Commuters travelling to busy areas; residents or evening visitors; people making occasional trips to central Bucharest.",
                learn: "Prioritize people who can describe a recent parking search or a concrete workaround.",
              },
              {
                title: "Parking-space owners — supply side",
                examples: "Apartment owners with a space unused at certain times; house owners with a driveway or garage; businesses with off-hours capacity.",
                learn: "Prioritize people who control the space and can explain actual availability, access, safety and current use.",
              },
            ].map(({ title, examples, learn }) => (
              <article key={title} className="glass p-7">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="muted text-sm mt-3">{examples}</p>
                <p className="text-sm text-slate-300 mt-4">{learn}</p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Recruitment log — complete with actual activity</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-sm">
              {[
                "Channel used (personal outreach, community, campus, online group, etc.)",
                "Recruitment message and date sent",
                "Eligibility criteria and why they fit the segment",
                "People contacted / responses / conversations completed",
                "Participant segment labels; use anonymous IDs",
                "Who declined or did not fit, and any recruitment limitations",
              ].map((item) => (
                <p key={item} className="rounded-xl bg-white/[.035] p-4 text-slate-300">{item}</p>
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
            desc="Describe what you actually used. Do not list a focus group, questionnaire, landing page, or other method unless you ran it and can provide evidence."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              ["Face-to-face or remote interviews", "Record date, duration, participant segment, interviewer, setting, consent, notes and follow-up. Ask about real past behavior; avoid pitching during problem discovery."],
              ["Focus groups (if used)", "Record participant count and mix, facilitator, prompts, how group dynamics were handled, and distinguish one person's opinion from a shared pattern."],
              ["Questionnaire or online form (if used)", "Include the exact questions, distribution channel, dates, number of responses, relevant respondent characteristics and response summary. Avoid treating convenience samples as representative."],
              ["Landing page or email collection (if used)", "Include a dated screenshot/link, the exact message and call to action, traffic source and volume, sign-ups, and what this can and cannot demonstrate."],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
                <p className="text-xs text-slate-500 mt-4">
                  Actual method, dates and evidence: add below / link evidence.
                </p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Interview procedure</h3>
            <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-2">
              <li>Explain the purpose, request consent for notes or recording, and avoid collecting unnecessary personal information.</li>
              <li>Ask about the participant's most recent real experience and let them describe it in their own words.</li>
              <li>Probe for context, frequency, current workaround, consequences and evidence of effort or spending.</li>
              <li>Summarize what you heard and check that your interpretation is accurate.</li>
              <li>Only after problem questions, describe the solution concept neutrally and ask about concerns, missing requirements and poor fit.</li>
              <li>Write notes promptly, anonymize participants, and link each insight to its source record.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="discovery-questions" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="06 / Interview guide"
            title="Questions and evidence of what was asked"
            desc="The following is a suggested question bank, not a record of completed interviews. Replace or supplement it with the exact questions you actually asked and attach dated notes or form screenshots."
          />
          <div className="grid lg:grid-cols-2 gap-5">
            {discoveryQuestions.map(({ title, questions }) => (
              <article key={title} className="glass p-7">
                <h3 className="font-bold text-lg">{title}</h3>
                <ol className="muted text-sm mt-4 list-decimal pl-5 space-y-3">
                  {questions.map((question) => <li key={question}>{question}</li>)}
                </ol>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Exact questions used</h3>
            <p className="muted text-sm mt-3">
              For each method, add the final wording, any follow-up prompts,
              when it was used, and where the completed interview guide or form
              can be verified.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-findings" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="07 / Results"
            title="Findings — include what challenges the idea"
            desc="No customer results are assumed here. Populate this section from actual records, separating direct observations and quotes from your interpretation."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Research snapshot", "Dates, methods, completed participants by segment, location and any important sample limitations."],
              ["Repeated problems", "What multiple participants independently experienced; frequency, context and impact."],
              ["Current workarounds", "What people actually do today, how well it works, and time or money spent."],
              ["Differences by segment", "Where driver and owner experiences differ; do not combine unlike needs."],
              ["Surprises and disconfirming evidence", "Responses that contradict the hypothesis, people who do not experience the problem, and unmet assumptions."],
              ["Confidence and open questions", "What the evidence supports, how strong it is, and what still needs investigation."],
            ].map(([title, text]) => (
              <article key={title} className="glass p-6">
                <h3 className="font-bold">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
                <p className="text-xs text-slate-500 mt-4">Add actual findings and source IDs.</p>
              </article>
            ))}
          </div>
          <div className="glass p-7 mt-5">
            <h3 className="font-bold text-lg">Insight log</h3>
            <p className="muted text-sm mt-3">
              For every insight, record: insight · segment · number of
              independent sources · anonymized participant IDs · exact quote or
              observation · interpretation · evidence link. Do not present an
              illustrative quote or a single anecdote as a general finding.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-product" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="08 / Product implications"
            title="How discovery changed the product"
            desc="Make the chain from evidence to product decision visible. If an insight has not changed the product yet, say so and explain why."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Before", "What we believed or planned before talking to customers."],
              ["Evidence", "The specific finding and participant/source IDs that informed the decision."],
              ["After / decision", "What changed, what did not change and why, plus the next experiment to reduce uncertainty."],
            ].map(([title, text]) => (
              <article key={title} className="glass p-7">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-5">
            Record concrete changes to customer focus, problem framing, product
            requirements, trust and safety, access flow, pricing assumptions,
            or a decision to stop or pivot.
          </p>
        </div>
      </section>

      <section id="discovery-validation" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="09 / Next decision"
            title="Are we ready for customer validation?"
            desc="Customer validation tests whether customers will take meaningful steps to buy. A positive reaction to an idea alone is not evidence that they will pay."
          />
          <div className="glass p-7 md:p-9">
            <span className="text-amber-300 text-xs font-bold tracking-widest">
              DECISION: NOT YET RECORDED
            </span>
            <p className="muted mt-4">
              Complete this decision after reviewing the discovery evidence.
              State yes, no, or not yet, then cite the evidence and explain why.
              This page does not claim that discovery has already been
              conducted or that ParkX is ready to sell.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                "Do target customers describe this as a recent, meaningful problem without being prompted?",
                "Do you have evidence across the relevant driver and owner segments, including counterexamples?",
                "Can you describe the first narrow customer segment and use case supported by evidence?",
                "Have the largest solution, trust, access, supply and willingness-to-pay uncertainties been identified?",
                "What low-risk selling experiment will test commitment (not just stated interest)?",
                "What evidence threshold would make you proceed, iterate, or stop?",
              ].map((question) => (
                <p key={question} className="rounded-xl bg-white/[.035] p-4 text-sm text-slate-300">{question}</p>
              ))}
            </div>
            <p className="text-sm text-slate-300 mt-6">
              Final decision and arguments: fill in after synthesizing the
              documented interviews and other research.
            </p>
          </div>
        </div>
      </section>

      <section id="discovery-evidence" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="10 / Audit trail"
            title="Evidence and research records"
            desc="Link proof for each activity and claim. Protect participant privacy: get consent, remove identifying details, and do not publish private contact information or recordings."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Recruitment message and channel evidence",
              "Dated interview guide and exact questionnaire",
              "Anonymized interview notes or consented excerpts",
              "Focus group notes, if a group was held",
              "Form response summary and method, if a survey was run",
              "Dated landing page, traffic and sign-up evidence, if used",
              "Analysis notes connecting insights to source IDs",
              "Product decisions and customer validation experiment",
              "Limitations, missing evidence and next research steps",
            ].map((item) => (
              <div key={item} className="glass p-5">
                <p className="text-sm text-slate-200">{item}</p>
                <p className="text-xs text-slate-500 mt-3">Add a link, attachment, or dated reference.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

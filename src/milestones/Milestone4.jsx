import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  CheckCircle2,
  ParkingCircle,
  Quote,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

const personas = [
  {
    id: "radu",
    icon: CarFront,
    name: "Radu",
    role: "Driver",
    pronoun: "he",
    doesNotTitle: "What he doesn't do",
    quote:
      "I don't take the car when I know I have to be somewhere on time and I don't have a sure parking spot.",
    quoteSource: "driver, questionnaire",
    profile: [
      ["Age (illustrative)", "30–40"],
      ["Occupation (illustrative)", "Field work: daily trips to clients, hospitals and institutions"],
      ["How often he drives", "Daily, for personal and work trips; uses no other means of transport"],
      ["Where it hurts", "Crowded areas: Piața Romană, Obor, Dacia, hospitals (SUUB, Floreasca), Regie"],
      ["What he spends", "Pays occasionally by the hour, via SMS or app; many drivers spend under 50 lei a month"],
    ],
    wants: [
      "To arrive on time and as close as possible to the destination",
      "Not to be called to move the car, get a fine or have conflicts with neighbours",
      "Not to waste time circling for a spot",
    ],
    today: [
      "Blocks other cars and leaves his phone number on the windscreen",
      "Parks in unmarked spots or leaves the car with the hazard lights on",
      "Pays for public hourly parking because nothing else is free",
      "Leaves the car at home and takes public transport or ride-sharing",
    ],
    frustrations: [
      "45 minutes looking for a spot at a wedding in Obor, only residential spots in the whole neighbourhood",
      "Wheel clamped by the police, 30 minutes of waiting and a fine",
      "Called by the police to move the car after parking on a pavement where other cars were too",
      "Left the barber half-trimmed to move the car from someone else's spot; another time oil was poured on his car",
      "Hospitals have no spots for patients or visitors",
    ],
    doesNot: [
      "Look for a private spot to rent by the hour: he doesn't know it exists or where to find one",
      "Rent monthly, unless the spot came with the apartment or through acquaintances",
    ],
    meaning:
      "Radu has a real and frequent problem, but he already solves it cheaply: he blocks someone, pays for public parking or leaves the car at home. He needs a spot exactly where and when he goes, often in areas without free private spots (hospitals, the centre). A spot in a gated complex doesn't help him if he can't get in without a remote.",
  },
  {
    id: "elena",
    icon: ParkingCircle,
    name: "Elena",
    role: "Parking-space owner",
    pronoun: "she",
    quote: "I don't give the remote to someone who doesn't live in the neighbourhood.",
    profile: [
      ["Age (illustrative)", "50–60"],
      ["Situation", "Has her own spot at home; some owners also rent out apartments that come with a spot"],
      ["Type of spot", "In the block's car park or underground, usually with a barrier, remote or access card"],
      ["What she asks", "About €50 a month, when the spot is rented together with the apartment"],
      ["How often it's free", "For half of the owners, almost never: their own car is parked there"],
    ],
    wants: [
      "To know who uses her spot and to get it back at any time",
      "No hassle: contracts, taxes, phone calls",
      "To find her spot free when she gets home",
    ],
    today: [
      "Uses the spot herself; has never rented it out separately",
      "Lends it for free, only to neighbours or tenants' friends",
      "When a spot is empty, puts up a notice at the residents' association and waits to be contacted",
      "Doesn't use OLX or Storia for spots: she doesn't trust strangers",
    ],
    frustrations: [
      "A former tenant used the spot for free while she couldn't get the remote back",
      "Strangers' cars parked in her spot; she called the owners or the police, who came after the person had left",
      "Renting means a contract, ANAF and taxes for a small amount of money",
    ],
    doesNot: [
      "“It has a barrier”",
      "“I like not depending on another person”",
      "“It's too much hassle for too little money”",
      "“It's not mine, I'm renting”",
    ],
    doesNotTitle: "Why she doesn't rent it out",
    meaning:
      "Elena isn't looking for income from her parking spot and doesn't want to give strangers access. Her spots are either occupied or in gated complexes, and she trusts only neighbours. For her, the app would add risk and paperwork, not a benefit: the supply ParkX needs doesn't exist yet.",
  },
];

const driverStories = [
  ["find a free spot on the map near my destination, for the time I arrive,", "I stop circling for a spot.", "Filter by address and time window; only spots free at that time are shown.", "Must"],
  ["book the spot before leaving home,", "I know for sure I have somewhere to park.", "The booking locks the spot for the interval; instant confirmation.", "Must"],
  ["see how to get in (barrier, code, open access) before booking,", "I don't get stuck at the gate.", "Access type shown on the spot card and in the details.", "Must"],
  ["get another spot or my money back if the spot is taken when I arrive,", "I don't end up blocking someone.", "“Spot is occupied” button; nearby alternative or refund.", "Must"],
  ["pay in the app, not by SMS or different parking meters,", "I don't get confused at every car park.", "Saved card; one payment method for all spots.", "Should"],
  ["extend the booking from my phone,", "I don't have to go out and move the car.", "Extension if the spot is free after the interval; automatic payment.", "Should"],
  ["search directly near a hospital or institution,", "that's where I never find a spot.", "Search by place name (hospital, institution).", "Could"],
];

const ownerStories = [
  ["list my spot only for the hours it is free,", "I find it free when I get home.", "Weekly schedule + block intervals at any time.", "Must"],
  ["choose who can book (e.g. only residents of the area),", "I only trust neighbours.", "Option “only local residents” / “any verified driver”.", "Must"],
  ["let the driver in only for the booking, without giving them the remote,", "they can't use my spot for free afterwards.", "Temporary access (code or instructions) valid only for the interval.", "Must"],
  ["see who is in my spot and report a problem,", "I no longer wait 40 minutes for a stranger.", "Plate number and departure time visible; “Report” button.", "Should"],
  ["get paid automatically and receive an earnings summary for the annual tax return,", "I have no hassle with ANAF.", "Automatic monthly payout; yearly export of earnings.", "Should"],
  ["take my spot back for new intervals at any time,", "I don't depend on others.", "Edit availability; existing bookings stay valid.", "Must"],
];

const useCases = [
  {
    title: "Search and book a spot",
    actor: "Driver (Radu)",
    pre: "Has an account and a saved card.",
    post: "The spot is booked for the interval and the owner is notified.",
    main: [
      "The driver chooses “Caut loc de parcare”.",
      "Enters the destination and time window.",
      "The system shows free spots in the area on the map.",
      "The driver opens a spot and sees the price, schedule and how to get in.",
      "Taps “Rezervă”, checks the interval and plate number.",
      "Confirms and pays.",
      "The system confirms the booking and sends the access steps.",
    ],
    alt: [
      "3a. No free spots: the system suggests widening the area or another interval.",
      "6a. Payment fails: the driver can try another card.",
    ],
  },
  {
    title: "Park in the booked spot",
    actor: "Driver (Radu)",
    pre: "Has an active booking.",
    post: "Payment is completed and the owner sees it under Câștiguri.",
    main: [
      "The driver arrives at the address and follows the access steps.",
      "Enters and parks in the indicated spot.",
      "The system shows the remaining time.",
      "The driver leaves before the end of the interval; the booking closes.",
    ],
    alt: [
      "1a. The spot is occupied: the driver taps “Locul e ocupat” and the system offers another spot or a refund.",
      "3a. Needs more time: extends from the app, if the spot is free after the interval.",
    ],
  },
  {
    title: "List a spot",
    actor: "Owner (Elena)",
    pre: "Has an account and a spot she is entitled to rent out.",
    post: "The spot appears on the map during the set intervals.",
    main: [
      "The owner chooses “Am un loc de închiriat”.",
      "Enters the spot type, address and access method and adds photos.",
      "Sets the free days and hours and the price.",
      "Chooses who can book.",
      "Publishes the spot.",
    ],
    alt: [
      "2a. The spot is residential or rented without the owner's consent: the system doesn't allow publishing.",
      "4a. Chooses “only local residents”: the spot is shown only to drivers with an address in the area.",
    ],
  },
  {
    title: "Manage the spot and earnings",
    actor: "Owner (Elena)",
    pre: "Has at least one published spot.",
    post: "Earnings are recorded and can be exported for the annual tax return.",
    main: [
      "The owner is notified of a new booking.",
      "Sees in the dashboard who is coming, when, and the plate number.",
      "After the booking, sees the amount under Câștiguri.",
      "Receives the payout automatically.",
    ],
    alt: [
      "2a. The driver overstays: the owner reports it from the dashboard.",
      "Any time: blocks an interval from “Editează disponibilitatea”.",
    ],
  },
];

const userFlows = [
  {
    title: "Driver: search and book",
    screens: ["Start", "Hartă", "Detalii loc", "Rezervare"],
    image: "/m4/flow-driver-search-book.png",
  },
  {
    title: "Driver: at the parking spot",
    screens: ["Rezervare activă"],
    image: "/m4/flow-driver-parking.png",
  },
  {
    title: "Owner: list a spot",
    screens: ["Start", "Adaugă loc", "Disponibilitate"],
    image: "/m4/flow-owner-list-spot.png",
  },
  {
    title: "Owner: manage the spot",
    screens: ["Panou proprietar", "Câștiguri", "Disponibilitate"],
    image: "/m4/flow-owner-manage.png",
  },
];

const wireframeCoverage = [
  ["Find free spots near the destination", "Harta Locuri"],
  ["See how to get in before booking", "Detalii loc"],
  ["Book and pay in the app", "Rezervare"],
  ["Spot occupied → alternative or refund; extend booking", "Rezervare activă"],
  ["List only free hours; choose who can book", "Disponibilitate"],
  ["See who is in the spot; report a problem", "Panou proprietar"],
  ["Automatic payout and earnings overview", "Câștiguri"],
];

const priorityStyle = {
  Must: "bg-mint/15 text-mint border-mint/30",
  Should: "bg-white/[.06] text-slate-200 border-white/15",
  Could: "bg-transparent text-slate-400 border-white/10",
};

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

function PersonaCard({ persona }) {
  const Icon = persona.icon;
  return (
    <article id={`persona-${persona.id}`} className="glass p-7 md:p-9 scroll-mt-28">
      <div className="flex items-center gap-4">
        <span className="bg-mint/15 text-mint p-3 rounded-2xl">
          <Icon size={26} />
        </span>
        <div>
          <h3 className="text-2xl font-bold">{persona.name}</h3>
          <p className="text-mint text-sm">{persona.role}</p>
        </div>
      </div>

      <blockquote className="mt-6 border-l-2 border-mint/50 pl-4">
        <Quote size={16} className="text-mint/60 mb-2" />
        <p className="text-lg text-slate-200 italic leading-relaxed">
          {persona.quote}
        </p>
        {persona.quoteSource && (
          <footer className="text-xs text-slate-500 mt-2">
            — {persona.quoteSource}
          </footer>
        )}
      </blockquote>

      <dl className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-4">
        {persona.profile.map(([label, value]) => (
          <div key={label}>
            <dt className="text-slate-500 text-xs font-bold tracking-widest uppercase">
              {label}
            </dt>
            <dd className="text-sm text-slate-300 mt-1">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <h4 className="font-bold mb-3">What {persona.pronoun} wants</h4>
          <BulletList items={persona.wants} />
        </div>
        <div>
          <h4 className="font-bold mb-3">What {persona.pronoun} does today</h4>
          <BulletList items={persona.today} />
        </div>
        <div>
          <h4 className="font-bold mb-3">Real frustrations</h4>
          <BulletList items={persona.frustrations} />
        </div>
        <div>
          <h4 className="font-bold mb-3">{persona.doesNotTitle}</h4>
          <BulletList items={persona.doesNot} />
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-mint/25 bg-mint/[.05] p-5">
        <span className="text-mint text-xs font-bold tracking-widest">
          WHAT THIS MEANS FOR PARKX
        </span>
        <p className="text-sm text-slate-200 mt-2 leading-relaxed">
          {persona.meaning}
        </p>
      </div>
    </article>
  );
}

function StoryTable({ who, stories }) {
  return (
    <div className="glass overflow-x-auto">
      <table className="w-full text-sm text-left min-w-[640px]">
        <thead className="text-slate-500 text-xs uppercase tracking-widest">
          <tr className="border-b border-white/10">
            <th className="p-4 font-bold">User story</th>
            <th className="p-4 font-bold">Acceptance criteria</th>
            <th className="p-4 font-bold">Priority</th>
          </tr>
        </thead>
        <tbody>
          {stories.map(([want, soThat, criteria, priority]) => (
            <tr key={want} className="border-b border-white/5 last:border-0 align-top">
              <td className="p-4 text-slate-300">
                As <span className="text-white font-semibold">{who}</span>, I
                want to {want} so {soThat}
              </td>
              <td className="p-4 text-slate-400">{criteria}</td>
              <td className="p-4">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${priorityStyle[priority]}`}
                >
                  {priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UseCaseCard({ useCase, index }) {
  return (
    <article className="glass p-6 md:p-7">
      <span className="text-slate-600 font-bold">
        UC{String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-bold text-lg mt-1">{useCase.title}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        {[
          ["Primary actor", useCase.actor],
          ["Preconditions", useCase.pre],
          ["Postconditions", useCase.post],
        ].map(([label, value]) => (
          <div key={label} className="grid grid-cols-[120px_1fr] gap-3">
            <dt className="text-slate-500">{label}</dt>
            <dd className="text-slate-300">{value}</dd>
          </div>
        ))}
      </dl>
      <h4 className="text-mint text-xs font-bold tracking-widest mt-6 mb-3">
        MAIN FLOW
      </h4>
      <ol className="space-y-1.5 text-sm text-slate-300 list-decimal pl-5 marker:text-slate-500">
        {useCase.main.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h4 className="text-mint text-xs font-bold tracking-widest mt-6 mb-3">
        ALTERNATIVE FLOWS
      </h4>
      <ul className="space-y-1.5 text-sm text-slate-400">
        {useCase.alt.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Milestone4() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-140px] w-[520px] h-[520px] rounded-full bg-mint/10 blur-[110px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-14 md:pt-28 relative">
          <span className="pill">STARTUP ENGINEERING · MILESTONE 4</span>
          <h1 className="mt-7 text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Users
            <br />
            <span className="text-mint">Who ParkX is for.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Two personas built from our discovery research, the user stories
            and use cases that follow from them, and the user flows that map
            each story onto the screens of the ParkX wireframe.
          </p>
        </div>
      </section>

      <nav
        aria-label="Milestone 4 sections"
        className="mx-auto max-w-6xl px-5 pb-10 flex gap-x-6 gap-y-3 flex-wrap text-sm text-slate-300"
      >
        {[
          ["m4-personas", "User personas"],
          ["m4-stories", "User stories"],
          ["m4-use-cases", "Use cases"],
          ["m4-flows", "User flows"],
          ["m4-wireframes", "Wireframes"],
          ["m4-conclusions", "Conclusions"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="hover:text-mint transition">
            {label}
          </a>
        ))}
      </nav>

      <section id="m4-personas" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="01 / User personas"
            title="Radu and Elena"
            desc="Each persona is a composite profile that combines real behaviours and situations from several sources. Names, ages and occupations are illustrative; behaviours, frustrations and quotes come from real answers in our questionnaire and interviews."
          />
          <div className="grid lg:grid-cols-2 gap-5">
            {personas.map((persona) => (
              <PersonaCard key={persona.id} persona={persona} />
            ))}
          </div>
        </div>
      </section>

      <section id="m4-stories" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="02 / User stories"
            title="What each side needs from ParkX"
            desc="Prioritised with MoSCoW: Must (required), Should (important), Could (useful). The owner's Must stories respond directly to the objections from our research: trust, access and having the spot free when she needs it."
          />
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                <CarFront size={20} className="text-mint" /> Driver – Radu
              </h3>
              <StoryTable who="Radu" stories={driverStories} />
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                <ParkingCircle size={20} className="text-mint" /> Owner – Elena
              </h3>
              <StoryTable who="Elena" stories={ownerStories} />
            </div>
          </div>
        </div>
      </section>

      <section id="m4-use-cases" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="03 / Use cases"
            title="Four core interactions"
            desc="Two use cases per persona, each with its main flow and the alternative flows that handle what can go wrong."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="m4-flows" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / User flows"
            title="From story to screen"
            desc="Each flow follows one use case through the wireframe screens, including the decision points. Diagrams are in Romanian, like the wireframes. Click a diagram to open it at full size."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {userFlows.map((flow) => (
              <article key={flow.title} className="glass p-5 flex flex-col">
                <h3 className="font-bold">{flow.title}</h3>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-2 mb-4">
                  {flow.screens.map((screen, index) => (
                    <React.Fragment key={screen}>
                      {index > 0 && (
                        <ArrowRight size={11} className="text-slate-600" />
                      )}
                      <span>{screen}</span>
                    </React.Fragment>
                  ))}
                </div>
                <a
                  href={flow.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto block rounded-xl bg-white p-3 border border-white/10 hover:border-mint/50 transition"
                >
                  <img
                    src={flow.image}
                    alt={`User flow diagram: ${flow.title}`}
                    className="w-full h-[420px] object-contain"
                    loading="lazy"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="m4-wireframes" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="05 / Wireframes"
            title="Already covered by the wireframes"
            desc="We checked every Must and Should story against the Milestone 3 wireframes. Each one already has a screen that supports it, so the wireframes did not need changes for this milestone."
          />
          <div className="glass p-6 md:p-7">
            <ul className="divide-y divide-white/5">
              {wireframeCoverage.map(([need, screen]) => (
                <li
                  key={need}
                  className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 text-sm"
                >
                  <span className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={16} className="text-mint shrink-0" />
                    {need}
                  </span>
                  <span className="text-slate-400 sm:text-right">{screen}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="?milestone=3#wireframe-driver"
            className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-mint hover:underline"
          >
            See the wireframes in Milestone 3 <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <section id="m4-conclusions" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="06 / Conclusions"
            title="What the personas tell us"
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="glass p-7">
              <CarFront className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-3">Demand is real, but cheap to work around</h3>
              <p className="muted text-sm">
                Drivers like Radu face the problem often, yet already cope by
                blocking someone, paying for public parking or leaving the car
                at home. ParkX only wins if the spot is exactly where and when
                he needs it, and if he can actually get in.
              </p>
            </article>
            <article className="glass p-7">
              <ParkingCircle className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-3">Supply is the hard side</h3>
              <p className="muted text-sm">
                Owners like Elena don't need the income and don't trust
                strangers; many spots are occupied or behind a barrier. The
                owner's Must stories (choosing who books, temporary access,
                taking the spot back) exist to remove these objections, and
                they are the riskiest assumptions to validate next.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

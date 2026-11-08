import React from "react";
import { ArrowRight, ArrowUpRight, CarFront, ParkingCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

const figmaPrototypePath =
  "GFbZHJfouVkcyMYhAYc4nz/Wireframe-IAS?node-id=2003-471&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2003%3A444";
const figmaPrototypeUrl = `https://www.figma.com/proto/${figmaPrototypePath}`;
const figmaEmbedUrl = `https://embed.figma.com/proto/${figmaPrototypePath}&embed-host=parkx`;

const driverScreens = [
  {
    id: "start",
    name: "Ecran Start",
    subtitle: "Start screen",
    image: "/wireframes/start.png",
    text: "The first screen splits users by intent: drivers looking for a spot and owners with a spot to rent. Returning users can sign in from the link at the bottom.",
    actions: [
      ["Caut loc de parcare", "Harta Locuri"],
      ["Am un loc de închiriat", "Adaugă loc"],
    ],
  },
  {
    id: "map",
    name: "Harta Locuri",
    subtitle: "Map and search",
    image: "/wireframes/map.png",
    text: "Drivers search by destination and time window, switch between hourly and monthly prices, and see available spots on a map with price pins. The list below is sorted by distance and shows walking time, access type and how long each spot is free.",
    actions: [
      ["Tap a spot card or pin", "Detalii loc"],
      ["Rezervări tab", "Rezervare activă"],
      ["Profil tab", "Profil șofer"],
    ],
  },
  {
    id: "spot-details",
    name: "Detalii loc",
    subtitle: "Spot details",
    image: "/wireframes/spot-details.png",
    text: "Photos, hourly and monthly price, weekly availability and how to get in. Only the area is shown before booking; the exact address and access code are sent after payment. A verified-owner badge and a refund or alternative-spot promise address trust.",
    actions: [["Rezervă", "Rezervare"]],
  },
  {
    id: "booking",
    name: "Rezervare",
    subtitle: "Booking and payment",
    image: "/wireframes/booking.png",
    text: "The driver picks the start and end time, confirms the plate number and the saved card, and sees the full price split into parking cost and service fee. Accepting the spot's rules is required before paying.",
    actions: [["Confirmă și plătește", "Rezervare activă"]],
  },
  {
    id: "active-booking",
    name: "Rezervare activă",
    subtitle: "Active booking",
    image: "/wireframes/active-booking.png",
    text: "After payment the driver gets a countdown of the remaining time, step-by-step entry instructions with the barrier code and a photo of the entrance. From here they can navigate, extend the booking or report that the spot is occupied.",
    actions: [
      ["Navighează", "Opens navigation to the spot"],
      ["Prelungește", "Extends the booking"],
      ["Locul e ocupat – raportează", "Support: refund or nearby spot"],
    ],
  },
  {
    id: "driver-profile",
    name: "Profil șofer",
    subtitle: "Driver profile",
    image: "/wireframes/driver-profile.png",
    text: "Verified driver account with the saved car, bookings history, payment methods, notifications and support. The same account can switch to owner mode.",
    actions: [["Treci pe modul proprietar", "Panou proprietar"]],
  },
];

const ownerScreens = [
  {
    id: "add-spot",
    name: "Adaugă loc",
    subtitle: "Add a spot · step 1 of 2",
    image: "/wireframes/add-spot.png",
    text: "The owner chooses the type of spot (apartment block, underground, garage, yard, company car park), enters the address, picks how drivers get in (open access, barrier code, remote, guard or reception) and adds photos of the spot and entrance.",
    actions: [["Continuă", "Disponibilitate"]],
  },
  {
    id: "availability",
    name: "Disponibilitate",
    subtitle: "Availability and price · step 2 of 2",
    image: "/wireframes/availability.png",
    text: "A weekly schedule shows when the spot is free, with an option to repeat every week. The owner sets an hourly price, an optional monthly price, and who can book: any verified driver or only residents of the area.",
    actions: [["Publică locul", "Panou proprietar"]],
  },
  {
    id: "owner-dashboard",
    name: "Panou proprietar",
    subtitle: "Owner dashboard",
    image: "/wireframes/owner-dashboard.png",
    text: "The owner sees this month's earnings, each spot's live status (for example occupied until 19:00 by a given plate number) and upcoming bookings. They can contact the driver, report a problem or edit availability.",
    actions: [
      ["+ Adaugă", "Adaugă loc"],
      ["Editează disponibilitatea", "Disponibilitate"],
      ["Câștiguri tab", "Câștiguri"],
      ["Profil tab", "Profil proprietar"],
    ],
  },
  {
    id: "earnings",
    name: "Câștiguri",
    subtitle: "Earnings",
    image: "/wireframes/earnings.png",
    text: "Earnings by week, month or year, with a daily chart, the date of the next automatic payout to the owner's bank account and a list of recent bookings.",
    actions: [["Locuri tab", "Panou proprietar"]],
  },
  {
    id: "owner-profile",
    name: "Profil proprietar",
    subtitle: "Owner profile",
    image: "/wireframes/owner-profile.png",
    text: "Verified owner identity, the bank account for payouts, listed spots, documents and verification, and the rules shown to drivers. The owner can switch to driver mode at any time.",
    actions: [["Treci pe modul șofer", "Profil șofer"]],
  },
];

const discoveryLinks = [
  [
    "Access was a blocker for owners",
    "Adaugă loc asks how drivers get in, and Rezervare activă gives step-by-step entry instructions with the code and an entrance photo.",
  ],
  [
    "Owners are cautious about strangers",
    "Owners can limit bookings to residents of the area, the exact address is shared only after booking, and both sides are verified.",
  ],
  [
    "Some needs are monthly, not hourly",
    "Search can switch between hourly and monthly prices, and owners can set an optional monthly price next to the hourly one.",
  ],
  [
    "Drivers want a guaranteed spot",
    "Each booking reserves a specific spot. If it is occupied on arrival, the driver can report it and get a nearby alternative or a refund.",
  ],
];

function FlowStrip({ screens }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {screens.map((screen, index) => (
        <React.Fragment key={screen.id}>
          {index > 0 && (
            <ArrowRight size={14} className="text-slate-600 shrink-0" />
          )}
          <a
            href={`#wf-${screen.id}`}
            className="rounded-full bg-white/[.035] border border-white/10 px-3 py-1 text-slate-300 hover:border-mint/40 hover:text-mint transition"
          >
            {screen.name}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}

function ScreenCard({ screen, step }) {
  return (
    <article id={`wf-${screen.id}`} className="glass p-5 flex flex-col scroll-mt-28">
      <a
        href={screen.image}
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl bg-black/30 border border-white/10 p-4 hover:border-mint/40 transition"
      >
        <img
          src={screen.image}
          alt={`${screen.name} wireframe`}
          className="mx-auto w-full max-w-[260px] h-auto rounded-lg"
          loading="lazy"
        />
      </a>
      <div className="mt-5 flex items-baseline gap-3">
        <span className="text-slate-600 font-bold">
          {String(step).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-bold text-lg leading-tight">{screen.name}</h3>
          <p className="text-mint text-xs mt-1">{screen.subtitle}</p>
        </div>
      </div>
      <p className="muted text-sm mt-3">{screen.text}</p>
      <div className="mt-auto pt-5">
        <div className="border-t border-white/10 pt-4">
          <span className="text-slate-500 text-xs font-bold tracking-widest">
            LEADS TO
          </span>
          <ul className="mt-2 space-y-1.5 text-xs">
            {screen.actions.map(([action, target]) => (
              <li key={action} className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-300">{action}</span>
                <ArrowRight size={12} className="text-slate-600" />
                <span className="text-slate-400">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Milestone3() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-140px] w-[520px] h-[520px] rounded-full bg-mint/10 blur-[110px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-14 md:pt-28 relative">
          <span className="pill">STARTUP ENGINEERING · MILESTONE 3</span>
          <h1 className="mt-7 text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Wireframes
            <br />
            <span className="text-mint">The skeleton of ParkX.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            {driverScreens.length + ownerScreens.length} mobile screens
            built as an interactive prototype in Figma. They show what each
            view contains, where features live and what happens when a button
            is pressed, for both sides of the marketplace: drivers and
            parking-space owners.
          </p>
        </div>
      </section>

      <nav
        aria-label="Wireframe sections"
        className="mx-auto max-w-6xl px-5 pb-10 flex gap-x-6 gap-y-3 flex-wrap text-sm text-slate-300"
      >
        {[
          ["wireframe-overview", "Overview"],
          ["wireframe-prototype", "Interactive prototype"],
          ["wireframe-driver", "Driver flow"],
          ["wireframe-owner", "Owner flow"],
          ["wireframe-discovery", "From discovery to screens"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="hover:text-mint transition">
            {label}
          </a>
        ))}
      </nav>

      <section id="wireframe-overview" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="01 / Overview"
            title="Two flows, one app"
            desc="Everyone starts on the same screen and chooses a side. One account can switch between driver and owner mode from the profile."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <article className="glass p-7">
              <CarFront className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-3">Driver flow</h3>
              <p className="muted text-sm mb-5">
                Find a spot near the destination, check how to get in, book
                and pay, then follow the entry instructions on arrival.
              </p>
              <FlowStrip screens={driverScreens} />
            </article>
            <article className="glass p-7">
              <ParkingCircle className="text-mint mb-5" size={26} />
              <h3 className="text-xl font-bold mb-3">Owner flow</h3>
              <p className="muted text-sm mb-5">
                List a spot in two steps, publish the hours it is free, then
                track bookings and payouts from the dashboard.
              </p>
              <FlowStrip screens={[driverScreens[0], ...ownerScreens]} />
            </article>
          </div>
          <p className="text-xs text-slate-500 mt-5">
            Wireframes are in Romanian, the language of our Bucharest users.
            Values such as [XX] lei and [N] are placeholders, not real prices.
            Click any screen to open it at full size.
          </p>
        </div>
      </section>

      <section id="wireframe-prototype" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="02 / Try it"
            title="Interactive prototype"
            desc="The clickable Figma prototype, embedded below. Tap the buttons on the screen to move between views, the same way the app would work."
          />
          <div className="glass p-3 md:p-4">
            <iframe
              title="ParkX interactive wireframe prototype"
              src={figmaEmbedUrl}
              className="w-full h-[calc(100svh-8rem)] min-h-[560px] max-h-[960px] rounded-xl bg-black/30"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <a
            href={figmaPrototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-mint hover:underline"
          >
            Open the prototype in Figma <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <section id="wireframe-driver" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="03 / Driver flow"
            title="Finding and booking a spot"
            desc="From the start screen to parking: search, compare, book and get in. The bottom tab bar (Caută, Rezervări, Profil) links the main driver screens."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {driverScreens.map((screen, index) => (
              <ScreenCard key={screen.id} screen={screen} step={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="wireframe-owner" className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="04 / Owner flow"
            title="Listing a spot and earning from it"
            desc="Owners reach this flow from the start screen or from the driver profile. The bottom tab bar (Locuri, Câștiguri, Profil) links the main owner screens."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ownerScreens.map((screen, index) => (
              <ScreenCard key={screen.id} screen={screen} step={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="wireframe-discovery" className="section bg-white/[.02]">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            tag="05 / Rationale"
            title="From discovery to screens"
            desc="Several features in the wireframe come directly from the Milestone 2 interviews and questionnaire."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {discoveryLinks.map(([title, text]) => (
              <article key={title} className="glass p-6">
                <span className="text-mint text-xs font-bold tracking-widest">
                  FINDING
                </span>
                <h3 className="font-bold mt-2">{title}</h3>
                <p className="muted text-sm mt-3">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

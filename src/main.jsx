import React from "react";
import { createRoot } from "react-dom/client";
import {
  CarFront,
  MapPin,
  Wallet,
  ArrowUpRight,
  ParkingCircle,
  Users,
  Target,
  ChartNoAxesCombined,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Mail,
  ArrowRight,
  Menu,
  Building2,
  Smartphone,
  MessagesSquare,
  CalendarClock,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import "./index.css";

const team = [
  {
    name: "Andrei Manea",
    role: "Project Lead",
    email: "iulian.andrei.manea@gmail.com",
    photo: "/Andrei M.jpeg",
  },
  {
    name: "Vanessa Cupșan",
    role: "UX & User Research Lead",
    email: "teodoravanessacupsan2004@gmail.com",
    photo: "/Vanessa.jpeg",
  },
  {
    name: "Andrei Lungu",
    role: "Business & Marketing Analyst",
    email: "andreitudorlungu01@gmail.com",
    photo: "/Andrei L.jpeg",
  },
  {
    name: "Croitoriu Cosmin",
    role: "Full Stack Developer",
    email: "member4@example.com",
    photo: "/Cosmin.jpeg",
  },
];

const metrics = [
  [
    "Active parking listings",
    "Supply",
    "Number of spaces with at least one available time slot in the last 30 days.",
  ],
  [
    "Completed bookings",
    "Demand",
    "Number of bookings finished and paid per month.",
  ],
  [
    "Booking conversion rate",
    "Product",
    "Completed bookings ÷ searches (or booking attempts).",
  ],
  [
    "Platform commission revenue",
    "Business",
    "Completed bookings × average booking value × commission rate.",
  ],
  [
    "Space utilization rate",
    "Supply",
    "Booked hours ÷ hours made available by owners.",
  ],
  [
    "Repeat booking rate",
    "Retention",
    "Share of drivers who book again within 30 days.",
  ],
  [
    "Average booking value",
    "Business",
    "Total paid by drivers ÷ completed bookings.",
  ],
  [
    "Owner and driver rating",
    "Trust",
    "Average rating given after each booking.",
  ],
];

const revenueStreams = [
  {
    icon: Wallet,
    title: "Driver service fee",
    text: "A small fixed fee added at checkout to cover payment processing and support.",
    note: "Risk: it can lower conversion if drivers compare prices.",
  },
  {
    icon: BadgeCheck,
    title: "Featured listings for owners",
    text: "Owners pay to have their space shown higher in search results, for example in high-demand areas.",
    note: "Only makes sense once there are enough listings to compete.",
  },
  {
    icon: Building2,
    title: "Business plan for offices and companies",
    text: "A monthly subscription for companies that list many spaces, with tools such as bulk availability, reports and a dedicated dashboard.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Agreements with employers, residential complexes or event venues that offer ParkX bookings to their people or visitors.",
  },
];

const business = [
  {
    title: "Customer segments",
    icon: Users,
    text: "Drivers seeking convenient hourly parking; owners with unused private parking spaces. See the Customer segments chapter for details.",
  },
  {
    title: "Competition",
    icon: Target,
    text: "Public parking, parking garages, parking apps, and other peer-to-peer parking marketplaces. See the Competition chapter for the Bucharest landscape.",
  },
  {
    title: "Differentiation",
    icon: ShieldCheck,
    text: "Focus on unlocking underused private parking inventory with flexible hourly availability. A hypothesis to validate. See the Differentiation chapter for details.",
  },
  {
    title: "Cost structure",
    icon: Wallet,
    text: "Hosting, maps, payment processing, development, maintenance, customer support, and marketing.",
  },
];

const segments = [
  {
    name: "Commuters",
    side: "Drivers · demand",
    icon: CarFront,
    who: "People who drive to work in busy office areas and need a spot for the whole working day.",
    need: "A reserved spot near the office for fixed hours, cheaper and more predictable than a garage or street parking.",
  },
  {
    name: "Residents & evening visitors",
    side: "Drivers · demand",
    icon: Users,
    who: "Residents and their guests in crowded neighbourhoods, where street spots run out in the evening.",
    need: "A safe spot for the evening or overnight, close to home, without circling the block.",
  },
  {
    name: "Occasional trips",
    side: "Drivers · demand",
    icon: MapPin,
    who: "Drivers going to the city centre for appointments, events, shopping or a night out.",
    need: "A spot booked in advance for a few hours, so they know where they will park before leaving.",
  },
  {
    name: "Apartment owners",
    side: "Space owners · supply",
    icon: ParkingCircle,
    who: "People with a private spot in an apartment complex that sits empty while they are at work or away.",
    need: "Extra income from the spot during the hours they don't use it, with full control over when it is available.",
  },
  {
    name: "House owners",
    side: "Space owners · supply",
    icon: Wallet,
    who: "Owners of houses with a free driveway or garage, especially in central or busy areas.",
    need: "An easy way to earn from unused space, with verified drivers and payment handled for them.",
  },
  {
    name: "Small businesses & offices",
    side: "Space owners · supply",
    icon: Building2,
    who: "Companies whose parking spaces are full during the day but unused in the evening and at weekends.",
    need: "Revenue from idle spaces outside working hours, without hiring staff to manage it.",
  },
];

const competitors = [
  {
    name: "Parking București",
    type: "Municipal street-parking app",
    icon: Smartphone,
    what: "The official app of Compania Municipală Parking București for paying public street parking (5 lei/hour, no commission). Since 27 February 2026, parking in the city-run zones can only be paid digitally.",
    gap: "Only covers public street spots. Payment does not guarantee a free spot, so drivers still have to search for one.",
    sources: [
      [
        "bucuresti.ro – Parking in Bucharest in 2026",
        "https://www.bucuresti.ro/articole/parcare-in-bucuresti-in-2026-zone-tarife-aplicatii-si-cum-eviti-amenzile-1336",
      ],
      [
        "Jurnalul – new rules from 27 Feb 2026",
        "https://jurnalul.ro/stiri/locale/parcarea-bucuresti-plata-digitala-reguli-noi-2026-concedieri-1025491.html",
      ],
      [
        "News București – app features",
        "https://newsbucuresti.ro/plata-parcarii-in-bucuresti-direct-din-aplicatie-ce-functii-pot-folosi-soferii/",
      ],
    ],
  },
  {
    name: "AmParcat",
    type: "Private street-parking payment app",
    icon: Smartphone,
    what: "The best-known private alternative for paying public parking in Bucharest and 20+ other cities, with Apple Pay, Google Pay, Revolut Pay, automatic extension and extras such as insurance for the parking period.",
    gap: "Like the city app, it is a payment tool for street parking. It does not add new spaces or allow reservations.",
    sources: [
      ["amparcat.ro", "https://amparcat.ro/"],
      [
        "AmParcat – Bucharest zones & fees",
        "https://amparcat.ro/oras/bucuresti/",
      ],
      [
        "Google Play – AmParcat",
        "https://play.google.com/store/apps/details?id=com.tapptitude.amparcat",
      ],
    ],
  },
  {
    name: "Interparking & commercial garages",
    type: "Parking operators",
    icon: Building2,
    what: "Underground and multi-storey car parks (e.g. Piața Universității) and mall or office garages, paid by the hour.",
    gap: "Fixed, central locations with operator pricing. Little coverage in residential neighbourhoods, where demand is high in the evening.",
    sources: [
      [
        "Interparking – Piața Universității",
        "https://www.interparking.ro/en/parkings/bucharest/piata-universitatii/",
      ],
    ],
  },
  {
    name: "ParkApp.ro",
    type: "Parking rental listings",
    icon: MapPin,
    what: "A map of private parking spaces and garages for rent in Bucharest and 30+ other cities, free to use, with direct contact with the owner. Bucharest listings are priced per month.",
    gap: "Monthly rentals only. No hourly booking or in-app payment, and the details are negotiated directly between people.",
    sources: [["parkapp.ro", "https://www.parkapp.ro/"]],
  },
  {
    name: "yeParking",
    type: "Parksharing app",
    icon: Users,
    what: "A Romanian app where drivers share their parking spots for minutes or hours. It is active mainly in Cluj, Brașov, Oradea and Iași, and also sells smart-barrier systems for car parks.",
    gap: "Built around community sharing rather than a paid hourly marketplace, with little presence in Bucharest. Its 2021 Bucharest pilot for residential complexes has had no recent coverage.",
    sources: [
      [
        "Google Play – yeParking",
        "https://play.google.com/store/apps/details?id=ro.digitalrepublic.yeparking",
      ],
      [
        "App Store – yeParking",
        "https://apps.apple.com/ro/app/yeparking/id1352934626?l=ro",
      ],
      [
        "Economica.net – Bucharest pilot (2021)",
        "https://www.economica.net/aplicatia-prin-care-inchiriezi-locul-de-parcare-ar-putea-fi-disponibila-si-pentru-locurile-din-cladirile-de-birouri-din-bucuresti_196631.html",
      ],
    ],
  },
  {
    name: "Facebook groups, OLX, AnuntParcari",
    type: "Informal classifieds",
    icon: MessagesSquare,
    what: "Where most private parking spots in Bucharest are rented today, through posts and ads for monthly or long-term use.",
    gap: "No verification, no booking calendar, no secure payment, and no short-term use.",
    sources: [
      [
        "OLX – parking spots for rent, Bucharest",
        "https://www.olx.ro/imobiliare/paracari-si-garaje/bucuresti/q-inchiriez-loc-parcare/",
      ],
      [
        "AnuntParcari.ro – Bucharest",
        "https://anuntparcari.ro/parcari-bucuresti",
      ],
    ],
  },
];

const advantages = [
  {
    icon: CalendarClock,
    title: "Hourly, not only monthly",
    text: "Owners publish the exact hours their space is free (e.g. weekdays 9–18 while they are at work). Drivers book just the hours they need.",
  },
  {
    icon: ParkingCircle,
    title: "A guaranteed spot, not a hunt",
    text: "Unlike street-parking apps, a ParkX booking reserves a specific space, so the driver knows where they will park before leaving.",
  },
  {
    icon: Wallet,
    title: "Payment handled in the app",
    text: "Booking and payment happen in one flow. Owners are paid automatically, with no cash and no negotiation as in classifieds and groups.",
  },
  {
    icon: BadgeCheck,
    title: "Trust between strangers",
    text: "Verified listings, ratings for drivers and owners, and clear access instructions. This is what informal groups lack.",
  },
  {
    icon: Handshake,
    title: "New supply in residential areas",
    text: "We unlock idle private spaces in apartment complexes, houses and offices, the neighbourhoods garages and street parking don't cover well.",
  },
  {
    icon: Target,
    title: "Built for Bucharest",
    text: "Focused on Bucharest, where demand is high and street spots are scarce, rather than being a generic international platform.",
  },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="brand text-2xl font-bold flex items-center gap-2"
        >
          <span className="bg-mint text-night p-2 rounded-xl">
            <CarFront size={22} />
          </span>
          Park<span className="text-mint -ml-2">X</span>
        </a>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
        <div
          className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-20 left-0 right-0 bg-night md:bg-transparent p-5 md:p-0 flex-col md:flex-row gap-5 md:gap-8 text-sm text-slate-300`}
        >
          {[
            ["#about", "Overview"],
            ["#team", "Team"],
            ["#business", "Business model"],
            ["#customers", "Customers"],
            ["#competition", "Competition"],
            ["#differentiation", "Differentiation"],
            ["#milestones", "Milestones"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-mint transition"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
function SectionHeading({ tag, title, desc }) {
  return (
    <div className="mb-10">
      <div className="text-mint uppercase text-xs font-bold tracking-[.25em] mb-4">
        {tag}
      </div>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="muted max-w-2xl">{desc}</p>}
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute right-[-120px] top-[-140px] w-[520px] h-[520px] rounded-full bg-mint/10 blur-[110px] pointer-events-none" />
          <div className="mx-auto max-w-6xl px-5 pt-24 pb-24 md:pt-36 md:pb-36 relative">
            <span className="pill">STARTUP ENGINEERING · MILESTONE 1</span>
            <h1 className="mt-7 text-5xl md:text-7xl font-bold tracking-tight leading-[1.06] max-w-4xl">
              Your space. Their spot.
              <br />
              <span className="text-mint">Everyone wins.</span>
            </h1>
            <p className="mt-7 text-lg text-slate-300 max-w-2xl leading-relaxed">
              ParkX connects drivers with owners of unused private parking
              spaces. Drivers book and pay by the hour, owners earn from idle
              space, and ParkX earns a commission per booking.
            </p>
            <div className="flex gap-4 flex-wrap mt-9">
              <a
                href="#about"
                className="bg-mint text-night px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-green-300"
              >
                Explore the project <ArrowRight size={18} />
              </a>
              <a
                href="#milestones"
                className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:border-mint"
              >
                View milestones
              </a>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-4">
              {[
                [
                  MapPin,
                  "Find a spot",
                  "Discover an available private parking space.",
                ],
                [
                  ParkingCircle,
                  "Book by the hour",
                  "Reserve the space and pay for the time needed.",
                ],
                [
                  Wallet,
                  "Earn from unused space",
                  "Owners monetize idle spaces; ParkX takes a commission.",
                ],
              ].map(([Icon, title, desc], i) => (
                <div className="glass p-6" key={title}>
                  <div className="flex justify-between mb-5">
                    <Icon className="text-mint" size={28} />
                    <span className="text-slate-600 font-bold">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="muted text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="section bg-white/[.02]">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="01 / Project overview"
              title="A smarter way to use the spaces we already have."
              desc="Our goal is to make parking more accessible while creating value from private spaces that would otherwise sit empty."
            />
            <div className="grid md:grid-cols-2 gap-5">
              <article className="glass p-8">
                <span className="text-rose-400 text-xs font-bold tracking-widest">
                  THE PROBLEM
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">
                  Parking demand meets idle supply.
                </h3>
                <p className="muted">
                  Drivers can spend time searching for suitable parking, while
                  privately owned spaces may remain unused for parts of the day.
                  Finding and arranging access to these spaces is not always
                  straightforward.
                </p>
              </article>
              <article className="glass p-8 border-mint/20">
                <span className="text-mint text-xs font-bold tracking-widest">
                  OUR SOLUTION
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">
                  A peer-to-peer parking marketplace.
                </h3>
                <p className="muted">
                  Owners list spaces and available hours. Drivers discover,
                  reserve, and pay for parking by the hour. The owner receives
                  booking earnings and the platform retains a commission.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="team" className="section">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="02 / The people"
              title="Meet the team"
              desc="The people building ParkX. Replace the placeholders with your team's names, roles, photos, and university or project email addresses."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {team.map((p, i) => (
                <div className="glass p-7" key={i}>
                  <div className="h-44 bg-gradient-to-br from-slate-700/50 to-mint/10 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                    {p.photo ? (
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="text-slate-500" size={55} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-mint text-sm mt-1 mb-4">{p.role}</p>
                  <a
                    href={`mailto:${p.email}`}
                      className="text-sm text-slate-400 flex items-start gap-2 hover:text-white"
                    >
                      <Mail size={15} className="shrink-0 mt-0.5" />
                    <span className="min-w-0 break-all">{p.email}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="business" className="section bg-white/[.02]">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="03 / Business model"
              title="How ParkX creates value"
              desc="An initial business hypothesis to test with real drivers and parking-space owners."
            />
            <div className="grid md:grid-cols-2 gap-5">
              {business.map(({ title, icon: Icon, text }) => (
                <div key={title} className="glass p-7">
                  <Icon className="text-mint mb-5" size={26} />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="muted text-sm">{text}</p>
                </div>
              ))}
            </div>
            <div className="glass p-8 mt-5 border-mint/20">
              <span className="text-mint text-xs font-bold tracking-widest">
                PRIMARY · PLANNED FOR LAUNCH
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-3">
                Revenue stream: commission per booking
              </h3>
              <p className="muted">
                ParkX earns a percentage of each completed booking, taken from
                the amount paid by the driver. The owner receives the rest
                automatically. This is the core stream because it grows with the
                number of bookings and only costs the owner when they earn.
              </p>
              <p className="muted mt-3">
                Example only: on a 20 RON booking with a hypothetical 15%
                commission, the owner receives 17 RON and ParkX receives 3 RON
                before transaction fees and other costs.
              </p>
              <div className="mt-6 h-4 rounded-full overflow-hidden flex">
                <div className="bg-mint w-[85%]" />
                <div className="bg-sky-400 w-[15%]" />
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-400">
                <span>85% owner earnings</span>
                <span>15% platform commission</span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
                <Wallet className="text-mint" /> Secondary revenue streams
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {revenueStreams.map(({ icon: Icon, title, text, note }) => (
                  <div key={title} className="glass p-5 flex flex-col">
                    <Icon className="text-mint mb-4" size={22} />
                    <span className="text-xs text-slate-500 font-bold tracking-widest">
                      HYPOTHESIS
                    </span>
                    <h4 className="font-semibold mt-2">{title}</h4>
                    <p className="muted text-sm mt-2">{text}</p>
                    {note && (
                      <p className="text-xs text-slate-500 mt-3">{note}</p>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-5">
                Only the commission is planned for launch; the other streams are
                options to test after we reach enough listings and bookings.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-5 flex items-center gap-3">
                <ChartNoAxesCombined className="text-mint" /> Key metrics
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map(([name, type, how]) => (
                  <div key={name} className="glass p-5">
                    <span className="text-xs text-mint">{type}</span>
                    <h4 className="font-semibold mt-3">{name}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {how}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-5">
                Illustrative example only: 1,000 completed bookings per month at
                an average of 20 RON and a 15% commission would generate 3,000
                RON in commission revenue, before transaction fees and other
                costs. Metrics will be tracked after launch.
              </p>
            </div>
          </div>
        </section>
        <section id="customers" className="section">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="04 / Customer segments"
              title="Who we build ParkX for"
              desc="ParkX is a two-sided marketplace: drivers looking for a spot and owners of private spaces that sit empty. These are the main groups on each side."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {segments.map(({ name, side, icon: Icon, who, need }) => (
                <div key={name} className="glass p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/5 p-2 rounded-xl">
                      <Icon className="text-slate-300" size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {name}
                      </h3>
                      <span className="text-xs text-slate-500">{side}</span>
                    </div>
                  </div>
                  <p className="muted text-sm">{who}</p>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-mint text-xs font-bold tracking-widest">
                      WHAT THEY NEED
                    </span>
                    <p className="text-sm text-slate-300 mt-2">{need}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-5">
              Initial segments based on our assumptions, to be validated
              through interviews with drivers and parking-space owners.
            </p>
          </div>
        </section>
        <section id="competition" className="section bg-white/[.02]">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="05 / Competition"
              title="Who else helps people park in Bucharest"
              desc="Bucharest drivers already have several options, but none of them lets you book someone's private parking space by the hour. Here is how ParkX compares."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {competitors.map(({ name, type, icon: Icon, what, gap, sources }) => (
                <div key={name} className="glass p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/5 p-2 rounded-xl">
                      <Icon className="text-slate-300" size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {name}
                      </h3>
                      <span className="text-xs text-slate-500">{type}</span>
                    </div>
                  </div>
                  <p className="muted text-sm">{what}</p>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-rose-400 text-xs font-bold tracking-widest">
                      THE GAP
                    </span>
                    <p className="text-sm text-slate-300 mt-2">{gap}</p>
                  </div>
                  <div className="mt-auto pt-5">
                    <span className="text-slate-500 text-xs font-bold tracking-widest">
                      SOURCES
                    </span>
                    <ul className="mt-2 space-y-1">
                      {sources.map(([label, url]) => (
                        <li key={url}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-400 hover:text-mint inline-flex items-center gap-1"
                          >
                            {label} <ArrowUpRight size={12} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Based on the public sources listed on each card, checked in
              October 2026.
            </p>
          </div>
        </section>
        <section id="differentiation" className="section">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="06 / Differentiation"
              title="What ParkX brings to the market"
              desc="ParkX fills the gaps the competition leaves: hourly bookings of private spaces, with a guaranteed spot and payment handled in the app."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {advantages.map(({ icon: Icon, title, text }) => (
                <div key={title} className="glass p-7">
                  <Icon className="text-mint mb-5" size={26} />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="muted text-sm">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-5">
              Our differentiation is a hypothesis we will validate with drivers
              and parking-space owners.
            </p>
          </div>
        </section>
        <section id="milestones" className="section bg-white/[.02]">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              tag="07 / Project journey"
              title="Milestones & progress"
              desc="The Fiki grows with each startup engineering milestone. All updates stay on this one page."
            />
            <div className="space-y-4">
              <div className="glass p-6 flex gap-5 items-start border-mint/30">
                <CheckCircle2 className="text-mint shrink-0" />
                <div>
                  <div className="text-xs text-mint font-bold">
                    M1 · PROJECT DESCRIPTION
                  </div>
                  <h3 className="font-bold text-xl mt-1">
                    Project concept & business model
                  </h3>
                  <p className="muted text-sm mt-2">
                    Problem, solution, team, customer segments, competition,
                    differentiation, key metrics, costs, and revenue streams.
                  </p>
                  <span className="text-xs text-slate-500 mt-3 block">
                    Prepared for submission · confirm submission status
                  </span>
                </div>
              </div>
              <div className="glass p-6 flex gap-5 items-start">
                <Clock3 className="text-slate-500 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-bold">
                    UPCOMING MILESTONES
                  </div>
                  <h3 className="font-bold text-xl mt-1">
                    To be added as requirements are announced
                  </h3>
                  <p className="muted text-sm mt-2">
                    Add course-specific deliverables, links, screenshots,
                    architecture diagrams, and demos here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-9 flex flex-col sm:flex-row justify-between gap-3 text-sm text-slate-400">
          <span className="brand text-lg font-bold text-white">
            Park<span className="text-mint">X</span>
          </span>
          <span>Startup Engineering Project · Project Fiki</span>
          <a href="#top" className="hover:text-mint">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);

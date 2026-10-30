import React from "react";
import { createRoot } from "react-dom/client";
import { CarFront } from "lucide-react";
import MilestoneOne from "./milestones/Milestone1.jsx";
import MilestoneTwo from "./milestones/Milestone2.jsx";
import Milestone3 from "./milestones/Milestone3.jsx";
import Milestone4 from "./milestones/Milestone4.jsx";
import Milestone5 from "./milestones/Milestone5.jsx";
import Milestone6 from "./milestones/Milestone6.jsx";
import Milestone7 from "./milestones/Milestone7.jsx";
import Milestone8 from "./milestones/Milestone8.jsx";
import Milestone9 from "./milestones/Milestone9.jsx";
import "./index.css";

const milestones = Array.from({ length: 9 }, (_, index) => index + 1);
const milestonePages = [
  MilestoneOne,
  MilestoneTwo,
  Milestone3,
  Milestone4,
  Milestone5,
  Milestone6,
  Milestone7,
  Milestone8,
  Milestone9,
];

function getMilestoneFromUrl() {
  const milestone = Number(
    new URLSearchParams(window.location.search).get("milestone"),
  );
  return milestones.includes(milestone) ? milestone : 1;
}

function Header({ activeMilestone, onMilestoneChange }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-xl">
      <nav
        aria-label="Project milestones"
        className="mx-auto max-w-6xl px-5 h-20 flex items-center gap-6"
      >
        <a
          href="#top"
          className="brand text-2xl font-bold flex items-center gap-2"
        >
          <span className="bg-mint text-night p-2 rounded-xl">
            <CarFront size={22} />
          </span>
          Park<span className="text-mint -ml-2">X</span>
        </a>
        <div className="flex-1 min-w-0 flex items-center justify-between gap-5 overflow-x-auto text-sm text-slate-300">
          {milestones.map((milestone) => (
            <button
              key={milestone}
              type="button"
              aria-current={activeMilestone === milestone ? "step" : undefined}
              onClick={() => onMilestoneChange(milestone)}
              className={`shrink-0 whitespace-nowrap transition hover:text-mint ${
                activeMilestone === milestone
                  ? "font-bold text-mint"
                  : ""
              }`}
            >
              Milestone {milestone}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function App() {
  const [activeMilestone, setActiveMilestone] = React.useState(
    getMilestoneFromUrl,
  );
  const MilestonePage = milestonePages[activeMilestone - 1];

  React.useEffect(() => {
    const handlePopState = () => setActiveMilestone(getMilestoneFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function selectMilestone(milestone) {
    const url = new URL(window.location.href);
    url.searchParams.set("milestone", milestone);
    url.hash = "";
    window.history.pushState(null, "", url);
    setActiveMilestone(milestone);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header
        activeMilestone={activeMilestone}
        onMilestoneChange={selectMilestone}
      />
      <main id="top">
        <MilestonePage />
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

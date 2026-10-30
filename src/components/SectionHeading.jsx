import React from "react";

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

export default SectionHeading;

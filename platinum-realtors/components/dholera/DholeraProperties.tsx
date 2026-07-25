"use client";
import { useState } from "react";
import Image from "next/image";

const carouselImages = [
  "/dholera/interior-1.jpg",
  "/dholera/interior-2.jpg",
  "/dholera/interior-3.jpg",
  "/dholera/interior-4.jpg",
  "/dholera/interior-5.jpg",
  "/dholera/interior-6.jpg",
];

type PlotSize = { size: string; highlight?: boolean };

type PropertyGroup = {
  label: string;
  sectionTitle?: string;
  sectionIntro?: string;
  sizes: PlotSize[];
};

const propertyGroups: PropertyGroup[] = [
  {
    label: "Dholera",
    sectionTitle: "Residential Properties",
    sectionIntro:
      "Explore premium residential plots in Dholera with smart infrastructure, legal RERA compliance, and excellent connectivity via the Ahmedabad-Dholera Expressway.",
    sizes: [{ size: "207 Sq. Yds." }, { size: "90 Sq. Yds." }, { size: "137 Sq. Yds.", highlight: true }],
  },
  {
    label: "Dholera SIR",
    sizes: [{ size: "388 Sq. Yds." }, { size: "1000 Sq. Yds.", highlight: true }],
  },
  {
    label: "Dholera SIR",
    sectionTitle: "Industrial Properties",
    sectionIntro:
      "Large-format industrial plots in Dholera Special Investment Region — designed for manufacturing, logistics, and commercial enterprise with world-class utility networks.",
    sizes: [{ size: "2000 Sq. Yds.", highlight: true }, { size: "4000 Sq. Yds." }],
  },
];

function StripeCluster() {
  const bars = 7;
  const barWidth = 6;
  const gap = 13;
  const step = barWidth + gap;

  return (
    <div className="dh-stripe-cluster" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
       <span
       key={i}
       className="dh-stripe-bar-outer"
       style={{
           left:`${i*18}px`
       }}
   />
      ))}
    </div>
  );
}

function PlotCarousel({ images, startIndex }: { images: string[]; startIndex: number }) {
  const [index, setIndex] = useState(startIndex);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const visible = [0, 1, 2, 3].map((i) => images[(index + i) % images.length]);

  return (
    <div className="dh-carousel-block">
      <div className="dh-carousel-row">
        <button type="button" className="dh-carousel-arrow dh-carousel-arrow-left" onClick={prev} aria-label="Previous images">&#10094;</button>
        <div className="dh-carousel-images">
          {visible.map((img, i) => (
            <div className="dh-carousel-image-box" key={i}>
              <Image src={img} alt={`Property view ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 20vw, 120px" />
            </div>
          ))}
        </div>
        <button type="button" className="dh-carousel-arrow dh-carousel-arrow-right" onClick={next} aria-label="Next images">&#10095;</button>
      </div>
    </div>
  );
}

export default function DholeraProperties() {
  let carouselOffset = 0;

  return (
    <>
      <style>{`
        .dh-props {
          background: #fff;
          padding: 8px 0 32px;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          /* single source of truth for the side gutter, reused below */
          --dh-pad: clamp(24px, 5vw, 56px);
        }
        .dh-props-inner { width: 100%; margin: 0 auto; padding: 0 var(--dh-pad); }

        .dh-section-title { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(17px, 3vw, 26px); font-weight: 700; color: #1a1a1a; margin: 20px 0 6px; }
        .dh-section-underline { width: 48px; height: 2px; background: #D7172A; margin: 0 auto 10px; }
        .dh-section-intro { text-align: center; font-size: clamp(11px, 1.1vw, 13px); line-height: 1.6; color: #555; max-width: 640px; margin: 0 auto 18px; }

        .dh-group-label-row { display: flex; align-items: center; margin: 18px 0 10px; gap: 10px; }
        .dh-group-label {
          background: #D7172A;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: clamp(14px, 1.6vw, 18px);
          font-weight: 700;
          padding: 10px 26px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .dh-group-arrow { color: #D7172A; font-size: 20px; font-weight: 400; line-height: 1; flex-shrink: 0; }

        /* Plot block reserves space on the right for the stripe. The stripe
           itself bleeds past this block's own right edge by exactly --dh-pad,
           so it lands flush on the true outer edge of .dh-props instead of
           stopping at the padded content edge. */
 
        .dh-plot-size { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(15px, 2.2vw, 22px); font-weight: 600; color: #1a1a1a; margin: 6px 0 10px; }
        .dh-plot-size.highlight { position: relative; display: inline-block; width: 100%; }
        .dh-plot-size.highlight::after { content: ""; position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); width: 40px; height: 2px; background: #D7172A; }

   .dh-plot-block{
    position: relative;
    margin-bottom: 38px;
    padding-top: 10px;
}

        .dh-carousel-block{

    position:relative;

    z-index:2;

    width:100%;
}
       .dh-carousel-row{

    display:flex;

    align-items:center;

    justify-content:center;

    gap:18px;

    position:relative;

    z-index:2;
}
    .dh-carousel-images{

    margin-right:-80px;
}
        .dh-carousel-arrow { border: none; background: none; cursor: pointer; flex-shrink: 0; padding: 0; line-height: 1; transition: opacity 0.2s; align-self: center; }
        .dh-carousel-arrow-left { color: #D7172A; font-size: clamp(12px, 1.6vw, 16px); font-weight: 300; width: 14px; }
        .dh-carousel-arrow-right { color: #1a3041; font-size: clamp(9px, 1.2vw, 12px); width: 12px; }
        .dh-carousel-arrow:hover { opacity: 0.65; }
       
      .dh-stripe-box{
    position: absolute;

    /* Start from the top of the plot block (above the title) */
    top: 0;

    /* Extend to the bottom of the entire block */
    bottom: 0;

    /* Go to the edge of the viewport */
    right: calc(-50vw + 50%);

    width: 170px;

    overflow: hidden;
    z-index: 0;
    pointer-events: none;
}

       .dh-carousel-images{

    display:flex;

    width:82%;

    gap:3px;

    position:relative;

    z-index:2;
}
   .dh-carousel-image-box{
    position: relative;

    flex: 1 1 0;

    min-width: 0;

    height: 180px;   /* adjust between 110px–150px */

    overflow: hidden;
}

.dh-stripe-cluster{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
}
     .dh-stripe-bar-outer{
    position:absolute;

    top:-45%;

    width:8px;

    height:180%;

    background:#D71920;

    transform:rotate(55deg);
}
    .dh-plot-size{
    text-align:center;
    font-family:'Playfair Display',serif;
    font-size:clamp(15px,2.2vw,22px);
    font-weight:600;
    color:#1a1a1a;

    margin:20px 0 28px;

    position:relative;
    z-index:2;
}
    .dh-carousel-block{
    position: relative;
    z-index: 2;
}

        @media (max-width: 480px) {
          .dh-group-label { font-size: 13px; padding: 8px 18px; }
        }
      `}</style>

      <section className="dh-props" id="properties">
        <div className="dh-props-inner">
          {propertyGroups.map((group, gi) => (
            <div key={gi}>
              {group.sectionTitle && (
                <>
                  <h2 className="dh-section-title">{group.sectionTitle}</h2>
                  <div className="dh-section-underline" />
                  {group.sectionIntro && <p className="dh-section-intro">{group.sectionIntro}</p>}
                </>
              )}
              <div className="dh-group-label-row">
                <span className="dh-group-label">{group.label}</span>
                <span className="dh-group-arrow">&#8594;</span>
              </div>
              {group.sizes.map((plot, pi) => {
                const startIdx = carouselOffset;
                carouselOffset += 1;
                return (
                  <div className="dh-plot-block" key={pi}>
                    <div className="dh-stripe-box" aria-hidden="true">
                      <StripeCluster />
                    </div>
                    <h3 className={`dh-plot-size ${plot.highlight ? "highlight" : ""}`}>{plot.size}</h3>
                    <PlotCarousel images={carouselImages} startIndex={startIdx % carouselImages.length} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
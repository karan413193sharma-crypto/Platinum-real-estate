"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "Mohali",
    name: "Affinity Belgravia",
    description: "A testament to rarity & redefined taste, each residence at Affinity Belgravia is meticulously crafted for those who value exclusivity - with expansive floor plans, & every essential amenity required for elevated living. These remarkable homes are not just an address, but rather a symbol of distinction. Designed to create a lasting impression of luxury, Affinity Belgravia will undoubtedly capture admiration for years to come.",
    images: ["/images/affinity1.jpg", "/images/affinity2.jpg", "/images/affinity3.jpg", "/images/affinity4.jpg"],
    theme: "dark",
    bgImage: "/images/affinity-bg.png",
  },
  {
    id: 2,
    location: "",
    name: "Noble Callista",
    description: "Experience luxury redefined at Noble Callista, Mohali, where spacious premium apartments feature exquisite marble flooring and elegant gold-accented interiors. Large floor-to-ceiling windows and boutique-style finishes flood every room with natural light, seamlessly blending modern sophistication with ultimate comfort.",
    images: ["/images/noble1.png", "/images/noble2.jpg", "/images/noble3.png", "/images/noble4.jpg"],
    theme: "red",
    bgImage: "/images/noble-bg.png",
  },
];

export default function ResServicePlaces() {
  const [indices, setIndices] = useState<number[]>(projects.map(() => 0));

  const prev = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === 0 ? projects[pi].images.length - 1 : ci - 1) : ci));
  const next = (pi: number) => setIndices((prev) => prev.map((ci, i) => i === pi ? (ci === projects[pi].images.length - 1 ? 0 : ci + 1) : ci));

  return (
    <>
      <style>{`
        .rp-section { background: #ffffff; padding: 60px 0 20px; }
        .rp-project { width: 100%; max-width: 1240px; margin: 0 auto 18px; padding: 0 18px; }
        .rp-location { color: #d71920; font-size: 20px; font-weight: 700; margin-bottom: 24px; font-family: Georgia, serif; }
        .rp-card { position: relative; height: 500px; overflow: hidden; background-size: cover; background-position: center; background-repeat: no-repeat; }
        .rp-overlay { position: absolute; inset: 0; }
        .rp-card.dark .rp-overlay { background: rgba(0,0,0,.40); }
        .rp-card.red .rp-overlay { background: rgba(0,0,0,.38); }
        .rp-content { position: relative; z-index: 2; width: 100%; height: 100%; padding: 18px 20px 30px; display: flex; flex-direction: column; align-items: center; }
        .rp-title { color: #fff; font-family: Georgia,"Times New Roman",serif; font-size: 32px; font-weight: 700; margin-top: 6px; margin-bottom: 18px; text-align: center; line-height: 1; }
        .rp-description { color: #efefef; width: 94%; margin: 0 auto; text-align: left; font-size: 15px; line-height: 1.35; font-weight: 400; margin-bottom: 42px; }
        .rp-slider { width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .rp-arrow { width: 44px; height: 44px; border: none; background: none; color: #e21828; font-size: 42px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: .25s; user-select: none; }
        .rp-arrow:hover { transform: scale(1.15); }
        .rp-images { width: 90%; display: flex; justify-content: center; gap: 18px; }
        .rp-image-box { position: relative; width: 238px; height: 182px; border: 2px solid #df1b27; overflow: hidden; flex-shrink: 0; }
        .rp-image-box img { transition: .35s; }
        .rp-image-box:hover img { transform: scale(1.05); }
        @media(max-width:1200px){ .rp-card{ height:auto; padding-bottom:40px; } .rp-images{ flex-wrap:wrap; } }
        @media(max-width:992px){ .rp-title{ font-size:28px; } .rp-description{ font-size:14px; width:95%; } .rp-image-box{ width:210px; height:160px; } }
        @media(max-width:768px){ .rp-card{ padding-bottom:30px; } .rp-slider{ flex-direction:column; gap:20px; } .rp-arrow{ font-size:36px; } .rp-images{ width:100%; justify-content:center; gap:14px; } .rp-image-box{ width:46%; height:170px; } .rp-description{ text-align:center; width:100%; } }
        @media(max-width:480px){ .rp-location{ font-size:18px; } .rp-title{ font-size:24px; } .rp-description{ font-size:13px; line-height:1.6; } .rp-image-box{ width:100%; height:220px; } .rp-images{ flex-direction:column; align-items:center; } }
      `}</style>

      <section className="rp-section">
        {projects.map((project, pi) => {
          const start = indices[pi];
          const visibleImages = [0,1,2,3].map(i => project.images[(start + i) % project.images.length]);

          return (
            <div className="rp-project" key={project.id}>
              {project.location && <div className="rp-location">{project.location}</div>}
              <div className={`rp-card ${project.theme}`} style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className="rp-overlay" />
                <div className="rp-content">
                  <h2 className="rp-title">{project.name}</h2>
                  <p className="rp-description">{project.description}</p>
                  <div className="rp-slider">
                    <button className="rp-arrow" onClick={() => prev(pi)}>&#10094;</button>
                    <div className="rp-images">
                      {visibleImages.map((img, index) => (
                        <div className="rp-image-box" key={index}>
                          <Image src={img} alt={`${project.name}-${index}`} fill sizes="300px" style={{ objectFit: "cover" }} />
                        </div>
                      ))}
                    </div>
                    <button className="rp-arrow" onClick={() => next(pi)}>&#10095;</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
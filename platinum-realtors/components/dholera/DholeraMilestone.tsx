"use client";
import Image from "next/image";

export default function DholeraMilestone() {
  return (
    <>
      <style>{`
        .dh-milestone { background: #fff; padding: 80px 40px; }
        .dh-milestone-inner { max-width: 1240px; margin: 0 auto; }
        .dh-milestone-heading { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: #1a1a1a; margin: 0 0 12px; }
        .dh-milestone-underline { width: 80px; height: 3px; background: #D7172A; margin: 0 auto 48px; }
        .dh-milestone-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .dh-milestone-textbox { border: 2px solid #D7172A; padding: 32px 36px; }
        .dh-milestone-textbox p { font-size: 15px; line-height: 1.75; color: #333; margin: 0; }
        .dh-milestone-map { position: relative; width: 100%; aspect-ratio: 1; max-width: 520px; margin: 0 auto; }
        @media (max-width: 900px) {
          .dh-milestone { padding: 60px 20px; }
          .dh-milestone-grid { grid-template-columns: 1fr; }
          .dh-milestone-map { max-width: 100%; }
        }
      `}</style>

      <section className="dh-milestone">
        <div className="dh-milestone-inner">
          <h2 className="dh-milestone-heading">Milestone Address</h2>
          <div className="dh-milestone-underline" />
          <div className="dh-milestone-grid">
            <div className="dh-milestone-textbox">
              <p>
                Strategically located within Dholera SIR, our plotted developments offer
                proximity to the upcoming Dholera International Airport, Ahmedabad-Dholera
                Expressway, metro connectivity, and key industrial hubs. This milestone address
                places you at the heart of India&apos;s most ambitious smart city — where
                infrastructure, connectivity, and growth converge for lasting value.
              </p>
            </div>
            <div className="dh-milestone-map">
              <Image src="/dholera/milestone-map.png" alt="Dholera location proximity map" fill style={{ objectFit: "contain" }} sizes="50vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

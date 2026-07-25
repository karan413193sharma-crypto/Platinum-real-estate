"use client";
import Image from "next/image";

export default function DholeraBanner() {
  return (
    <>
      <style>{`
        .dh-banner { width: 100%; overflow: hidden; }
        .dh-banner-grid { display: grid; grid-template-columns: 1fr 1.2fr 1fr; min-height: 280px; }
        .dh-banner-left { position: relative; background: #D7172A; min-height: 280px; }
        .dh-banner-center { background: #1a3041; display: flex; align-items: center; padding: 40px 36px; }
        .dh-banner-text { color: rgba(255,255,255,0.92); font-size: 14px; line-height: 1.75; margin: 0; }
        .dh-banner-right { position: relative; background: #0f1e2a; min-height: 280px; }
        @media (max-width: 900px) {
          .dh-banner-grid { grid-template-columns: 1fr; }
          .dh-banner-left, .dh-banner-right { min-height: 200px; }
          .dh-banner-center { padding: 32px 24px; }
        }
      `}</style>

      <section className="dh-banner">
        <div className="dh-banner-grid">
          <div className="dh-banner-left">
            <Image src="/dholera/banner-left.jpg" alt="Dholera Expressway" fill style={{ objectFit: "cover", opacity: 0.85 }} sizes="33vw" />
          </div>
          <div className="dh-banner-center">
            <p className="dh-banner-text">
              Dholera Special Investment Region is India&apos;s largest greenfield smart city —
              a joint venture between the Government of India and Gujarat. With dedicated zones
              for industry, residential living, and world-class infrastructure including an
              international airport and expressway connectivity, Dholera offers unmatched
              early-investment potential in a fully planned urban ecosystem.
            </p>
          </div>
          <div className="dh-banner-right">
            <Image src="/dholera/banner-right.jpg" alt="Mangalam Aerotista Ratnam" fill style={{ objectFit: "cover" }} sizes="33vw" />
          </div>
        </div>
      </section>
    </>
  );
}

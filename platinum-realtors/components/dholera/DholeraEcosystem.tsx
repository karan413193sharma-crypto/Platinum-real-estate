"use client";
import Image from "next/image";

export default function DholeraEcosystem() {
  return (
    <>
      <style>{`
        .dh-eco { background: #fff; padding: 60px 40px 80px; }
        .dh-eco-inner { max-width: 1240px; margin: 0 auto; }
        .dh-eco-heading { text-align: center; font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: #1a1a1a; margin: 0 0 12px; }
        .dh-eco-underline { width: 80px; height: 3px; background: #D7172A; margin: 0 auto 48px; }
        .dh-eco-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: stretch; }
        .dh-eco-card { position: relative; min-height: 380px; border: 1px solid #eee; overflow: hidden; background: #fafafa; }
        .dh-eco-card img { transition: transform 0.4s; }
        .dh-eco-card:hover img { transform: scale(1.03); }
        @media (max-width: 900px) { .dh-eco { padding: 40px 20px 60px; } .dh-eco-grid { grid-template-columns: 1fr; } .dh-eco-card { min-height: 280px; } }
      `}</style>

      <section className="dh-eco">
        <div className="dh-eco-inner">
          <h2 className="dh-eco-heading">Dholera Growth Ecosystem</h2>
          <div className="dh-eco-underline" />
          <div className="dh-eco-grid">
            <div className="dh-eco-card">
              <Image src="/dholera/master-plan.png" alt="Master Plan Dholera SIR" fill style={{ objectFit: "contain" }} sizes="50vw" />
            </div>
            <div className="dh-eco-card">
              <Image src="/dholera/city-render.jpg" alt="Dholera City Infrastructure" fill style={{ objectFit: "cover" }} sizes="50vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

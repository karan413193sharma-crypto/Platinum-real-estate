"use client";

import Image from "next/image";

export default function DholeraHero() {
  return (
    <>
      <style>{`
        .dh-hero{
    position: relative;
    height: 760px;      /* was 620 */
    overflow: visible;
    z-index: 0;
}
    .dh-hero{
    overflow:visible;
    z-index:0;
}
    .dh-props{
    position: relative;
    margin-top: -140px;
    z-index: 20;
    background: white;
}
    

        .dh-hero-bg{
          position:absolute;
          inset:0;
          z-index:0;
        }

        .dh-hero-overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            to bottom,
            rgba(0,0,0,.22),
            rgba(0,0,0,.48)
          );
          z-index:1;
        }

        .dh-hero-content{
          position:absolute;
          inset:0;

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          text-align:center;

          z-index:2;

          padding:0 24px;

          transform:translateY(-30px);
        }

        .dh-hero-title{
          font-family:'Playfair Display',serif;
          font-size:clamp(58px,7vw,96px);
          font-weight:700;
          color:#fff;
          line-height:1;
          margin:0 0 20px;
        }

        .dh-hero-subtitle{
          max-width:760px;

          font-family:'Inter',sans-serif;
          font-size:clamp(15px,1.4vw,22px);
          font-weight:400;
          line-height:1.65;

          color:rgba(255,255,255,.92);

          margin:0;
        }

        /* allow next section to overlap hero */
        .dh-hero + *{
          position:relative;
          z-index:5;
          margin-top:-70px;
        }

        @media(max-width:992px){

          .dh-hero{
            height:560px;
          }

          .dh-hero-content{
            transform:translateY(-15px);
          }

          .dh-hero-title{
            font-size:64px;
          }

          .dh-hero-subtitle{
            font-size:17px;
            max-width:620px;
          }

        }

        @media(max-width:768px){

          .dh-hero{
            height:500px;
          }

          .dh-hero-title{
            font-size:48px;
          }

          .dh-hero-subtitle{
            font-size:15px;
            line-height:1.6;
            max-width:95%;
          }

        }
      `}</style>

      <section className="dh-hero">
        <div className="dh-hero-bg">
          <Image
            src="/dholera/dhulera_hero.png"
            alt="Dholera"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 24%",
            }}
          />
        </div>

        <div className="dh-hero-overlay" />

        <div className="dh-hero-content">
          <h1 className="dh-hero-title">Dholera</h1>

          <p className="dh-hero-subtitle">
            Dholera SIR — India's first smart city project with world-class
            facilities, strategic connectivity, and high-growth investment
            opportunities.
          </p>
        </div>
      </section>
    </>
  );
}
"use client";

import Image from "next/image";

export default function DholeraPlots() {
  return (
    <>
      <style>{`
      .dh-hero{
    overflow:visible;
    z-index:0;
}
    .dh-plots{
    position:relative;
    margin-top:-165px;
    z-index:20;
}
        .dh-plots{
    position:relative;

    background:#fff;

    margin-top:-165px;           /* overlap hero */

    padding:0 40px 80px;

    z-index:20;
}

.dh-plots-inner{
    max-width:1280px;

    margin:0 auto;

    display:grid;

    grid-template-columns:220px 1fr 1fr;

    gap:42px;

    align-items:start;
}

/* LEFT RED BOX */

.dh-plots-heading{
    background:#D7172A;

    color:#fff;

    font-family:'Playfair Display',serif;

    font-size:clamp(26px,2vw,38px);

    font-weight:700;

    line-height:1.15;

    padding:30px 22px;

    min-height:160px;

    display:flex;

    align-items:center;

    justify-content:center;

    position:relative;

    z-index:5;
}

/* GRID */

.dh-plots-grid{
    grid-column:2 / span 2;

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:40px;
}

/* CARD */

.dh-plot-card{
    background:transparent;

    border:none;

    overflow:visible;

    text-align:center;
}

/* IMAGE */

.dh-plot-image{
    position:relative;

    width:100%;

    height:295px;

    background:#fff;

    padding:14px;

    box-shadow:0 14px 40px rgba(0,0,0,.12);

    z-index:2;
}

/* IMAGE */

.dh-plot-image img{
    object-fit:contain !important;
}

/* TITLE STRIP */

.dh-plot-body{
    width:82%;

    margin:-1px auto 0;

    background:#fff;

    border:1px solid #cfcfcf;

    padding:10px 20px;

    position:relative;

    z-index:1;
}

/* TITLE */

.dh-plot-title{
    margin:0;

    font-family:'Playfair Display',serif;

    font-size:20px;

    font-weight:700;

    color:#24354c;

    line-height:1.3;
}

/* REMOVE THESE */

.dh-plot-desc{
    display:none;
}

.dh-plot-underline{
    display:none;
}

/* HOVER */

.dh-plot-card:hover .dh-plot-image{
    transform:translateY(-6px);

    transition:.35s;

    box-shadow:0 22px 50px rgba(0,0,0,.18);
}

/* TABLET */

@media (max-width:991px){

.dh-plots{
    margin-top:-120px;

    padding:0 25px 60px;
}

.dh-plots-inner{
    grid-template-columns:1fr;
}

.dh-plots-grid{
    grid-column:auto;

    grid-template-columns:1fr 1fr;
}

.dh-plots-heading{
    width:240px;

    min-height:130px;
}

}

/* MOBILE */

@media (max-width:768px){

.dh-plots{
    margin-top:-70px;

    padding:0 20px 50px;
}

.dh-plots-grid{
    grid-template-columns:1fr;

    gap:30px;
}

.dh-plots-heading{
    width:100%;

    min-height:auto;

    padding:18px;
}

.dh-plot-image{
    height:230px;
}

.dh-plot-body{
    width:90%;
}

}
      `}</style>

<section className="dh-plots">
  <div className="dh-plots-inner">

    {/* Left Heading */}
    <h2 className="dh-plots-heading">
      Find Your
      <br />
      Perfect Plot
    </h2>

    {/* Cards */}
    <div className="dh-plots-grid">

      {/* Residential */}
      <div className="dh-plot-card">
        <div className="dh-plot-image">
          <Image
            src="/dholera/residential-plot.jpg"
            alt="Residential Properties"
            fill
            sizes="50vw"
            style={{
              objectFit: "contain",
              padding: "8px",
            }}
          />
        </div>

        <div className="dh-plot-body">
          <h3 className="dh-plot-title">
            Residential Properties
          </h3>
        </div>
      </div>

      {/* Industrial */}
      <div className="dh-plot-card">
        <div className="dh-plot-image">
          <Image
            src="/dholera/industrial-plot.jpg"
            alt="Industrial Properties"
            fill
            sizes="50vw"
            style={{
              objectFit: "contain",
              padding: "8px",
            }}
          />
        </div>

        <div className="dh-plot-body">
          <h3 className="dh-plot-title">
            Industrial Properties
          </h3>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  );
}
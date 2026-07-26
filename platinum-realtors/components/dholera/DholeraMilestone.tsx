"use client";

import Image from "next/image";

export default function DholeraMilestone() {
  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        .dh-milestone{
          background:#fff;
          padding:clamp(2rem,4vw,4rem) 5%;
        }

        .dh-milestone-inner{
          width:min(90%,1400px);
          margin:0 auto;
        }

        .dh-milestone-heading{
          font-family:"Playfair Display",serif;
          font-size:clamp(2rem,4vw,3rem);
          font-weight:700;
          color:#1a1a1a;
          text-align:center;
          margin:0;
          line-height:1.1;
        }

        .dh-milestone-underline{
          width:clamp(4rem,18vw,16rem);
          height:.18rem;
background : linear-gradient(90deg, #FFFFFF 0%, #D7172A 50.55%, #FFFFFF 100%);


  );
          margin:.5rem auto 1.5rem;
        }

        .dh-milestone-content{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:5%;
        }

        /* LEFT SIDE */
        .dh-milestone-text{
          flex:0 0 38%;
        }

        .dh-milestone-textbox{
  position: relative;

  border: 3px solid transparent;

  border-image-source: linear-gradient(
    90deg,
    #1A3041 0%,
    #FFFFFF 35.1%,
    #FFFFFF 61.06%,
    #D7172A 100%
  );

  border-image-slice: 1;

  background: #fff;
  padding: 3.5rem 2rem 2rem;
  overflow: visible;
}

        /* Small image sitting in the border */
     .dh-text-inset {
  position: absolute;
  top: 0;
  left: 1.5rem;

  width: clamp(7rem, 28%, 11rem);
  aspect-ratio: 16 / 8;   /* or 2 / 1 */

  transform: translateY(-50%);

  background: #fff;
  overflow: hidden;
  z-index: 10;
}

        .dh-text-inset-inner{
          position:relative;
          width:100%;
          height:100%;
        }

        .dh-milestone-textbox p{
          margin:0;
          color:#333;
          font-size:clamp(.95rem,1.15vw,1.08rem);
          line-height:1.9;
        }

        /* RIGHT SIDE */
        .dh-milestone-image{
          flex:0 0 57%;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .dh-milestone-map{
          position:relative;
          width:100%;
          aspect-ratio:4/3;
        }

        /* TABLET */
        @media(max-width:992px){

          .dh-milestone-content{
            gap:4%;
          }

          .dh-milestone-text{
            flex-basis:42%;
          }

          .dh-milestone-image{
            flex-basis:54%;
          }

        }

        /* MOBILE */
        @media(max-width:768px){

          .dh-milestone{
            padding:2rem 5%;
          }

          .dh-milestone-content{
            flex-direction:column-reverse;
            gap:2rem;
          }

          .dh-milestone-text,
          .dh-milestone-image{
            flex:1 1 100%;
            width:100%;
          }

          .dh-milestone-textbox{
            padding:3rem 1.5rem 1.5rem;
            text-align:center;
          }

         .dh-text-inset {
  width: clamp(4rem, 16%, 6rem);
  aspect-ratio: 1;
}

        }

        @media(max-width:480px){

          .dh-milestone{
            padding:2rem 4%;
          }

          .dh-text-inset{
            width:3.5rem;
            left:.8rem;
          }

        }

      `}</style>

      <section className="dh-milestone">

        <div className="dh-milestone-inner">

          <h2 className="dh-milestone-heading">
            Milestone Address
          </h2>

          <div className="dh-milestone-underline"></div>

          <div className="dh-milestone-content">

            {/* TEXT SECTION */}
            <div className="dh-milestone-text">

              <div className="dh-milestone-textbox">

                {/* Small image on border */}
                <div className="dh-text-inset">
                  <div className="dh-text-inset-inner">
                    <Image
                      src="/Company.png"
                      alt="Location Highlight"
                      fill
                      sizes="150px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <p>
                  Strategically located within Dholera SIR, our plotted
                  developments offer proximity to the upcoming Dholera
                  International Airport, Ahmedabad–Dholera Expressway,
                  metro connectivity, and key industrial hubs.
                  This milestone address places you at the heart of
                  India's most ambitious smart city where infrastructure,
                  connectivity and growth converge for lasting value.
                </p>

              </div>

            </div>

            {/* IMAGE SECTION */}
            <div className="dh-milestone-image">

              <div className="dh-milestone-map">

                <Image
                  src="/mapping.jpg"
                  alt="Dholera Location Map"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  sizes="(max-width:768px) 100vw, 60vw"
                />

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
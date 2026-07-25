"use client";

export default function NewsletterSection() {
  return (
    <>
      <style>{`
        .newsletter {
          padding: 100px 40px;
          text-align: center;
          background-color: #fff;
          position: relative;
          overflow: hidden;
          margin-bottom:100px;
        }


        .newsletter{
    position: relative;
    background-image: url("/images/spring.png");
    background-size: 90px auto;
    background-position: left 60px top 30px;
    background-repeat: no-repeat;

    
}

        .newsletter-bird {
          position: absolute;
          top: 10px;
          right: 80px;
          font-size: 80px;
          opacity: 0.08;
          pointer-events: none;
          transform: rotate(-10deg);
        }

        .newsletter-heading {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 600;
          color: #c8102e;
          margin-bottom: 14px;
        }

        .newsletter-desc {
          font-size: 16px;
          color: #666;
          margin-bottom: 32px;
            font-family:Montserrat;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 0;
          max-width: 520px;
          margin: 0 auto 16px;
            font-family:Montserrat;
        }

        .newsletter-input {
          flex: 1;
          padding: 16px 22px;
          font-size: 16px;
          border: 1px solid #ddd;
          outline: none;
        }

        .newsletter-btn {
          background-color: #c8102e;
          color: #fff;
          border: none;
          padding: 16px 32px;
          font-size: 16px;
          cursor: pointer;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background-color: #a50d26;
        }

        .newsletter-privacy {
          font-size: 13px;
          color: #aaa;  font-family:Montserrat;

        }

        @media (max-width: 480px) {
          .newsletter {
            padding: 50px 16px;
          }
          .newsletter-form {
            flex-direction: column;
            max-width: 100%;
          }
          .newsletter-btn {
            width: 100%;
            padding: 14px;
          }
          .newsletter-heading {
            font-size: 26px;
          }
          .newsletter {
            background-size: 60px auto;
            background-position: left 16px top 16px;
          }
        }
      `}</style>

      <section className="newsletter">
        {/* <div className="newsletter-bird">🕊</div> */}

        <h2 className="newsletter-heading">Stay updated with latest properties</h2>
        <p className="newsletter-desc">Get exclusive property alerts delivered to your inbox</p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Submit</button>
        </div>

        <p className="newsletter-privacy">We respect your privacy</p>
      </section>
    </>
  );
}
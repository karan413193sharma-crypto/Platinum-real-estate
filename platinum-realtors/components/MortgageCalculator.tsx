"use client";

import Image from "next/image";
import { useState } from "react";

const BUILDING_IMAGE = "/c92646273926fa505fef4f88870fc83e53b9dbdb.png";
const RED_CHEVRON = "/Vector%207.png";

/* Figma frame: 1920 × 789 — Vector 7 overlay: 1026 × 789 */
const DESIGN_W = 1920;
const DESIGN_H = 789;
const CHEVRON_W = 1026;

function CalculatorIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="1" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4.5" y="3.5" width="9" height="3" rx="0.5" fill="currentColor" />
      <circle cx="5.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="5.5" cy="13" r="1" fill="currentColor" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="12.5" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState("Rs 50Lac");
  const [downPayment, setDownPayment] = useState("Rs 20Lac");
  const [interestRate, setInterestRate] = useState("3.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const price = parseFloat(propertyPrice.replace(/[^0-9.]/g, "")) * 100000;
    const down = parseFloat(downPayment.replace(/[^0-9.]/g, "")) * 100000;
    const principal = price - down;
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;

    if (!principal || !monthlyRate || !months) {
      setResult("Please enter valid values");
      return;
    }

    const monthly =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setResult(`Rs ${Math.round(monthly).toLocaleString("en-IN")}/month`);
  };

  const chevronWidthPct = `${(CHEVRON_W / DESIGN_W) * 100}%`;

  return (
    <>
      <style>{`
        .mortgage-section {
          position: relative;
          width: 100%;
          aspect-ratio: ${DESIGN_W} / ${DESIGN_H};
          overflow: hidden;
        }

        /* Layer 1 — building fills entire section */
        .mortgage-building {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .mortgage-building img {
          object-fit: cover;
          object-position: 72% center;
        }

        /* Layer 2 — Vector 7 chevron at exact Figma proportions (1026 / 1920) */
        .mortgage-shape-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: ${chevronWidthPct};
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .mortgage-shape-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: fill;
        }

        /* Layer 3 — calculator content */
        .mortgage-content {
          position: relative;
          z-index: 2;
          height: 100%;
          width: ${chevronWidthPct};
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5% 0 6.25%;
          color: #fff;
          box-sizing: border-box;
        }

        .mortgage-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 2.5vw, 48px);
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 0.6em;
        }

        .mortgage-content > p {
          font-family: 'Inter', sans-serif;
          font-size: clamp(12px, 0.94vw, 18px);
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 1.8em;
          opacity: 0.95;
          max-width: 90%;
        }

        .mortgage-form-wrap {
          background-color: #fff;
          border-radius: 10px;
          padding: 5% 5.5% 4.5%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 620px;
        }

        .mortgage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.4em 1.8em;
          margin-bottom: 1.6em;
        }

        .mortgage-field label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 0.68vw, 13px);
          font-weight: 500;
          color: #c8102e;
          margin-bottom: 6px;
        }

        .mortgage-field input {
          width: 100%;
          padding: 6px 0;
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 0.78vw, 15px);
          font-weight: 400;
          color: #333;
          background: transparent;
          border: none;
          border-bottom: 1px solid #d9d9d9;
          outline: none;
        }

        .mortgage-field input::placeholder {
          color: #aaa;
        }

        .mortgage-field input:focus {
          border-bottom-color: #c8102e;
        }

        .mortgage-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.95em 1.2em;
          background-color: #c8102e;
          color: #fff;
          border: none;
          border-radius: 3px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 0.68vw, 13px);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .mortgage-btn:hover {
          background-color: #a50d26;
        }

        .mortgage-result {
          margin-top: 1em;
          padding-top: 1em;
          border-top: 1px solid #eee;
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 0.94vw, 18px);
          font-weight: 600;
          color: #c8102e;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .mortgage-section {
            aspect-ratio: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
          }

          .mortgage-building {
            position: relative;
            order: 2;
            width: 100%;
            aspect-ratio: 16 / 9;
          }

          .mortgage-shape-wrap {
            display: none;
          }

          .mortgage-content {
            order: 1;
            width: 100%;
            height: auto;
            background-color: #c8102e;
            padding: 48px 32px;
          }

          .mortgage-content > p {
            max-width: none;
          }

          .mortgage-form-wrap {
            max-width: none;
          }
        }

        @media (max-width: 640px) {
          .mortgage-content {
            padding: 40px 20px;
          }

          .mortgage-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="mortgage-section">
        <div className="mortgage-building">
          <Image
            src={BUILDING_IMAGE}
            alt="Modern skyscraper"
            fill
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className="mortgage-shape-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={RED_CHEVRON} alt="" aria-hidden="true" />
        </div>

        <div className="mortgage-content">
          <h2>Mortgage Calculator</h2>
          <p>Estimate your monthly payments and plan your budget</p>

          <div className="mortgage-form-wrap">
            <div className="mortgage-grid">
              <div className="mortgage-field">
                <label htmlFor="property-price">Property Price</label>
                <input
                  id="property-price"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  placeholder="Rs 50Lac"
                />
              </div>
              <div className="mortgage-field">
                <label htmlFor="down-payment">Down Payment</label>
                <input
                  id="down-payment"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="Rs 20Lac"
                />
              </div>
              <div className="mortgage-field">
                <label htmlFor="interest-rate">Interest Rate (%)</label>
                <input
                  id="interest-rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="3.5"
                />
              </div>
              <div className="mortgage-field">
                <label htmlFor="loan-term">Loan Term (Years)</label>
                <input
                  id="loan-term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="30"
                />
              </div>
            </div>

            <button type="button" className="mortgage-btn" onClick={calculate}>
              <CalculatorIcon />
              Calculate Monthly Payment
            </button>

            {result && <p className="mortgage-result">{result}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

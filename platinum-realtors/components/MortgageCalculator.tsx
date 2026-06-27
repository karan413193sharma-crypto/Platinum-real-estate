"use client";

import Image from "next/image";
import { useState } from "react";

const BUILDING_IMAGE = "/c92646273926fa505fef4f88870fc83e53b9dbdb.png";

function CalculatorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

  return (
    <>
      <style>{`
        .mc-section {
          position: relative;
          width: 100%;
          aspect-ratio: 1920 / 789;
          overflow: hidden;
        }

        /* Layer 1 — building photo fills entire section */
        .mc-building {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .mc-building img {
          object-fit: cover;
          object-position: right center;
        }

        /* Layer 2 — red panel with diagonal right edge */
        .mc-red {
          position: absolute;
          inset: 0;
          background-color: #c8102e;
          clip-path: polygon(0 0, 52% 0, 42% 100%, 0 100%);
          z-index: 1;
        }

        /* Layer 3 — text + form, kept within the narrowest point of the red shape */
        .mc-content {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 44%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 4% 0 5%;
          box-sizing: border-box;
        }

        .mc-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.4vw, 46px);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 0.4em;
        }

        .mc-content > p {
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 0.85vw, 16px);
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 1.4em;
        }

        .mc-card {
          background: #fff;
          border-radius: 8px;
          padding: clamp(14px, 2%, 28px) clamp(16px, 2.5%, 32px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        .mc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1em 1.4em;
          margin-bottom: 1.2em;
        }

        .mc-field label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(9px, 0.6vw, 11px);
          font-weight: 600;
          color: #c8102e;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 5px;
        }

        .mc-field input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #ddd;
          padding: 4px 0;
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 0.72vw, 14px);
          color: #333;
          background: transparent;
          outline: none;
          box-sizing: border-box;
        }

        .mc-field input::placeholder {
          color: #bbb;
        }

        .mc-field input:focus {
          border-bottom-color: #c8102e;
        }

        .mc-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0.85em 1em;
          background-color: #c8102e;
          color: #fff;
          border: none;
          border-radius: 3px;
          font-family: 'Inter', sans-serif;
          font-size: clamp(9px, 0.6vw, 11px);
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .mc-btn:hover {
          background-color: #a50d26;
        }

        .mc-result {
          margin-top: 0.8em;
          padding-top: 0.8em;
          border-top: 1px solid #eee;
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 0.9vw, 17px);
          font-weight: 700;
          color: #c8102e;
          text-align: center;
        }

        /* Mobile — stack vertically */
        @media (max-width: 768px) {
          .mc-section {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
          }

          .mc-building {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 7;
            order: 2;
          }

          .mc-red {
            display: none;
          }

          .mc-content {
            position: relative;
            order: 1;
            width: 100%;
            background-color: #c8102e;
            padding: 40px 24px;
          }

          .mc-card {
            max-width: none;
          }
        }

        @media (max-width: 480px) {
          .mc-content {
            padding: 32px 16px;
          }

          .mc-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="mc-section">
        {/* Layer 1 — building photo */}
        <div className="mc-building">
          <Image
            src={BUILDING_IMAGE}
            alt="Modern skyscraper"
            fill
            sizes="100vw"
            priority={false}
          />
        </div>

        {/* Layer 2 — red diagonal panel */}
        <div className="mc-red" />

        {/* Layer 3 — content */}
        <div className="mc-content">
          <h2>Mortgage Calculator</h2>
          <p>Estimate your monthly payments and plan your budget</p>

          <div className="mc-card">
            <div className="mc-grid">
              <div className="mc-field">
                <label htmlFor="mc-property-price">Property Price</label>
                <input
                  id="mc-property-price"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  placeholder="Rs 50Lac"
                />
              </div>
              <div className="mc-field">
                <label htmlFor="mc-down-payment">Down Payment</label>
                <input
                  id="mc-down-payment"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="Rs 20Lac"
                />
              </div>
              <div className="mc-field">
                <label htmlFor="mc-interest-rate">Interest Rate (%)</label>
                <input
                  id="mc-interest-rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="3.5"
                />
              </div>
              <div className="mc-field">
                <label htmlFor="mc-loan-term">Loan Term (Years)</label>
                <input
                  id="mc-loan-term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="30"
                />
              </div>
            </div>

            <button type="button" className="mc-btn" onClick={calculate}>
              <CalculatorIcon />
              Calculate Monthly Payment
            </button>

            {result && <p className="mc-result">{result}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

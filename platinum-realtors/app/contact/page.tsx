"use client";

import { useState } from "react";

// Set this to your real image path once the file exists in /public/images,
// e.g. "/images/contact-hero-bg.jpg". Leave as null and the section will
// just show the dark gradient with no image, instead of a broken image.
const heroBg: string | null = null;

// Bedroom photo behind the "Let's begin the conversation" form section.
const formBg: string | null = "/images/contact-bg.jpeg"; // e.g. "/images/contact-form-bg.jpg"

const faqs = [
  {
    q: "Are all your properties legally verified?",
    a: "Yes. Every property undergoes a thorough verification process to ensure clear ownership, valid documentation, and compliance with applicable regulations.",
  },
  { q: "Do you assist with financing or home loans?", a: "" },
  { q: "How long does the buying process usually take?", a: "" },
  { q: "Do you provide assistance with legal documentation?", a: "" },
  { q: "What payment options are available?", a: "" },
];

export default function ContactUsPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      {/* If your Navbar normally renders here (not in layout.tsx),
          uncomment the next line and fix the import path: */}
      {/* <Navbar /> */}

      {/* ===== HERO SECTION ===== */}
      <section
        className="contact-hero"
        style={heroBg ? { backgroundImage: `url(${heroBg})` } : undefined}
      >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Your Dream Property Starts a Conversation</p>
        </div>
      </section>

      {/* ===== BEGIN CONVERSATION / FORM SECTION ===== */}
      <section
        className="begin-conversation"
        style={formBg ? { backgroundImage: `url(${formBg})` } : undefined}
      >
        <div className="bc-overlay" />

        <div className="bc-content">
          <div className="bc-left">
            <h2>
              Let&apos;s begin the
              <br />
              conversation.
            </h2>
            <span className="bc-underline" />
          </div>

          <div className="bc-right">
            <p className="bc-question">How can we help you reach your goals?</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your query"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="faq-left">
          <h2>Frequently asked Questions</h2>
          <span className="faq-underline" />
          <p>Everything you need to know before finding your perfect property.</p>
        </div>

        <div className="faq-right">
          <div className="faq-rail">
            {faqs.map((_, i) => (
              <span className="faq-num" key={i}>
                {i + 1}
              </span>
            ))}
          </div>

          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
                  <div
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-arrow">{isOpen ? "▲" : "▼"}</span>
                  </div>
                  {isOpen && item.a && <p className="faq-answer">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          position: relative;
          height: 420px;
          background-color: #0b0b0d;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          display: flex;
          align-items: center;
          overflow: hidden;
         
          padding-top: 110px;
          box-sizing: border-box;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
        
          );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 60px;
        }

        .contact-hero-content :global(h1) {
          color: #fff !important;
          font-size: 48px !important;
          line-height: 1.1 !important;
          margin: 0 0 8px 0 !important;
          font-weight: 600 !important;
        }

        .contact-hero-content :global(p) {
          color: #ddd !important;
          font-size: 15px !important;
          margin: 0 !important;
        }

        @media (max-width: 1024px) and (min-width: 481px) {
          .contact-hero-content {
            padding: 0 30px;
          }
        }

        @media (max-width: 480px) {
          .contact-hero {
            height: 260px;
            padding-top: 90px;
          }
          .contact-hero-content :global(h1) {
            font-size: 32px !important;
          }
        }

        /* ===== BEGIN CONVERSATION SECTION ===== */
        .begin-conversation {
          position: relative;
          background-color: #2c2c28;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 70px 60px;
          box-sizing: border-box;
        }

        .bc-overlay {
          position: absolute;
          inset: 0;
        
        }

        .bc-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bc-left {
          flex: 1;
          min-width: 260px;
          padding-top: 10px;
        }

        .bc-left :global(h2) {
          color: #fff !important;
          font-size: 30px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          margin: 0 0 14px 0 !important;
        }

        .bc-underline {
          display: block;
          width: 70px;
          height: 3px;
          background: #b21818;
        }

        .bc-right {
          flex: 1.4;
          min-width: 320px;
        }

        .bc-question {
          color: #eee;
          font-size: 14px;
          text-decoration: underline;
          text-underline-offset: 4px;
          margin: 0 0 22px 0;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 18px;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .form-group.full {
          margin-bottom: 22px;
        }

        .form-group label {
          font-size: 12px;
          color: #ddd;
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group textarea {
          appearance: none;
          -webkit-appearance: none;
          background-image: linear-gradient(#1c1c1c, #1c1c1c),
            linear-gradient(90deg, #ffffff 0%, #d7172a 50%, #ffffff 100%);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border: 2px solid transparent;
          border-radius: 4px;
          padding: 10px 12px;
          color: #fff;
          font-size: 13px;
          font-family: inherit;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }

        .form-group textarea {
          resize: none;
        }

        .submit-btn {
          background: #b21818;
          color: #fff;
          border: none;
          padding: 10px 34px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #921313;
        }

        @media (max-width: 1024px) and (min-width: 481px) {
          .begin-conversation {
            padding: 50px 30px;
          }
        }

        @media (max-width: 480px) {
          .begin-conversation {
            padding: 40px 20px;
          }
          .bc-content {
            flex-direction: column;
          }
          .form-row {
            flex-direction: column;
            gap: 0;
          }
        }

        /* ===== FAQ SECTION ===== */
        .faq-section {
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          padding: 80px 60px;
          background: #fff;
          align-items: flex-start;
        }

        .faq-left {
          flex: 1;
          min-width: 260px;
        }

        .faq-left :global(h2) {
          font-family: Georgia, "Times New Roman", serif !important;
          font-size: 26px !important;
          font-weight: 700 !important;
          color: #14213d !important;
          margin: 0 0 14px 0 !important;
          line-height: 1.3 !important;
        }

        .faq-underline {
          display: block;
          width: 50px;
          height: 2px;
          background: #14213d;
          margin-bottom: 16px;
        }

        .faq-left :global(p) {
          color: #666 !important;
          font-size: 14px !important;
          max-width: 260px !important;
          margin: 0 !important;
          line-height: 1.6 !important;
        }

        .faq-right {
          flex: 1.7;
          min-width: 340px;
          background: #0a0a0a;
          border-radius: 16px;
          padding: 32px 32px 32px 64px;
          position: relative;
          display: flex;
        }

        .faq-rail {
          position: absolute;
          left: 22px;
          top: 32px;
          bottom: 32px;
          width: 32px;
          border-radius: 16px;
          background: linear-gradient(
            180deg,
            #ff4d4d 0%,
            #b21818 40%,
            #4a0000 75%,
            #1a0000 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          box-sizing: border-box;
        }

        .faq-num {
          color: #fff;
          font-size: 12px;
          font-weight: 600;
        }

        .faq-list {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 0;
        }

        .faq-item:first-child {
          padding-top: 2px;
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          cursor: pointer;
          color: #fff;
          font-size: 14px;
        }

        .faq-arrow {
          color: #d7172a;
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .faq-answer {
          margin: 10px 0 0 0;
          color: #aaa;
          font-size: 13px;
          line-height: 1.6;
          max-width: 90%;
        }

        @media (max-width: 1024px) and (min-width: 481px) {
          .faq-section {
            padding: 50px 30px;
          }
        }

        @media (max-width: 480px) {
          .faq-section {
            padding: 40px 20px;
            flex-direction: column;
          }
          .faq-right {
            padding: 28px 24px 28px 56px;
          }
        }
      `}</style>
    </>
  );
}
'use client';

import { useState } from 'react';

export default function PinVerification() {
  const [pin, setPin] = useState("");
  const [sent, setSent] = useState(false);

  const sendPin = () => {
    setSent(true);
    alert("📧 A 10-digit PIN has been sent to your email (alex@example.com).\n\nCheck your email and enter it below.");
  };

  const verifyPin = () => {
    if (pin.length === 10) {
      alert("✅ PIN Verified Successfully!\nYour withdrawal request has been submitted.");
    } else {
      alert("❌ Invalid PIN. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a2540] flex items-center justify-center p-6">
      <div className="glass max-w-md w-full rounded-3xl p-10 text-center">
        <h1 className="text-3xl font-bold mb-8">Withdrawal PIN</h1>

        {!sent ? (
          <button 
            onClick={sendPin}
            className="w-full bg-emerald-500 py-4 rounded-2xl font-semibold mb-6"
          >
            Send PIN to Email
          </button>
        ) : (
          <>
            <p className="mb-6 text-white/70">Enter the 6-digit PIN sent to your email</p>
            <input 
              type="text" 
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full text-center text-4xl tracking-widest bg-white/10 border border-white/30 rounded-2xl py-6 mb-8"
              placeholder="123456"
            />
            <button 
              onClick={verifyPin}
              className="w-full bg-white text-black py-4 rounded-2xl font-bold"
            >
              Verify PIN
            </button>
          </>
        )}
      </div>
    </div>
  );
    }

import React, { useState } from "react";
import { Button } from "./ui/button";

const BookSession = () => {
  const programs = [
    "One-on-One Coaching",
    "Group Coaching",
    "Peak Performance Programs",
    "HRCM Coaching",
  ];

  const whatsappNumber = "+919279231459";

  // contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [programType, setProgramType] = useState(programs[0]);

  const handleWhatsApp = () => {
    const message = `Hi Sunita,\n\nName: ${name || "-"}\nPhone: ${
      phone || "-"
    }\nAge: ${
      age || "-"
    }\nProgram: ${programType}\n\nPlease let me know the next steps.`;

    const ownerPhone = whatsappNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-white dark:from-gray-900 dark:via-purple-900/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-lora text-foreground">
            Book a Session
          </h2>
          <p className="text-muted-foreground mt-2">
            Choose one of the available slots below and connect with me on
            WhatsApp to confirm your booking.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Phone number
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                placeholder="e.g. +9198xxxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Age (optional)
              </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                placeholder="Age"
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1">
                Program
              </label>
              <select
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                className="w-full rounded-md border border-border p-2 bg-background text-foreground"
              >
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              onClick={handleWhatsApp}
              disabled={!name || !phone}
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 shadow-lg disabled:opacity-50"
            >
              Book via WhatsApp
            </Button>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline"
            >
              Prefer to message directly? Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;

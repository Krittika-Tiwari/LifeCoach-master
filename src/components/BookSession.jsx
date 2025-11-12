import React, { useState } from "react";
import { Button } from "./ui/button";

const BookSession = () => {
  const timeslots = [
    { id: 1, label: "Mon, 10:00 AM" },
    { id: 2, label: "Tue, 2:00 PM" },
    { id: 3, label: "Wed, 6:00 PM" },
    { id: 4, label: "Thu, 8:00 AM" },
    { id: 5, label: "Fri, 11:00 AM" },
    { id: 6, label: "Sat, 4:00 PM" },
  ];

  const offers = [
    "Free Discovery Call",
    "Book a Session",
    "Program Enrollment",
  ];

  const programs = [
    {
      title: "One-on-One Coaching",
      subtitle:
        "Personalized coaching sessions tailored to your specific needs and goals. 60-90 min sessions",
    },
    {
      title: "Group Coaching",
      subtitle: "Transform alongside like-minded individuals. Weekly sessions",
    },
    {
      title: "Peak Performance Programs",
      subtitle:
        "Intensive programs designed to maximize your potential. 3-6 month programs",
    },
    {
      title: "HRCM Coaching",
      subtitle:
        "Health, Relationships, Career and Money coaching. Customized timeline",
    },
  ];

  const servicesList = [
    "Mind Rewiring",
    "Subconscious Mind Programming",
    "Healing",
    "Confidence and Clarity Sessions",
    "Productivity and Time Management",
    "Peak Performance Coaching",
  ];

  const [timeSlot, setTimeSlot] = useState(timeslots[0].id);
  const [offer, setOffer] = useState(offers[0]);
  const [programType, setProgramType] = useState(programs[0].title);
  const [programSubtitle, setProgramSubtitle] = useState(programs[0].subtitle);
  const [serviceType, setServiceType] = useState(servicesList[0]);

  const whatsappNumber = "+919279231459";

  // contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [reason, setReason] = useState("");

  const handleWhatsApp = () => {
    const slotLabel = timeslots.find((s) => s.id === timeSlot)?.label || "";
    const message = `Hi Sunita,\n\nName: ${name || "-"}\nPhone: ${
      phone || "-"
    }\nAge: ${
      age || "-"
    }\nOffer: ${offer}\nProgram: ${programType}\nService: ${serviceType}\nPreferred slot: ${slotLabel}\nReason: ${
      reason || "-"
    }\n\nPlease let me know the next steps.`;
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
          {/* Contact form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Your name
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
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                What do you want help with?
              </label>
              <input
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                placeholder="Short note (e.g. confidence, productivity)"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Choose Offer / Program / Service / Time
            </label>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">
                    Offer
                  </label>
                  <select
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                  >
                    {offers.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-1">
                    Program
                  </label>
                  <select
                    value={programType}
                    onChange={(e) => {
                      const selectedProgram = programs.find(
                        (p) => p.title === e.target.value
                      );
                      setProgramType(selectedProgram.title);
                      setProgramSubtitle(selectedProgram.subtitle);
                    }}
                    className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                  >
                    {programs.map((p) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-muted-foreground mt-2">
                    {programSubtitle}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">
                    Service
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                  >
                    {servicesList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-1">
                    Time slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(Number(e.target.value))}
                    className="w-full rounded-md border border-border p-2 bg-background text-foreground"
                  >
                    {timeslots.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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

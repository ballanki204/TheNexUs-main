import React, { useState } from "react";

// BookConsultancyPage.jsx
// Single-file React + Tailwind component. Drop into a React app that already has Tailwind configured.

const BookConsultancyModal = () => {
  const [form, setForm] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    package: "standard",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // console.log(form);

  const packages = [
    {
      id: "starter",
      title: "Starter",
      price: "₹1,499",
      desc: "30-min quick audit + recommendations",
    },
    {
      id: "standard",
      title: "Standard",
      price: "₹3,499",
      desc: "60-min deep consultancy + action plan",
    },
    {
      id: "premium",
      title: "Premium",
      price: "₹7,499",
      desc: "2-hour strategy session + follow-up",
    },
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    // if (!form.service.trim()) e.service = "Service is required";
    if (!form.service.trim()) e.service = "Service is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter 10-digit phone";
    if (!form.date) e.date = "Select a date";
    if (!form.time) e.time = "Select a time";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    setSubmitting(true);

    // Simulate submit (replace with real API call)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleChange(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  }

  return (
    <div className="min-h-screen bg-gray-50 m-3 md:m-10">
      <main className="mx-auto max-w-6xl px-2 ms:px-4 py-2">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Book a consultancy session — get an actionable plan.
            </h2>
            <p className="mt-4 text-gray-600">
              Hands-on guidance for Product, Engineering, AI and Growth. Choose
              a package and pick a slot that works for you.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700"
              >
                Book a Session
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-5 py-3 text-blue-600 font-medium"
              >
                See Packages
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <strong>✔</strong> Practical deliverables
              </li>
              <li className="flex items-start gap-3">
                <strong>✔</strong> Flexible scheduling
              </li>
              <li className="flex items-start gap-3">
                <strong>✔</strong> Follow-up support
              </li>
            </ul>
          </div>

          <div id="book" className="bg-white p-6 rounded-2xl shadow">
            {submitted ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Booking confirmed 🎉</h3>
                <p className="mt-2 text-gray-600">
                  We sent a confirmation to <strong>{form.email}</strong>.
                  You'll receive a calendar invite shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded bg-blue-600 text-white"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                {/*  */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <input
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                    placeholder="Your Service"
                  />
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm  font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Package
                  </label>
                  <select
                    value={form.package}
                    onChange={(e) => handleChange("package", e.target.value)}
                    className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                  >
                    {packages.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} — {p.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                    />
                    {errors.date && (
                      <p className="text-red-600 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred time
                    </label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                    />
                    {errors.time && (
                      <p className="text-red-600 text-sm mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    What would you like to cover?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    className="mt-1 block w-full p-2 rounded-md border border-blue-600 shadow-sm"
                    placeholder="Tell us more (optional)"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    disabled={submitting}
                    type="submit"
                    className="inline-flex items-center p-2 justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow disabled:opacity-60"
                  >
                    {submitting ? "Booking..." : "Confirm & Book"}
                  </button>

                  <div className="text-sm text-gray-600">
                    Secure payment on confirmation • Cancel or reschedule 24h
                    prior
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="mt-12">
          <h3 className="text-2xl font-semibold">Packages</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.id} className="rounded-xl p-6 bg-white shadow">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <div className="text-sm font-medium">{p.price}</div>
                </div>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Direct session with expert</li>
                  <li>• Actionable report</li>
                  <li>• Email summary & resources</li>
                </ul>
                <div className="mt-4">
                  <button
                    onClick={() => handleChange("package", p.id)}
                    className={`w-full rounded-md px-4 py-2 border ${
                      form.package === p.id
                        ? "bg-blue-600 text-white"
                        : "border-blue-300 text-gray-700"
                    }`}
                  >
                    {form.package === p.id ? "Selected" : "Choose"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">1. Pick a package</h4>
            <p className="mt-2 text-sm text-gray-600">
              Choose a session length and scope that fits your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">2. Book & pay</h4>
            <p className="mt-2 text-sm text-gray-600">
              Confirm your slot and complete secure payment after availability
              check.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">3. Get an action plan</h4>
            <p className="mt-2 text-sm text-gray-600">
              Receive a practical, prioritized plan you can implement right
              away.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-12">
          <h3 className="text-2xl font-semibold">What our clients say</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <blockquote className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                "Helped us rescue a failing product roadmap — clear, practical,
                fast."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Priya R., Product Lead
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                "The strategy session delivered a 3-step plan we executed in 2
                weeks."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Arjun K., Founder
              </footer>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                "Excellent mix of technical depth and business sense."
              </p>
              <footer className="mt-4 text-sm text-gray-600">
                — Meera S., CTO
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookConsultancyModal;

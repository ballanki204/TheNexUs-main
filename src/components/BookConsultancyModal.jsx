import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// BookConsultancyPage.jsx
// Single-file React + Tailwind component. Drop into a React app that already has Tailwind configured.

const BookConsultancyModal = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    place: "",
    package: "standard",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // console.log(form);

  // Build breadcrumb trail based on how user arrived
  const buildBreadcrumbs = () => {
    const breadcrumbs = [{ label: "Home", path: "/", icon: Home }];

    // Check if user came from a specific page via state or referrer
    const state = location.state;
    if (state && state.fromPage) {
      breadcrumbs.push({
        label: state.fromPage.label,
        path: state.fromPage.path,
      });
    } else {
      // If no state, check referrer or current path
      const referrer = document.referrer;
      if (referrer) {
        // Try to extract page name from referrer
        const url = new URL(referrer);
        const path = url.pathname;
        if (path !== "/" && path !== "/book") {
          // Map common paths to labels
          const pageMap = {
            "/software": "Software Solutions",
            "/digital-marketing": "Digital Marketing",
            "/plant-marketplace": "Plant Marketplace",
            "/safety-app": "Safety App",
            "/careers": "Careers",
            "/about": "About Us",
          };
          const pageLabel = pageMap[path] || "Page";
          breadcrumbs.push({ label: pageLabel, path: path });
        }
      }
    }
    breadcrumbs.push({ label: "Book Consultancy", path: "/book" });

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

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
    if (!form.service.trim()) e.service = "Service is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter 10-digit phone";
    if (!form.place.trim()) e.place = "Place is required";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}

                {index === breadcrumbs.length - 1 ? (
                  // Last item (current page)
                  <span className="text-gray-900 font-medium flex items-center">
                    {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  // Previous items (clickable)
                  <Link
                    to={crumb.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  >
                    {crumb.icon && <crumb.icon className="w-4 h-4 mr-1" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Book Consultancy Session Get an Actionable Plan
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hands-on guidance for Product, Engineering, AI and Growth.
                Choose a package and pick a slot that works for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Session
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                See Packages
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Practical deliverables
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Flexible scheduling
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Follow-up support
                </span>
              </div>
            </div>
          </div>

          <div
            id="book"
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20"
          >
            {submitted ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Booking confirmed 🎉</h3>
                <p className="mt-2 text-gray-600">
                  We sent a confirmation to <strong>{form.email}</strong>.
                  You'll receive a calendar invite shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Full name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Service
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="plant-marketplace">Plant Marketplace</option>
                    <option value="safety-app">Safety & HIRA App</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Place
                  </label>
                  <input
                    value={form.place}
                    onChange={(e) => handleChange("place", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Your city/location"
                  />
                  {errors.place && (
                    <p className="text-red-600 text-sm mt-1">{errors.place}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                      Phone
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Package
                  </label>
                  <select
                    value={form.package}
                    onChange={(e) => handleChange("package", e.target.value)}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  >
                    {packages.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} — {p.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                      Preferred date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    />
                    {errors.date && (
                      <p className="text-red-600 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                      Preferred time
                    </label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    />
                    {errors.time && (
                      <p className="text-red-600 text-sm mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    What would you like to cover?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us more about your requirements (optional)"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                  <button
                    disabled={submitting}
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Booking...
                      </>
                    ) : (
                      "Confirm & Book"
                    )}
                  </button>

                  <div className="text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                    Secure payment on confirmation • Cancel or reschedule 24h
                    prior
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Package
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((p) => (
              <div key={p.id} className="relative group">
                <div
                  className={`rounded-2xl p-8 bg-white/80 backdrop-blur-sm shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                    form.package === p.id
                      ? "border-blue-500 shadow-blue-200"
                      : "border-white/20 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800">
                      {p.title}
                    </h4>
                    <div className="text-2xl font-bold text-blue-600">
                      {p.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{p.desc}</p>
                  <ul className="text-sm text-gray-700 space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Direct session with expert
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Actionable report
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Email summary & resources
                    </li>
                  </ul>
                  <button
                    onClick={() => handleChange("package", p.id)}
                    className={`w-full rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
                      form.package === p.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                    }`}
                  >
                    {form.package === p.id ? "✓ Selected" : "Choose Package"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Pick a package
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Choose a session length and scope that fits your needs
                  perfectly.
                </p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Book & pay
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Confirm your slot and complete secure payment after
                  availability check.
                </p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Get an action plan
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Receive a practical, prioritized plan you can implement right
                  away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <blockquote className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 h-full">
                <div className="text-blue-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Helped us rescue a failing product roadmap — clear,
                  practical, fast."
                </p>
                <footer className="text-sm font-semibold text-gray-600 border-t pt-4">
                  — Priya R., Product Lead
                </footer>
              </blockquote>
            </div>

            <div className="group">
              <blockquote className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 h-full">
                <div className="text-green-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "The strategy session delivered a 3-step plan we executed in 2
                  weeks."
                </p>
                <footer className="text-sm font-semibold text-gray-600 border-t pt-4">
                  — Arjun K., Founder
                </footer>
              </blockquote>
            </div>

            <div className="group">
              <blockquote className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 h-full">
                <div className="text-purple-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Excellent mix of technical depth and business sense."
                </p>
                <footer className="text-sm font-semibold text-gray-600 border-t pt-4">
                  — Meera S., CTO
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookConsultancyModal;

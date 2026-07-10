"use client";

import React, { useState } from "react";
import {
  Smile,
  Calendar,
  ShieldCheck,
  Award,
  ArrowRight,
  Star,
  CheckCircle2,
  Heart,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  Stethoscope
} from "lucide-react";

interface HomeProps {
  onNavigate: (view: "home" | "login" | "register" | "forgot-password" | "verify-email") => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Preventive Care",
      desc: "Routine cleaning, comprehensive exams, and fluoride treatments to keep your natural smile healthy and clean.",
      icon: Smile,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Professional teeth whitening, porcelain veneers, and bonding solutions to transform and brighten your teeth.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Dental Implants",
      desc: "Permanent and natural-looking tooth replacements using cutting-edge implant technology for long-term restoration.",
      icon: Stethoscope,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Orthodontics",
      desc: "Clear aligners and traditional braces for patients of all ages, helping align your jaw and straighten your smile.",
      icon: Heart,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Happy Patients", icon: Smile },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "99.8%", label: "Success Rate", icon: ShieldCheck },
    { value: "24/7", label: "Emergency Care", icon: Calendar },
  ];

  const testimonials = [
    {
      name: "Emma Watson",
      role: "Patient since 2023",
      text: "The absolute best dental experience I have ever had. The staff is so gentle, professional, and the facility is state-of-the-art. My smile has never looked better!",
      rating: 5,
    },
    {
      name: "David Miller",
      role: "Patient since 2024",
      text: "I used to dread going to the dentist, but ApexDental changed that completely. The clear aligner process was smooth, and the results are incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ApexDental</span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-600">Clinic Care</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 transition-colors hover:text-primary">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-primary">About Us</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 transition-colors hover:text-primary">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-primary">Contact</a>
          </nav>

          {/* Authentication CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => onNavigate("register")}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary"
              >
                Contact
              </a>
            </nav>
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate("login"); }}
                className="w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Sign In
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigate("register"); }}
                className="w-full rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Next-Gen Dental Clinic Solutions
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Transforming Smiles, <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Enhancing Lives.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Experience world-class dental care with a personalized touch. From routine checkups to state-of-the-art cosmetic reconstructions, our specialists use modern technology to keep you smiling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("register")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 hover:translate-y-[-1px] transition-all"
                >
                  Schedule Your Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all"
                >
                  Explore Services
                </a>
              </div>

              {/* Bullet checks */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4">
                {[
                  "Certified Dental Surgeons",
                  "Painless Treatments",
                  "Flexible Payment Options",
                  "Direct Insurance Billing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Card / Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl bg-white p-8 shadow-xl border border-slate-100">
                <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg animate-bounce">
                  <Heart className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">Book Your Free Consult</h3>
                <p className="text-sm text-slate-500 mb-6">Create a free patient account to instantly view dentist availabilities and request appointments.</p>

                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex items-start gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Fast Approvals</h4>
                      <p className="text-sm font-medium text-slate-700">Book in under 2 minutes online</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 flex items-start gap-3">
                    <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Secure Records</h4>
                      <p className="text-sm font-medium text-slate-700">HIPAA compliant health files</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate("register")}
                  className="mt-6 w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Create Account Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="mb-2 rounded-full bg-slate-50 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-500 mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Our Expertise</h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Specialized Care Tailored for You
            </h3>
            <p className="text-slate-600 mt-4">
              We provide a complete range of dental services, leveraging modern equipment and proven procedures.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:translate-y-[-2px] transition-all text-left"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${svc.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2.5">
                    {svc.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Reviews</h2>
            <h3 className="text-3xl font-bold text-slate-900">What Our Patients Say</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((test, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-8 border border-slate-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-base italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{test.name}</h4>
                    <span className="text-xs text-slate-500">{test.role}</span>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Contact Our Clinic</h3>
                <p className="text-slate-400 mt-4 max-w-md">
                  Have questions or facing an emergency? Give us a call or visit our clinic. We are open six days a week.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-emerald-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-400">Phone</h4>
                    <p className="text-base font-semibold">+1 (555) 321-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-400">Location</h4>
                    <p className="text-base font-semibold">120 Medical Plaza, Suite 400, NY</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-purple-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-400">Hours</h4>
                    <p className="text-base font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter or simple Booking banner */}
            <div className="rounded-3xl bg-slate-800/80 p-8 border border-slate-700/50 flex flex-col justify-between">
              <div>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Join Today</span>
                <h4 className="text-2xl font-bold text-white mt-2">Ready to Book Your Appointment?</h4>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Join thousands of patients who trust ApexDental for their oral health. Register a profile now and select your preferred dentist.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("register")}
                  className="w-full sm:w-auto rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 active:scale-95 transition-all"
                >
                  Create Patient Account
                </button>
                <button
                  onClick={() => onNavigate("login")}
                  className="w-full sm:w-auto rounded-xl border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800 transition-all"
                >
                  Sign In
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-slate-500 text-center text-xs">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-white font-bold">
              A
            </div>
            <span className="font-semibold text-slate-300">ApexDental Clinic</span>
          </div>
          <p>© 2026 ApexDental Clinic Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

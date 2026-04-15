import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ShieldCheck, Users, ArrowRight, Star } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
            alt="Professional background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Integrated Management Consultancy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Professional Background Verification Checks
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              Get your fingerprints processed quickly for employment, background checks, immigration, and licensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Book Fingerprint Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Professional office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IMC</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">We provide the most reliable and efficient fingerprinting services tailored to your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fast fingerprint processing", icon: Clock },
              { title: "Professional fingerprint capture", icon: ShieldCheck },
              { title: "Trusted and confidential service", icon: CheckCircle2 },
              { title: "Quick appointment booking", icon: Clock },
              { title: "Experienced consultants", icon: Users },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/15 transition-all duration-300">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 shrink-0">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
            alt="Professional services"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">Comprehensive fingerprinting solutions for all official requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Fingerprint Capture",
                desc: "We provide professional digital and ink fingerprint capture for official applications."
              },
              {
                title: "Qualification Verification",
                desc: "Verify academic and professional credentials to ensure authenticity and compliance with industry standards."
              },
              {
                title: "Criminal Check",
                desc: "Comprehensive criminal record screenings to provide peace of mind and security for employers and individuals."
              },
              {
                title: "Driver's Record",
                desc: "Detailed reports on driving history, including violations and license status, for employment or insurance purposes."
              },
              {
                title: "Employment Background Checks",
                desc: "Fingerprints required for jobs, security clearance, and compliance."
              },
              {
                title: "Immigration Fingerprints",
                desc: "Fingerprint documentation for immigration and visa purposes."
              },
              {
                title: "Skills Programmes Training",
                desc: "Developing training strategies, facilitating workshops, and ensuring service excellence throughout the project lifecycle."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100/80 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80"
            alt="Process background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-50/95 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A simple, streamlined process to get your fingerprints captured.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-blue-200/50 -z-10"></div>
            
            {[
              { step: "1", title: "Book Appointment", desc: "Schedule your fingerprint appointment online." },
              { step: "2", title: "Visit Our Office", desc: "Our team captures your fingerprints professionally." },
              { step: "3", title: "Fast Processing", desc: "Receive your fingerprint documentation quickly." }
            ].map((item, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-blue-600">Step {item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Testimonials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">What our clients say about our services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Very fast and professional fingerprint service.",
              "The process was quick and smooth. Highly recommended."
            ].map((quote, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic text-lg">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Fingerprints Urgently?</h2>
          <p className="text-xl text-blue-100 mb-10">Book your appointment today and get assisted quickly.</p>
          <Link
            to="/book"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

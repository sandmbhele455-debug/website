import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Fingerprint capture for employment",
      desc: "Ensure compliance with employer requirements. We provide fast and accurate fingerprinting for background checks and security clearances."
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
      title: "Immigration fingerprints",
      desc: "Precise fingerprint documentation required for visa applications, immigration processes, and international travel."
    },
    {
      title: "Background checks",
      desc: "Comprehensive fingerprinting services to support thorough background investigations for various official needs."
    },
    {
      title: "Skills Programmes Training",
      desc: "Empowering individuals and organizations through structured learning and development.",
      points: [
        "Developing training strategies aligned with client objectives",
        "Managing stakeholder relationships",
        "Facilitating project-based learning workshops",
        "Implementing structured simulations",
        "Ensuring service excellence throughout the project lifecycle"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Background Verification Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            IMC provides professional background verification and fingerprint capturing services for various official and legal requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
            alt="Professional services background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services Include</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Our fingerprint capturing process is fast, secure, and confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 flex flex-col h-full">
                <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{service.desc}</p>
                {service.points && (
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {!service.points && <div className="flex-grow mb-8"></div>}
                <div className="mt-auto">
                  <Link
                    to="/book"
                    className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                  >
                    Book this service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why our process is better</h2>
                <ul className="space-y-4">
                  {[
                    "State-of-the-art digital capture technology",
                    "Traditional ink fingerprinting available",
                    "Minimal wait times with scheduled appointments",
                    "Strict confidentiality and data security protocols",
                    "Expert staff trained in official requirements"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-300 shrink-0" />
                      <span className="text-blue-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-semibold mb-8 text-blue-100">Ready to get started?</p>
                <Link
                  to="/book"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
                >
                  Book Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

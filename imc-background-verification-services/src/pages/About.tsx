import { Target, Eye, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About IMC</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Integrated Management Consultancy (IMC) provides professional background verification and fingerprint capture services for individuals and businesses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our team ensures that background verification and fingerprint capturing are done accurately and efficiently to meet official requirements. We understand the importance of precise documentation for employment, immigration, and legal purposes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are committed to providing fast and reliable services, minimizing wait times while maintaining the highest standards of quality and confidentiality.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="font-semibold text-slate-900">Certified & Secure Process</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-blue-100 font-medium">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide professional background verification and fingerprint services that are efficient, secure, and accessible to everyone who needs them.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become a trusted background verification and fingerprint service provider known for reliability, speed, and exceptional customer care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

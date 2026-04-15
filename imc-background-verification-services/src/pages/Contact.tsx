import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@imcconsultancy.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-12">
                We are here to help. Whether you have a question about our services, need help booking an appointment, or require specific information, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                    <div className="flex flex-col text-slate-600">
                      <span>069 283 2204 (WhatsApp)</span>
                      <span>067 941 0566</span>
                      <span>010 023 9587</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                    <div className="flex flex-col text-slate-600">
                      <span>tebogo@imcconsultancy.co.za</span>
                      <span>info@imcconsultancy.co.za</span>
                      <span>bookings.springs@imcconsultancy.co.za</span>
                      <span>bookings.boksburg@imcconsultancy.co.za</span>
                      <span>admin@imcconsultancy.co.za</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Office Addresses</h3>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        <span className="font-semibold block text-slate-900">Springs Office:</span>
                        46 Wima Court<br />
                        Crn 5th Avenue & 4th Street<br />
                        Springs 1560
                      </p>
                      <p>
                        <span className="font-semibold block text-slate-900">Boksburg Office:</span>
                        69 Market St<br />
                        Boksburg 1459
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                      placeholder="069 283 2204"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg flex justify-center items-center gap-2"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-slate-200 relative">
        {/* Placeholder for Google Maps */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-slate-400" />
            <p className="font-medium">Google Maps Integration</p>
            <p className="text-sm">Springs: 46 Wima Court, Crn 5th Avenue & 4th Street, Springs 1560</p>
            <p className="text-sm">Boksburg: 69 Market St, Boksburg, 1459</p>
          </div>
        </div>
        {/* In a real scenario, you would embed an iframe like this:
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        */}
      </section>
    </div>
  );
}

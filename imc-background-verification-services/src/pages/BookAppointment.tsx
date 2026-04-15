import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";

export function BookAppointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get("fullName");
    const idNumber = formData.get("idNumber");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("date");
    const time = formData.get("time");
    const message = formData.get("message");

    const subject = encodeURIComponent(`New Appointment Booking: ${service} - ${fullName}`);
    const body = encodeURIComponent(
      `Appointment Details:\n` +
      `------------------\n` +
      `Name: ${fullName}\n` +
      `ID/Passport: ${idNumber}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n\n` +
      `Additional Message:\n${message}`
    );

    window.location.href = `mailto:info@imcconsultancy.co.za?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for booking with IMC. We have received your appointment request and will contact you shortly to confirm the details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Online Fingerprint Booking</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Schedule your fingerprint appointment quickly and securely.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 -mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="idNumber" className="block text-sm font-medium text-slate-700">ID Number / Passport</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="idNumber"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        placeholder="ID or Passport Number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        placeholder="069 283 2204"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-2">Service Details</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service Needed</label>
                    <select
                      id="service"
                      required
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="capture">Fingerprint Capture</option>
                      <option value="qualification">Qualification Verification</option>
                      <option value="criminal">Criminal Check</option>
                      <option value="drivers">Driver's Record</option>
                      <option value="skills">Skills Programmes Training</option>
                      <option value="employment">Employment Background Checks</option>
                      <option value="immigration">Immigration Fingerprints</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="time" className="block text-sm font-medium text-slate-700">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Additional Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-none"
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg flex justify-center items-center gap-2"
                >
                  Confirm Booking
                  <CheckCircle2 className="h-5 w-5" />
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Your information is secure and confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

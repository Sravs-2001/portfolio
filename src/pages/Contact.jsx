import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", form);
  }

  return (
    <section className="px-12 py-20 max-w-2xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl space-y-4">

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
            rows="4"
            required
          />

          <button className="w-full bg-indigo-500 py-3 rounded-lg hover:bg-indigo-600">
            Submit
          </button>

        </form>
      ) : (
        <div className="text-center text-green-400 text-xl">
          ✅ Message Sent Successfully!
        </div>
      )}

    </section>
  );
}

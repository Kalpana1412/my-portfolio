import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47xcitq",
        "template_zcdcu3f",
        form.current,
        "HZv5B1Cx-swzVIyMP"
      )
      .then(
        () => {
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong");
        }
      );
  };

  return (
    <section id="Contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center items-center bg-indigo-600 text-white p-10">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-center text-indigo-100">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Contact Me
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";
import img1 from "../assets/images/drinks/1.png";
import img2 from "../assets/images/drinks/2.png";
import img3 from "../assets/images/drinks/3.png";
import img4 from "../assets/images/drinks/4.png";
import { motion } from "framer-motion";

export function RequestPricingForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.firstName || !form.email || !form.phone) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://american-drinks-candies-backend.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("Your request has been sent successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to send request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center relative overflow-hidden">
      {/* Relative wrapper */}
      <div className="relative w-full max-w-4xl">
        {/* ================= LEFT FLOATING IMAGES ================= */}
        <div className="absolute -left-40 top-[20%] hidden lg:flex">
          <motion.img
            src={img1}
            alt="product"
            className="w-32 xl:w-40 drop-shadow-xl"
            animate={{ y: [0, -36, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="absolute -left-40 top-[65%] hidden lg:flex">
          <motion.img
            src={img2}
            alt="product"
            className="w-28 xl:w-36 drop-shadow-xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ================= RIGHT FLOATING IMAGES ================= */}
        <div className="absolute -right-40 top-[15%] hidden lg:flex">
          <motion.img
            src={img3}
            alt="product"
            className="w-32 xl:w-40 drop-shadow-xl"
            animate={{ y: [0, -36, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="absolute -right-32 top-[60%] hidden lg:flex">
          <motion.img
            src={img4}
            alt="product"
            className="w-28 xl:w-36 drop-shadow-xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="relative z-10 w-full bg-black border-4 border-primary p-8 md:p-10 rounded-lg shadow-2xl">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-8">
            Request Product <br className="hidden sm:block" />
            Portfolio & Pricing
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="w-full px-4 py-3 bg-white text-black font-medium"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-white text-black font-medium"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full px-4 py-3 bg-white text-black font-medium"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone *"
                className="w-full px-4 py-3 bg-white text-black font-medium"
                required
              />
            </div>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 bg-white text-black font-medium"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you are looking for..."
              rows={4}
              className="w-full px-4 py-3 bg-white text-black font-medium resize-none"
              required
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-primary text-white py-4 font-bold uppercase tracking-widest text-lg"
            >
              {loading ? "Sending..." : "Request Pricing"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-300">
            For Immediate Assistance Call{" "}
            <a
              href="tel:9546042925"
              className="text-primary font-bold hover:underline"
            >
              (954) 604-2925
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

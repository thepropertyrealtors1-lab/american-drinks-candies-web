export function RequestPricingForm() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl bg-black border-4 border-primary p-8 md:p-10 rounded-lg shadow-2xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-8">
          Request Product <br className="hidden sm:block" />
          Portfolio & Pricing
        </h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 bg-white text-black font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-white text-black font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white text-black font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 bg-white text-black font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 bg-white text-black font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-4 font-bold uppercase tracking-widest text-lg transition-all shadow-lg"
          >
            Request Pricing
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
  );
}

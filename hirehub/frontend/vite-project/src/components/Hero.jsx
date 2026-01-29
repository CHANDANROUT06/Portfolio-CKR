import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Find Your Dream Job Today
      </h1>
      <p className="text-lg mb-6">
        Browse thousands of jobs from top companies
      </p>

      <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
        Explore Jobs
      </button>
    </section>
  );
}

import Navbar from "../components/Navbar";

export default function AppliedJobs() {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Applied Jobs</h2>

        <div className="bg-white p-6 rounded-xl shadow mb-4">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="text-gray-600">Google</p>
          <span className="text-sm text-green-600 font-medium">Applied</span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Backend Engineer</h3>
          <p className="text-gray-600">Amazon</p>
          <span className="text-sm text-green-600 font-medium">Applied</span>
        </div>
      </div>
    </>
  );
}

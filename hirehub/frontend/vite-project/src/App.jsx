import {  Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Auth from "./pages/Auth";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <JobProvider>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<RecruiterDashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    
    </JobProvider>
  );


}

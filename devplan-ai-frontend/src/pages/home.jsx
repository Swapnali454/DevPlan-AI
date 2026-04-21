import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            DevPlan AI
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Turn messy ideas into structured development plans in seconds.
            Stop wasting time planning — start building.
          </p>

          <button
            onClick={() => navigate("/app")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow hover:scale-105 transition"
          >
            🚀 Get Started
          </button>

          <p className="text-sm text-gray-400 mt-4">
            Used by developers to save hours of planning
          </p>
        </div>

        {/* Right Image */}
        {/* <div className="flex-1">
          <img
            src="/AIDeveloper.png"
            alt="AI Illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow"
          />
        </div> */}
      </div>

      {/* 3 Step Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          {/* <img src="/step1.png" className="w-16 mx-auto mb-3" /> */}
          <h3 className="font-bold mb-2">1️⃣ Input</h3>
          <p className="text-gray-600 text-sm">
            Paste messy requirements from emails or meetings
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          {/* <img src="/step2.png" className="w-16 mx-auto mb-3" /> */}
          <h3 className="font-bold mb-2">2️⃣ AI Processing</h3>
          <p className="text-gray-600 text-sm">
            DevPlan AI analyzes and structures the data
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
          {/* <img src="/step3.png" className="w-16 mx-auto mb-3" /> */}
          <h3 className="font-bold mb-2">3️⃣ Output</h3>
          <p className="text-gray-600 text-sm">
            Get clean development plan instantly
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
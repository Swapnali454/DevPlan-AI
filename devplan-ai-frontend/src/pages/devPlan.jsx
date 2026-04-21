import { useState } from "react";
import loginData from "../mockData/login.json";
import ecommerceData from "../mockData/ecommerce.json";
import chatData from "../mockData/chatapp.json";

function DevPlan() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) return;

    console.log("Processing input:", input);

    const text = input.toLowerCase();

    let selectedData;

    if (text.includes("login") || text.includes("auth")) {
      selectedData = loginData;
    } else if (
      text.includes("shop") ||
      text.includes("product") ||
      text.includes("ecommerce")
    ) {
      selectedData = ecommerceData;
    } else {
      selectedData = chatData;
    }

    setLoading(true);
    setOutput(null);

    // AI-like staged messages
    setAiMessage("🔍 Analyzing requirements...");

    setTimeout(() => {
      setAiMessage("🧠 Understanding project structure...");
    }, 800);

    setTimeout(() => {
      setAiMessage("⚙️ Generating development plan...");
    }, 1600);

    setTimeout(() => {
      setOutput(selectedData);
      setLoading(false);
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        DevPlan AI
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Turn messy requirements into structured development plans
      </p>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">1️⃣ Input</h3>
          <p>Paste messy requirements from emails or meetings</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">2️⃣ AI Processing</h3>
          <p>DevPlan AI analyzes and structures the data</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold mb-2">3️⃣ Output</h3>
          <p>Get clean development plan instantly</p>
        </div>
      </div> */}

      {/* <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold mb-3">Why DevPlan AI?</h2>
        <ul className="list-disc ml-5">
          <li>Saves hours of manual planning</li>
          <li>Converts unclear ideas into structured tasks</li>
          <li>Helps developers start faster</li>
        </ul>
      </div> */}
      {/* Input Section */}
      <div className="max-w-3xl mx-auto mb-8 bg-white p-6 rounded-2xl shadow">
        <textarea
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          placeholder="Paste your project requirements, emails, or meeting notes here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Generating..." : "🚀 Generate Plan"}
        </button>
      </div>

      {/* Output Section */}
      {loading && (
        <div className="text-center mb-6">

          {/* Animated AI Text */}
          <p className="text-blue-600 text-lg font-semibold mb-2 animate-pulse">
            {aiMessage}
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-150"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
          </div>

        </div>
      )}
      {output && (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Summary */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="font-bold text-lg mb-2">📄 Summary</h2>
            <p className="text-gray-600">{output.summary}</p>
          </div>

          {/* Features */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="font-bold text-lg mb-2">✨ Features</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {output.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tasks */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="font-bold text-lg mb-2">🛠 Tasks</h2>

            <p className="font-semibold">Frontend:</p>
            <ul className="list-disc pl-5 mb-2 text-gray-600">
              {output.tasks.frontend.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <p className="font-semibold">Backend:</p>
            <ul className="list-disc pl-5 text-gray-600">
              {output.tasks.backend.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          {/* API + DB */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="font-bold text-lg mb-2">🔌 API & Database</h2>

            <p className="font-semibold">APIs:</p>
            <ul className="list-disc pl-5 mb-2 text-gray-600">
              {output.apis.map((api, i) => (
                <li key={i}>
                  {api.method} {api.endpoint} - {api.description}
                </li>
              ))}
            </ul>

            <p className="font-semibold">Database:</p>
            <ul className="list-disc pl-5 text-gray-600">
              {output.database.map((db, i) => (
                <li key={i}>
                  {db.table}: {db.fields.join(", ")}
                </li>
              ))}
            </ul>
          </div>

          {/* Questions */}
          <div className="bg-white p-5 rounded-2xl shadow md:col-span-2">
            <h2 className="font-bold text-lg mb-2">❓ Questions</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {output.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
      <div className="text-center text-sm text-gray-400 mt-10">
        Built for Hackathon • DevPlan AI
      </div>
    </div>
  );
}

export default DevPlan;
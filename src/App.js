import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white text-gray-900 rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-indigo-600">Hello, I'm Edo 👋</h1>
        <p className="text-center text-lg mt-3 text-gray-700">
          I build web applications, mobile apps, and backend systems.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6 shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-700">⚙ Backend</h2>
            <p className="text-sm mt-2 text-gray-600">Golang & Laravel API</p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-700">📱 Mobile</h2>
            <p className="text-sm mt-2 text-gray-600">Flutter App Development</p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-indigo-700">🌐 Frontend</h2>
            <p className="text-sm mt-2 text-gray-600">React & Tailwind</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition font-medium">
            See My Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
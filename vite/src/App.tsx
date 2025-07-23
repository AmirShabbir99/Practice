import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  name: string;
  rollNo: string;
  _id?: string;
}

const App = () => {
  const [data, setData] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
      const res = await axios.get(`${import.meta.env.VITE_FRONTEND_URL}/api/store`);
        setData(res.data.data);
        console.log("Backend URL: ", import.meta.env.VITE_FRONTEND_URL);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-yellow-100 to-white p-6 pt-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Student Search
        </h1>

        <input
          type="text"
          placeholder="Search by name or roll number"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent mb-6 transition duration-200"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        {filteredData.length > 0 ? (
          <ul className="space-y-4">
            {filteredData.map((item) => (
              <li
                key={item._id || `${item.name}-${item.rollNo}`}
                className="bg-green-100 border border-green-300 rounded-xl px-4 py-3 shadow-sm flex justify-between items-center"
              >
                <span className="font-semibold text-gray-700">
                  {item.name}
                </span>
                <span className="text-sm text-gray-500">
                  Roll No: {item.rollNo}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No matching students found.</p>
        )}
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const arr = [
    { name: "Amir", rollNo: "1824" },
    { name: "Umar", rollNo: "1822" },
    { name: "Zain", rollNo: "1834" },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter data based on search term
const filteredData = arr.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Roll No: {item.rollNo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

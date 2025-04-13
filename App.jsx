import { useState } from "react";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        WhatsApp Profile Picture
      </h1>
      <div className="bg-[#1f1f1f] rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full text-white file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-green-600 file:text-white
                     hover:file:bg-green-700 cursor-pointer"
        />
        {selectedFile && (
          <p className="mt-4 text-sm text-gray-400">
            Selected: {selectedFile.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
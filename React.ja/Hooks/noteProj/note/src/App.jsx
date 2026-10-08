import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (heading.trim() === "" || details.trim() === "") {
      alert("Please enter heading and details");
      return;
    }

    const newNote = {
      id: Date.now(),
      heading: heading,
      details: details,
    };

    setNotes([...notes, newNote]);

    // Clear inputs
    setHeading("");
    setDetails("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        My Notes
      </h1>

      {/* Editor */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">

        <input
          type="text"
          placeholder="Enter heading..."
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Enter note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows="6"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addNote}
          className="w-full bg-blue-600 text-white py-3 rounded-lg
                     hover:bg-blue-700 transition"
        >
          + Add Note
        </button>

      </div>

      {/* Notes */}
      <div className="max-w-2xl mx-auto mt-8 space-y-4">

        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-5 rounded-xl shadow-md"
          >
            <div className="flex justify-between items-start">

              <h2 className="text-2xl font-bold text-gray-800">
                {note.heading}
              </h2>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>

            </div>

            <p className="text-gray-600 mt-3">
              {note.details}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
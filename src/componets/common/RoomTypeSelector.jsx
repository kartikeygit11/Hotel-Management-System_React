// RoomTypeSelector.js
import React, { useState, useEffect } from "react";
import { getRoomTypes } from "../utils/ApiFunction";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType.trim() !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);

      // Update the parent component with the newly added room type
      handleRoomInputChange({
        target: { name: "roomType", value: newRoomType },
      });
    }
  };

  return (
    <>
      {roomTypes.length > 0 && (
        <div className="p-4 bg-white shadow-md rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Type
          </label>
          <select
            required
            className="block w-full py-2 px-3 mt-1 mb-4 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            name="roomType"
            onChange={(e) => {
              if (e.target.value === "Add New") {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
            value={newRoom.roomType}
          >
            <option value="">Select a room type</option>
            <option value="Add New">Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {showNewRoomTypeInput && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <label
                htmlFor="new-room-type"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Add New Room Type
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  id="new-room-type"
                  className="flex-grow block w-full py-2 px-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter New Room Type"
                  value={newRoomType}
                  onChange={handleNewRoomTypeInputChange}
                />
                <button
                  type="button"
                  onClick={handleAddNewRoomType}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RoomTypeSelector;

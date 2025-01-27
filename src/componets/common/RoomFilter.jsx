import React, { useState } from "react";

const RoomFilter = ({ data, setFilteredData }) => {
    const [filter, setFilter] = useState("");

    const handleSelectChange = (e) => {
        const selectedType = e.target.value;
        setFilter(selectedType);

        const filteredRooms = data.filter(
            (room) =>
                room.roomType &&
                room.roomType.toLowerCase().includes(selectedType.toLowerCase())
        );
        setFilteredData(filteredRooms);
    };

    const clearFilter = () => {
        setFilter("");
        setFilteredData(data);
    };

    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

    return (
        <div className="flex flex-wrap items-center mb-4 space-x-4">
            <label htmlFor="room-type-filter" className="text-gray-700 font-medium">
                Filter rooms by type
            </label>
            <select
                id="room-type-filter"
                className="block w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                aria-label="room type filter"
                value={filter}
                onChange={handleSelectChange}
            >
                <option value="">Select a room type to filter...</option>
                {roomTypes.map((type, index) => (
                    <option key={index} value={String(type)}>
                        {String(type)}
                    </option>
                ))}
            </select>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 transition-colors duration-300"
                type="button"
                onClick={clearFilter}
            >
                Clear Filter
            </button>
        </div>
    );
};

export default RoomFilter;

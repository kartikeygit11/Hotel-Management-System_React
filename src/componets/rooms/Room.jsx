import React, { useEffect, useState } from "react";
import { getAllRooms } from "../utils/ApiFunction";
import RoomCard from "./RoomCard";
import RoomFilter from "../common/RoomFilter";
import RoomPaginator from "../common/RoomPaginator";

const Room = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);
  const [filteredData, setFilteredData] = useState([{ id: "" }]);

  useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading rooms.....</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">Error : {error}</div>;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / roomsPerPage);

  const renderRooms = () => {
    const startIndex = (currentPage - 1) * roomsPerPage;
    const endIndex = startIndex + roomsPerPage;
    return filteredData
      .slice(startIndex, endIndex)
      .map((room) => <RoomCard key={room.id} room={room} />);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Filter and Pagination */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <RoomFilter data={data} setFilteredData={setFilteredData} />
        </div>
        <div className="w-full md:w-1/2 flex justify-end items-center">
          <RoomPaginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* Room Cards */}
      <div className="space-y-4">
        {renderRooms()}
      </div>

      {/* Pagination at the bottom */}
      <div className="flex justify-end mt-6">
        <RoomPaginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Room;

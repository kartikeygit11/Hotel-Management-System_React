import React from "react"

const RoomPaginator = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
	return (
		<nav aria-label="Page navigation" className="flex justify-center mt-4">
    <ul className="flex space-x-2">
        {pageNumbers.map((pageNumber) => (
            <li
                key={pageNumber}
                className={`inline-block ${
                    currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                } rounded-full`}>
                <button
                    onClick={() => onPageChange(pageNumber)}
                    className="px-4 py-2 text-sm md:text-base transition-colors duration-300 ease-in-out hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300">
                    {pageNumber}
                </button>
            </li>
				))}
			</ul>
		</nav>
	)
}

export default RoomPaginator
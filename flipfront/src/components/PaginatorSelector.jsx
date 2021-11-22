import React from "react";


const PaginationSelector = ({anunciosPerPage, setAnunciosPerPage}) => {
    return (
        <div>
                <select value={anunciosPerPage} onChange={(e) => setAnunciosPerPage(Number(e.target.value))}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
            </div>
    )
}

export default PaginationSelector
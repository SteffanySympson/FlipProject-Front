import React from "react";
import '../components/structure/list/List.css';

const PaginationSelector = ({anunciosPerPage, setAnunciosPerPage}) => {
    return (
        <div>
                <select className="selector" value={anunciosPerPage} onChange={(e) => setAnunciosPerPage(Number(e.target.value))}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
        </div>
    )
}

export default PaginationSelector
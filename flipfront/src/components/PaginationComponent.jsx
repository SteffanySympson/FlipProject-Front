import React from "react";
import '../components/structure/list/List.css';

const PaginationComponent = ({pages, setCurrentPage}) => {
    return (
        <div> {Array.from(Array(pages), (anuncios, index) => {
            return <button className="paginationbtn" value={index} onClick={(e) => setCurrentPage (Number(e.target.value))}> {index +1}</button>
        })}
        </div>
    )
}

export default PaginationComponent
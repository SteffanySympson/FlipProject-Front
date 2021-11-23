import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Api from '../../../api/api';
import '../list/List.css';
import PaginationComponent from '../../PaginationComponent';
import PaginationSelector from '../../PaginatorSelector';

const List = () => {
    const [anuncios, setAnuncios] = useState([]);
    
    const [anunciosPerPage, setAnunciosPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(anuncios.length / anunciosPerPage);
    const startIndex = currentPage * anunciosPerPage;
    const endIndex = startIndex + anunciosPerPage;
    const currentAnuncios = anuncios.slice(startIndex, endIndex);


    useEffect(() => {
        getAnuncios();
    }, []);

    const getAnuncios = async () => {
        const response = await Api.fetchGetAll();
        const data = await response.json();
        setAnuncios(data);
    }

    return(
        <>
            <div class='tudo center'>
                
            <h1>Nossos Anúncios</h1>

            <PaginationSelector anunciosPerPage={anunciosPerPage} setAnunciosPerPage={setAnunciosPerPage} />
            
                {
                    currentAnuncios.map((anuncios, index) => (
                        <div className='div-ok'>
                            <div className='div-ok-int'>
                                <Card data = {anuncios} key={index} />
                            </div>
                        </div>
                    ))
                }

                <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />

            </div>
        </>
    )
}
export default List;
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Api from '../../../api/api';
import '../list/List.css';

const List = () => {
    const [anuncios, setAnuncios] = useState([]);

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
            <h1>Nossa Lista de Anúncios</h1>
                {
                    anuncios.map((anuncios, index) => (
                        <div className='div-ok'>
                            <div className='div-ok-int'>
                                <Card data = {anuncios} key={index} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default List;
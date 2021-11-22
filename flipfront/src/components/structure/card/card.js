import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const anuncio = props.data;
    return(
        <>
            <Link to={`/view/${anuncio._id}`} >
                <h5>{anuncio.condominio}</h5>
                <span>{anuncio.uf}</span>
                <span>{anuncio.cidade}</span>
                <span>{anuncio.bairro}</span> 
                <span>{anuncio.logradouro}</span> 
                <span>{anuncio.tipo_imovel}</span> 
                <span>{anuncio.quartos}</span> 
                <span>{anuncio.banheiros}</span> 
                <span>{anuncio.suites}</span> 
                <span>{anuncio.vagas}</span> 
                <span>{anuncio.area}</span>
                <span>{anuncio.mobilia}</span> 
                <span>{anuncio.andar}</span> 
                <span>{anuncio.preco_venda}</span> 
                <span>{anuncio.preco_condominio}</span>
                <span>{anuncio.preco_iptu_mes}</span> 

            </Link>
        </>
    )
}
export default Card;
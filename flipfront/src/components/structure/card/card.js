import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const anuncio = props.data;
        
    return(
        <>
        
            <Link to={`/view/${anuncio._id}`} >
                <h5>{anuncio.condominio}</h5>
                <p>UF: {anuncio.uf}</p>
                <p>Cidade: {anuncio.cidade}</p>
                <p>Bairro: {anuncio.bairro}</p> 
                <p>Endereço: {anuncio.logradouro}</p> 
                <p>Tipo de Imóvel: {anuncio.tipo_imovel}</p> 
                <p>Nº de Quartos: {anuncio.quartos}</p> 
                <p>Nº de Banheiros: {anuncio.banheiros}</p> 
                <p>Nº de Suítes: {anuncio.suites}</p> 
                <p>Vagas na Garagem: {anuncio.vagas}</p> 
                <p>Área- m²: {anuncio.area}</p>
                <p>Mobília: {anuncio.mobilia}</p> 
                <p>Andar: {anuncio.andar}</p> 
                <p>Valor de Venda: R$ {anuncio.preco_venda}</p> 
                <p>Valor Mensal do Condomínio: R$ {anuncio.preco_condominio}</p>
                <p>Valor Mensal do IPTU: R$ {anuncio.preco_iptu_mes}</p> 

            </Link>
        </>
    )
}
export default Card;
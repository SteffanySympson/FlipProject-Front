/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LogoTopo from '../../../assets/logo512.png';
import './header.css';

const Header = () => {
    return(
        <>
            <div className='tudo-header'>
               
                <img className='logo' src={ LogoTopo }/>
                <a className='menus'> O que fazemos </a>
                <a className='menus'> Quem Somos </a>
                <a className='menus'> Contato </a>
                <button className='btn-topo'>Quero Cadastrar Meu Imóvel</button>
                
            </div>
        </>
    )
}
export default Header;
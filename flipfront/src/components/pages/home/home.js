import React from 'react';
import List from '../../structure/list/List';
import { Link } from 'react-router-dom';
import '../../structure/list/List.css';


const Home = () => {
    return (
        <>
            <div className=''>
            
              <Link to="/FiltroQuarto"><button className='filterbtn'>Filtrar Preferências</button></Link>
              <List />
            </div>
        </>
    )
}
export default Home;
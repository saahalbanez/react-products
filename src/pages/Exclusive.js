import React, { Component } from 'react';
import api from '../services/api';
import './List.css';
import { Link } from 'react-router-dom';
import Favorite from '../assets/favorito.png';
import NoFavorite from '../assets/nao_favorito.png';
import Search from '../components/Search';

class Exclusive extends Component {
    
    state = {
        list: [],
    };

    filterExclusive(obj){
        if (obj.exclusivo)
            return true;        
    }
    
    async componentDidMount() {
        const response = await api.get('5d3b57023000005500a2a0a6');        
        this.setState({ list: response.data.produtos.filter(this.filterExclusive) });
    }

    handleDetail = product => {        
        localStorage.setItem('product', JSON.stringify(product));        
    }

    render() {
        return (
            <>            
            <header>
                <div className="box-search">
                    <div class>
                        <label className="title">Empresa XPTO </label>
                        <label>- Conheça todos os nossos produtos excluivos</label>                      
                    </div>
                    <Search/>
                </div>                                                    
                <p>Listagem de produtos - clique no produto desejado para saber mais</p>
                <hr></hr>
            </header>
            <section>
                <div className="box-product">
                    { this.state.list.map(produtos => (
                    <div className="item" onClick={() => this.handleDetail(produtos)}>                        
                        <Link to={`detail/${produtos.id}`}>
                        <div className="box-container">
                            <div className="box-image">
                                <img src={produtos.imagem}/>
                            </div>
                            <div className="box-details">
                                <div className="box-price">
                                    <div className="item-price">
                                        <label className="price">R$ {produtos.valor}</label>
                                    </div>
                                    <div className="item-favorite">
                                        <img src={produtos.promocao ? Favorite : NoFavorite}></img>
                                        <label className="favorite"> Tornar Favorito</label>
                                    </div>
                                </div>
                                <h2 className="description">{produtos.nome}</h2>
                                <p>{produtos.decricaoCurta}</p>
                            </div>
                        </div>
                        </Link> 
                    </div>               
                    ))}                    
                </div>
            </section>           
            </>
        );
    }
}

export default Exclusive;
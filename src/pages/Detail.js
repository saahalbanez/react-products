import React, { Component } from 'react';

import Favorite from '../assets/favorito.png';
import Loupe from '../assets/loupe.png';

import './Detail.css';
import Search from '../components/Search';

class Detail extends Component {

    state = {
        detail: [],
        fichaTecnica: []
    };
    
    currencyFormat(num) {
        return Number(num)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');        
    }    

    componentDidMount() {
        const product = JSON.parse(localStorage.getItem('product'));
        this.setState({ detail: product });
        this.setState({ fichaTecnica: product.fichaTecnica});
    }

    render() {
        return (
            <>                
                <header>
                    <div className="box-search">
                        <div className="teste">
                            <label className="product-title">{this.state.detail.nome}</label>
                            <label className="product-price"> R$ {this.currencyFormat(this.state.detail.valor)} 
                            </label>
                            <img src={Favorite}></img>
                            <label className="favorite"> Tornar Favorito</label>                        
                        </div>
                        <Search/>
                    </div>                                                    
                    <p>{this.state.detail.decricaoCurta}</p>
                    <hr></hr>
                </header>
                <section>                        
                    <div className="box-product">
                        <div className="item-image">
                            <img src={this.state.detail.imagem}/>
                        </div>
                        <div className="item-details">
                            <div className="details">
                                <h2>Detalhes do Produto</h2>
                                <p>{this.state.detail.descricaoLonga}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="datasheet">
                        <h2>Ficha Técnica</h2>
                        <hr></hr>
                        <div className="box-datasheet">                        
                        { this.state.fichaTecnica.map(fichaTecnica => (
                            <>
                            <div className="item-datasheet">
                                <li>{fichaTecnica.titulo}: {fichaTecnica.descricao}</li>
                            </div>                            
                            </>
                        ))}                        
                        </div>
                    </div>
                </section>                                    
            </>
        )
    }
}

export default Detail;
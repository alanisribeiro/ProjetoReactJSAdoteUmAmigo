import React from 'react'
import logo from '../../img/logo.png'
import { HiLocationMarker} from "react-icons/hi";

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container grid1">
                <div className="box">
                    <img src={logo} alt="" />
                    <p>Acreditamos que a educação é uma ferramenta poderosa para promover uma mudança positiva na relação entre seres humanos e animais.</p>
                    <div className="socialIcon">
                    <i className='fab fa-facebook-f'></i>
                        <i className='fab fa-instagram'></i>
                        <i className='fab fa-twitter'></i>
                        <i className='fab fa-youtube'></i>
                    </div>
                </div>

                <div className="box">
                    <h2>Acesso Rápido</h2>
                    <ul>
                        <li>Home</li>
                        <li>Abrigo</li>
                        <li>Voluntários</li>
                        <li>Doações</li>
                        <li>Adoção</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Campanhas</h2>
                    <div className="text">
                        <p>Amor Pata-a-Pata</p>
                        <span>Adoção Responsável</span>
                    </div>

                    <div className="text">
                        <p>Abrace uma Pata</p>
                        <span>Doações e apoio</span>
                    </div>

                    <div className="text">
                        <p>Castração Solidária</p>
                        <span>Incentivo a castração </span>
                    </div>

                
                </div>
                <div className="box">
                    <h2>Entre em contato</h2>

                    <div className="icon">
                        <i><HiLocationMarker/></i>                      
                        <label htmlFor="">São Paulo, SP - Brasil</label>
                    </div>
                    <div className="icon">
                        <i className='fa fa-phone'></i>
                        <label htmlFor="">Cel: 11 12345 6789</label>
                    </div>
                    <div className="icon">
                        <i className='fa fa-envelope'></i>
                        <label htmlFor="/">Email:suporteabrigo@gmail.com</label>
                    </div>
                </div>
            </div>
            <div className="legal container">
                <p>All rights reserved</p>
                <label htmlFor="">Developed by <span>Alanis Ribeiro </span>| Design by <span>GorkCoder</span></label>

            </div>
        </footer>
    </>
  )
}

export default Footer
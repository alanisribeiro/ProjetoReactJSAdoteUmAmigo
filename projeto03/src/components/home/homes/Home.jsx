import React from 'react'
import homeimg from '../../../img/home.png'


const Home = () => {
  return (
    <>
        <section className='home'>
            <div className="container flex">
                <div className="left">
                    <div className="img">
                        <img src={homeimg} alt="" />
                    </div>
                </div>
                <div className="right topMarign">
                    <h1>
                        ADOTE UM <br/>
                        AMIGO
                    </h1>
                    <div className="socialIcon">
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-instagram instagram'></i>
                        <i className='fab fa-twitter twitter'></i>
                        <i className='fab fa-youtube youtube'></i>
                    </div>
                    <p>Nossa organização tem como objetivo proporcionar um ambiente seguro, amoroso e acolhedor para os animais, além de promover a conscientização sobre a importância da preservação da vida selvagem e o respeito pelos nossos amigos de quatro patas.</p>
                    <button className='primary-btn'>Nos Contate</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
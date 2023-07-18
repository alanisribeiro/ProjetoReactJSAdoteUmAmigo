import React from 'react'
import adoptionprocess from '../../../img/adoptionprocess.jpg'
import beneficadoption from '../../../img/beneficadoption.jpg'
import saleadoption from '../../../img/saleadoption.jpg'
import caredog from '../../../img/caredog.jpg'
import olddog from '../../../img/olddog.jpg'
import shelterdog from '../../../img/shelterdog.jpg'



const Knowledge = () => {

    
  return (
    <>

    <section className='knowledge topMarign'>
        <div className="container">
            <div className="heading">
                <h3>CONHECIMENTO</h3>
                <h1>Tenha conhecimento sobre</h1>
            </div>
            <div className="img">

                             <div className="image">
                              <img src={adoptionprocess} alt="" />
                              <div className="box">
                                <h2>Processo de adoção</h2>
                                <p>Como funciona o processo de adoção de animais, quais os requisitos e procedimentos envolvidos</p>
                                </div>
                                </div>

                                <div className="image">
                                <img src={beneficadoption} alt="" />
                                <div className="box">
                                <h2>Benefícios da adoção</h2>
                                <p> Benefícios de adotar um animal, como o amor incondicional, companheirismo e a satisfação de dar um lar a um animal necessitado.</p>
                                </div>
                                </div>

                                <div className="image">
                                <img src={saleadoption} alt="" />
                                <div className="box">
                                <h2>Adoção x Compra</h2>
                                <p>Diferenças entre adotar um animal de um abrigo ou instituição de resgate em comparação com a compra de animais em lojas ou criadores.</p>
                                </div>
                                </div>

                                <div className="image">
                                <img src={caredog} alt="" />
                                <div className="box">
                                <h2>Cuidados pós-adoção</h2>
                                <p>Cuidados necessários após a adoção, como alimentação adequada, exercícios, treinamento e visitas regulares ao veterinário.</p>
                                </div>
                                </div>

                                <div className="image">
                                <img src={olddog} alt="" />
                                <div className="box">
                                <h2>Adoção de animais idosos</h2>
                                <p>A importância de adotar animais mais velhos e as vantagens de proporcionar um lar amoroso para eles.</p>
                                </div>
                                </div>

                                <div className="image">
                                <img src={shelterdog} alt="" />
                                <div className="box">
                                <h2>Voluntariado e apoio a abrigos</h2>
                                <p>Muitos abrigos precisam de ajuda com tarefas. Sua presença física e ajuda prática serão muito apreciadas.</p>
                                </div>
                                </div>
    
                                </div>
                          

        </div>
    </section>
        
    </>
  )
}

export default Knowledge
import React from 'react'
import dogimportance from '../../../img/dogimportance.jpg'

const Importance = () => {
    const data = [
        {
          title: "Adoção de animais",
          desc1: "A adoção de animais é uma escolha que vai muito além de simplesmente trazer um novo membro para a família. É um ato de compaixão, responsabilidade e amor, capaz de transformar vidas, tanto dos animais adotados quanto das pessoas que os acolhem em seus lares.",
          desc2: "Ao adotar um animal, você está fazendo uma diferença real no mundo. Milhões de animais são abandonados e maltratados todos os anos, muitos deles acabam em abrigos à espera de um lar. Ao optar pela adoção, você está rompendo esse ciclo de abandono e dando a esses animais uma segunda chance de serem amados e cuidados.",
          desc3: "Além disso, ao adotar, você está contribuindo para a causa animal de forma mais ampla. Os abrigos e organizações que promovem a adoção dependem do apoio e da conscientização da sociedade para continuar seu importante trabalho. ",
        
        },
      ]
  return (
    <>
        <section className='importance topMarign'>
            <div className="container flex">
                {
                    data.map((val) =>{
                        return(
                       <>
                        <div className="left mtop">
                            <div className="heading">
                                <h3>A Importância da </h3>
                                <h1>{val.title}</h1>
                            </div>
                            <p>{val.desc1}</p>
                            <p>{val.desc2}</p>
                            <p>{val.desc3}</p>
                            <button className='primary-btn'>Saiba mais</button>
                        </div>
                        <div className="right">
                            <div className="img">
                                <img src= {dogimportance} alt="" />
                            </div>
                        </div>
                        </>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Importance
import React from 'react'

const Wrapper = () => {
    const data = [
        {
          title: "ABRIGOS PARA ANIMAIS",
          heading: "Conheça outros abrigos de animais",
          desc: "Temos o privilégio de contar com diversos abrigos parceiros em nosso site, que compartilham da mesma missão de proteger e cuidar dos animais em situação de vulnerabilidade.",
        },
      ]
  return (
    <>
       <section className='branding wrapper'>
        <div className="container">
            {data.map((val) => {
                return(
                    <div className="box">
                        <h4>{val.title}</h4>
                        <h2>{val.heading}</h2>
                        <p>{val.desc}</p>
                        <button className='primary-btn'>Conhecer</button>
                    </div>
                )

            })}
        </div>
       </section>
    </>
  )
}

export default Wrapper
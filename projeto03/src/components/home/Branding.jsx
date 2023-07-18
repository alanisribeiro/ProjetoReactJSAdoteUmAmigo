import React from 'react'

const Branding = () => {
    const data = [

        {
          id: "01",
          heading: "Salvar uma vida",
          desc: "Você estará dando uma segunda chance a um ser vivo que pode ter passado por experiências difíceis ou foi abandonado",
        },
        {
          id: "02",
          heading: "Amor incondicional",
          desc: " Eles apreciam o carinho e a atenção recebidos, e essa conexão emocional é retribuída de forma genuína e profunda.",
        },
        {
          id: "03",
          heading: "Responsabilidade social e ambiental",
          desc: "Redução do número de animais abandonados nas ruas e abrigos, ajudando a controlar a superpopulação e diminuir o sofrimento desses seres indefesos.",
        },
      ]

  return (
    <>
        <section className='branding'>
            <div className="tituto">
                <h3>3 Motivos para adotar um animalzinho </h3>
            </div>
            
            <div className="container grid">
                {data.map((value) => {
                    return(
                        <div className="box flex">
                            <div className="text">
                            
                                <h1>{value.id}</h1>
                            </div>
                            <div className="para">

                                <h2>{value.heading}</h2>
                                <p>{value.desc}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Branding
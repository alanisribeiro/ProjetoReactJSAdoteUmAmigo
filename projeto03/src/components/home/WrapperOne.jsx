import React from 'react'

const WrapperOne = () => {

    const data = [
        {
          num: "490",
          text: "VOLUNTÁRIOS",
        },
        {
          num: "80",
          text: "PARCERIAS",
        },
        {
          num: "6",
          text: "PRÊMIOS",
        },
        {
          num: "5",
          text: "ANOS DE FUNDAÇÃO ",
        },
      ]

  return (
    <>
        <section className='branding wrapperOne'>
            <div className="container grid1">
                {data.map((val) => {
                    return(
                        <>
                        <div className="box">
                            <h1>{val.num}</h1>
                            <p>{val.text}</p>
                        </div>
                        </>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default WrapperOne
import React from 'react'

const Statistics = () => {
    const Progress = ({done, title, desc}) =>{
        return(
            <div className="progress">
                <div 
                className="progress-done" 
                style={{opacity: 1, width: `${done}%` }}>
                    <h4>{title}</h4>
                    <h4>{done} </h4>
                    <h5>{desc}</h5>
                </div>
            </div>
        )
    }
    const data = [
        {
            title:"NOSSO ABRIGO",
            para:"Nossa história começou com um pequeno grupo de pessoas apaixonadas por animais, movidas pela convicção de que cada vida importa e merece ser valorizada. Com muito esforço e determinação, construímos um abrigo acolhedor e seguro, onde os animais são tratados com respeito, dignidade e amor.",
            para1:"Aqui, nossos profissionais e voluntários dedicam seu tempo e talento para garantir que cada animal receba os melhores cuidados possíveis. ",
        }
    ]
  return (
    <>
    <section className='statistics'>
        <div className="container">
            <div className="heading">
                <h4>ABRIGO</h4>
                <h1>Adote um Amigo</h1>
            </div>
            <div className="content flex">
                <div className="left topMarign">
                    <Progress done='90' title='Rações doadas' desc='1,8M Kg'/>
                    <Progress done='60' title='Vacinados' desc='175K'/>
                    <Progress done='80' title='Medicados' desc='+503k'/>
                    <Progress done='50' title='Castrados' desc='+15K'/>
                    <Progress done='40' title='Adotados' desc='+14K'/>
                </div>
                <div className="right mtop">
                    {data.map((val) =>{
                        return(
                            <>
                            <h1>{val.title}</h1>
                            <p>{val.para}</p>
                            <p>{val.para1}</p>
                            <button className='primary-btn'>Saiba mais</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Statistics
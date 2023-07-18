import React from 'react'
import blog1 from '../../../img/blog1.jpg'
import blog2 from '../../../img/blog2.jpg'
import blog3 from '../../../img/blog3.jpg'

const Blog = () => {
  return (
       <>
        <section className='blog services'>
            <div className="container topMarign">
                <div className="heading">
                    <h3>BLOG</h3>
                    <h1>Conheça Nosso Blog</h1>
                </div>
            </div>

            <div className="container">
                <div className="box">
                    <img src={blog1} alt="" />
                    <h5>16 JUL 2023</h5>
                    <h6>Adoção responsável</h6>
            
                    <p>Leia mais </p>
                </div>

                <div className="box">
                    <img src={blog2} alt="" />
                    <h5>10 JUL 2023</h5>
                    <h6>Animais de rua</h6>
                    <p>Leia mais </p>
                </div>

                <div className="box">
                    <img src={blog3} alt="" />
                    <h5>02 JUL 2023</h5>
                    <h6>Campanhas de adoção</h6>
            
                    <p>Leia mais </p>
                </div>
            </div>
        </section>
        </>
  )
}

export default Blog
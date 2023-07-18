import React from 'react'
import cachorro1 from '../../../img/dog1.jpg'
import cachorro2 from '../../../img/dog2.jpg'
import cachorro3 from '../../../img/dog3.jpg'
import gato1 from '../../../img/cat1.jpg'
import gato2 from '../../../img/cat2.jpg'
import gato3 from '../../../img/cat3.jpg'



const Friends = () => {
  
  return (
    <>
      <section className='friends'>
        <div className="heading">
          <h3>COMPANHEIROS</h3>
          <h1>Companheiros Que Estão Para Adoção</h1>
        </div>
        <div className="content">
        <div className="image1">
            <img src={cachorro1} alt="" />
            <div className="front"></div>
          </div>

          <div className="image2">
            <img src={cachorro2} alt="" />
          </div>

          <div className="image3">
            <img src={cachorro3} alt="" />
          </div>

          <div className="image4">
            <img src={gato1} alt="" />
          </div>

          <div className="image5">
            <img src={gato2} alt="" />
          </div>

          <div className="image6">
            <img src={gato3} alt="" />
          </div>

        </div>
      </section>
    </>
  )
}

export default Friends
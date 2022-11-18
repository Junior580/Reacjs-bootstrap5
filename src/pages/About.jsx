import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'

export const About = () => (
  <div className="d-flex flex-column" style={{ width: '100%', height: '90vh' }}>
    <div
      style={{
        width: '100%',
        height: '45%',
        backgroundImage: `url(${MultiplePizzas})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></div>
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: '55%', marginTop: '50px' }}
    >
      <h1
        className="d-flex flex-row justify-content-center"
        style={{
          fontWeight: '400',
          fontSize: '70px',
          color: 'black',
          height: '30px',
        }}
      >
        ABOUT US
      </h1>
      <p style={{ width: '1200px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit
      </p>
    </div>
  </div>
)

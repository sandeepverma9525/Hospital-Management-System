import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who Me Are</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos praesentium quaerat nesciunt esse nostrum rerum impedit! Consequatur porro exercitationem, at dignissimos molestias repudiandae. Quos quod sint quibusdam obcaecati sed autem! Amet corrupti ad est consequuntur eaque! Odio, earum. Quidem quae repellendus laborum eius sed quasi facilis doloribus, animi doloremque laboriosam.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus sed non quis. Culpa mollitia rem nesciunt facilis dolore, minus quas perferendis totam libero ea, earum consequuntur harum repellat quaerat atque iste, impedit praesentium quis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography
 
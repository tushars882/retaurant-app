import React from 'react'

export const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about_img">
              <img
                src="https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="no img"
              />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Regards</h3>
            <h1>We Wish You Have A Good Time Here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi voluptatibus fugit nemo illo molestiae dolores unde
              quibusdam, ipsam totam sapiente omnis vitae cumque.
            </p>
            <div className="about_btn">
              <a href="/" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

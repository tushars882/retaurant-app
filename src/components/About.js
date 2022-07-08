import React from "react";

export const About = () => {

  const aboutUs=(e)=>{
    var x=document.getElementById('read-more');
    var y=document.getElementById('aboutUs-button')
    if(x.style.display==='none'){
      x.style.display='block'
      y.innerText.replace='Read Less'
    }
    else{
      x.style.display='none'
    }
  }
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>Welcome To Our Website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi voluptatibus fugit nemo illo molestiae dolores unde
              quibusdam, ipsam totam sapiente omnis vitae cumque.
            </p><span id="read-more">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla corrupti magni ipsum? A necessitatibus voluptatem voluptate fugit tenetur minima. Natus, eos! Soluta, non quaerat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt reprehenderit consequatur laudantium eum perspiciatis debitis at, aspernatur, voluptatem iusto exercitationem consequuntur cumque veniam.</span>
            <div className="about_btn">
             <button className="button-aboutUs" onClick={aboutUs} id='aboutUs-button'>Read More</button>
            </div>
          </div>
          <div className="col-6">
            <div className="about_img">
              <img
                src="https://images.unsplash.com/photo-1596463989140-3b600dab72e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="no img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

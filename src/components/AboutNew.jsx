import React from "react";
import "../styles/AboutNew.css";
function AboutNew() {
  return (
    <div className="aboutt">
      <h1 id="my-text">About Us</h1>
      <p id="my-text">Hello, wishes from Hotel Plus</p>
      <br />
      <p id="my-text">
        Finding a great house is easy with Hotel Plus. You don't need to break the bank anyore to score holiday rentals or
        find a rental of your choosing. We list hundreds of cabins, condos, houses, and other vacation rentals. 
        Hotel plus makes it quick and easy to book just the right accommodation. It's our job to help you find experiences around the world.
      </p>
      <br />
      <p id="my-text">
        No reservation costs. Great rates. Book at over 1,400,000 hotels online. We speak your language. 
        Read Real Guest Reviews. Best Price Guarantee. Get Instant Confirmation. 24/7 Customer Service. 
        Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs.
      </p>
      <br />
      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/G9TJXdq_iBQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
        ></iframe>
        <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/wXqr0JYWBLs" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
        ></iframe>
        <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/F9cHkPw9hwE" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
        ></iframe>
        <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Bt7_kecDFVk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default AboutNew;
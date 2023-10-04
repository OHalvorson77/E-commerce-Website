import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div className="row">
        <div className="col-md-6">
            <p className="lead">
              Hi, I am Owen Halvorson, a student attending the University of Ottawa and a fellow pet owner. The picture on the right is a picture of my dog. I wanted to combine my passion for technology and my love for pets in order to bring a store that can solve issues that owners run into and improve pets' lives. The store seeks to fix issues like lost pets, feeding when away, as well as design interactive toys. Thank you very much for visiting the store!
            </p>
          </div>
          <div className="col-md-6">
            {/* Add your image here */}
            <img
              src="./assets/IMG_4522.jpg"
              alt="Owen Halvorson's dog"
              className="img-fluid"
              style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
            />
          </div>
        
        </div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://th.bing.com/th/id/OIP.WULxgz39wuoKUhJeUxPasQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">GPS Collars</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://petstrendstore.com/wp-content/uploads/2019/01/i-star-automatic-pet-feeder-cat-and-dog-timed-dry-food-dispenser-with-large-1024x1024.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Automatic Food Dispensories</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://practicalpup.com/wp-content/uploads/2020/12/mainimage1Automatic-Pet-Feeder-Fetch-Tennis-Ball-Launcher-Dog-Training-Toys-Interactive-Throwing-Ball-Machine-768x768.jpg0" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Interactive Toys</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AboutPage
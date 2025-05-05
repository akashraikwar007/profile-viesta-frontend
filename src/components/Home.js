import React from "react";
import { useState } from "react";

import "./Home.css";

const HomePage = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <div>
      <div className="top-bar text-light py-1 px-3 d-flex justify-content-between align-items-center small">
        <div>
          <i className="bi bi-telephone"></i> +91 (968) 553 38 78 &nbsp; |
          &nbsp;
          <i className="bi bi-envelope"></i> akashraikwar763@gmail.com
        </div>
        <div>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Ujjain
          </a>
        </div>
      </div>

      <div
        className="position-relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://static.vecteezy.com/system/resources/thumbnails/050/432/389/small/confident-young-businessman-smiling-and-looking-at-in-modern-office-environment-photo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="container h-100 d-flex flex-column justify-content-center">
          <h6 className="main-color mt-5">WE ARE HERE TO HELP YOU</h6>
          <h1 className="fw-bold">WELCOME TO PROFILE VIESTA</h1>
          <p className="w-50">
            At Profile Viesta, we believe in fostering a collaborative
            environment where your ideas can flourish. We invite you to explore
            our services, engage with our community, and discover how we can
            help you reach new heights.
          </p>
          <button className="btn bg-color text-white ">GET STARTED</button>
        </div>
      </div>

      {/* Cards */}
      <div className="container my-5">
        <h2 className="text-center mb-3">Key Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="main-card p-4 shadow rounded-4 border-0">
              <i class="bi bi-people"></i>
              <div className="card-text-1">
                <h2>User Management</h2>
                <p>Easily view, add, edit, and delete user profiles.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main-card p-4 shadow rounded-4 border-0">
              <i class="bi bi-search"></i>
              <div className="card-text-1">
                <h2>Advanced Search</h2>
                <p>Find users quickly with powerful filtering.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="main-card p-4 shadow rounded-4 border-0">
              <i class="bi bi-shield-check"></i>
              <div className="card-text-1">
                <h2>Secure & Reliable</h2>
                <p>User data is protected with top-level security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h5>Welcome to Profile Viesta</h5>
            <p className="mt-3">
            Profile Viesta is your go-to platform for personalized and professional profile management. Designed to help you create, manage, and showcase your information in the most effective way possible, Profile Viesta ensures that your personal and professional data is always organized and accessible.
              <br />
              <br />
              <h5>Why Profile Viesta?</h5>
              <ul>
                <li>Easy-to-use interface for creating and managing profiles</li>
                <li>Access to advanced features for customization</li>
                <li>Secure storage of personal and professional data</li>
                <li>Integration with various platforms for better visibility</li>
              </ul>
            </p> <br />
            <p style={{fontWeight:"500", marginBottom:"20px"}}>Whether you're updating your resume, portfolio, or professional information, Profile Viesta is here to assist. Experience the simplicity and power of managing your profile with us!</p>
            <button className="btn bg-color text-white">READ MORE</button>
          </div>

          <div className="col-md-6">
            <div className="bg-color text-white p-4 rounded shadow-sm">
              <h5 className="fw-bold mb-4">UPCOMING EVENTS</h5>
              {[
                {
                  title: "Sed ut perspiciatis unde omnis iste.",
                  time: "10:00 AM - 3:00 PM",
                },
                {
                  title: "Lorem ipsum gravida nibh vel.",
                  time: "10:00 AM - 3:00 PM",
                },
                {
                  title: "Morbi accumsan ipsum velit.",
                  time: "10:00 AM - 3:00 PM",
                },
              ].map((event, i) => (
                <div key={i} className="mb-3 border-bottom pb-2">
                  <small>
                    <i className="bi bi-calendar3"></i> 2 December 2019
                  </small>
                  <p className="mb-1 fw-bold">{event.title}</p>
                  <small>
                    <i className="bi bi-clock"></i> {event.time} &nbsp;{" "}
                    <i className="bi bi-geo-alt"></i> PC Auditorium
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color py-5">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="h4  text-center">
              Candidates can review their submitted information by clicking the app link              
              </p>
              <div className="text-center">
              <button className="btn btn-dark">View Users</button>
              </div>
            </div>
            <div className="col-md-6">
              <p className="h4 text-center">
              Add users now for a seamless experience and full access.  
              </p>
              <div className="text-center">
              <button className="btn btn-dark">Add Users</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
      <h4 className="fw-bold mb-4 text-center mb-5">Testimonials</h4>
      <div className="row justify-content-center">
        {/* First card */}
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow rounded-4 border-0">
            <div className="d-flex align-items-center gap-3">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMWRiZDE2ZTItMGQ3MC00ZmJlLWIwNWMtMzdhYTE5MDIyNDI2XkEyXkFqcGc@._V1_.jpg"
                alt="Profile"
                className="rounded-circle zoom-img"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => openModal("https://m.media-amazon.com/images/M/MV5BMWRiZDE2ZTItMGQ3MC00ZmJlLWIwNWMtMzdhYTE5MDIyNDI2XkEyXkFqcGc@._V1_.jpg")}
              />
              <div>
                <h6 className="mb-1">Ashlin Harris</h6>
                <div className="d-flex gap-2">
                <small className="text-muted">Actor</small>
                <div style={{fontSize:"12px", }} className="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                </div>
                </div>
                <p style={{fontSize:"12px"}}>(5/5)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow rounded-4 border-0">
            <div className="d-flex align-items-center gap-3">
              <img
                src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F2%2Fpeople%2F296d0929a85fed6e35046c40c43a4f28.jpg"
                alt="Profile"
                className="rounded-circle zoom-img"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => openModal("https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F2%2Fpeople%2F296d0929a85fed6e35046c40c43a4f28.jpg")}
              />
              <div>
                <h6 className="mb-1">Gurfateh Pirzada</h6>
                <small className="text-muted">Actor</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Zoomed-In Image */}
      {showModal && (
        <div className="modal" style={modalStyle} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" className="zoomed-img" />
            {/* Close Button */}
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>

      <div className="bg-dark text-white py-3 mt-5">
        <footer>
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-2 mb-md-0 small">
              All rights reserved &mdash; Profile Viesta
            </p>
            <p className="mb-0 small">&copy; 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
};


// Styles for modal
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

// Styles for zoomed-in image
const zoomedImageStyle = {
  maxWidth: "90%",
  maxHeight: "90%",
  objectFit: "contain",
};

// Styles for close button
const closeBtnStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "30px",
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  border: "none",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
};




export default HomePage;

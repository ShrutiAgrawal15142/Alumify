import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"; // Import your CSS file for Home

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
                    <div className="navbar">
                      <div className="navbar-left">
                        <p>Jawaharlal University</p>
                      </div>
                      <div className="navbar-right">
                        <Link to="/signup" className="nav-link">
                          Register
                        </Link>
                        <Link to="/signin" className="nav-link">
                          Sign In
                        </Link>
                      </div>
                    </div>

                    <div className="college-info">
      <div className="college-text">
        <h1>Welcome to Alumify</h1>
        <h3>"Reconnect. Relive. Rediscover."</h3>
        <p>
        Welcome to our Alumni Website, a place where cherished memories meet new opportunities! This platform is your gateway to rekindle old friendships, celebrate shared achievements, and stay connected with your alma mater. Explore our Alumni Directory to find classmates, access resources to support your career growth, and contribute to the vibrant legacy of our community.
        </p>
      </div>
    </div>







    </div>
  );
}

export default Home;

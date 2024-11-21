import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Allpost from "./Allpost";
import Setprofile from "./Setprofile";
import Myupload from "./Myupload";
import axios from "axios";

import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [upload, setUpload] = useState(true);
  const [profileData, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || "");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3600/api/getprofile",
          { token }
        );
        console.log(response.data.uploads, "response is ");

        if (response.data.message !== "Enter details") {
          const obj = {
            name: response.data.uploads.name,
            id: response.data.uploads.rollNo,
            branch: response.data.uploads.branch,
            email: response.data.uploads.email,
          };
          localStorage.setItem("Info", JSON.stringify(obj));
          setProfile(response.data.uploads);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchProfile();
  }, [token]);

  const uploadHandler = () => {
    navigate("/upload")
  };

  const logout = () => {
    alert("Logged out");
    localStorage.removeItem("token");
    navigate("/");
  };

  const home = () => {
    navigate("/");
  };

  const alumniData = [
    { name: "Doe", batch: "2015", branch: "CSE", contact: "johndoe@gmail.com" },
    { name: "Smith", batch: "2016", branch: "ECE", contact: "janesmith@gmail.com" },
    { name: "Michael", batch: "2017", branch: "IT", contact: "michaelj@gmail.com" },
    { name: "Johnson", batch: "2015", branch: "IT", contact: "john@gmail.com" },
    { name: "mike", batch: "2017", branch: "IT", contact: "mike@gmail.com" },
    { name: "Monica", batch: "2013", branch: "MCA", contact: "monica@gmail.com" },
    { name: "Nile", batch: "2010", branch: "MCA", contact: "nile@gmail.com" },
    { name: "Larry", batch: "2017", branch: "Mtech", contact: "larry@gmail.com" },
    { name: "Joe", batch: "2018", branch: "MCA", contact: "joe@gmail.com" },
    { name: "Sam", batch: "2019", branch: "IT", contact: "sam@gmail.com" },
    { name: "Charles", batch: "2017", branch: "IT", contact: "charles@gmail.com" },
    { name: "Johnson", batch: "2017", branch: "IT", contact: "johnson@gmail.com" },
  ];

  if (loading) {
    return <div className="loading">Loading...</div>; // Loading indicator
  }

  return (
    <div>
      <div className="dashboard-main">
        {profileData === null ? (
          <Setprofile token={storedToken} />
        ) : (
          <div className="Dashboardsecondpage">
            <div className="dashboard-sidebar">
              <h2 className="capitalize">{profileData.name}</h2>

              <Link className="link-button" to={'/myprofile'}>
                My Profile
              </Link>

              <button className="dashboard-button" onClick={home}>
                Home
              </button>
              <button className="dashboard-button" onClick={uploadHandler}>
                Upload
              </button>
              <button className="dashboard-button-logout" onClick={logout}>
                Logout
              </button>
            </div>

            <div>
              <h1 className="Dashboardsecondpagecontent"> Dashboard</h1>
              {/* Alumni Directory Section */}
              <div className="alumni-directory">
                <h2>Alumni Directory</h2>
                <ul>
                  {alumniData.map((alumnus, index) => (
                    <li key={index} className="alumni-item">
                      <strong>{alumnus.name}</strong> - Batch {alumnus.batch} - {alumnus.branch} - Contact: {alumnus.contact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="main-content">
                {<Allpost />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Allpost from "./Allpost";
// import Setprofile from "./Setprofile";
// import axios from "axios";

// import "./Dashboard.css"; // Import the CSS file


// const Dashboard = () => {
//   const [profileData, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state
//   const navigate = useNavigate();
//   const storedToken = localStorage.getItem("token");
//   const [token, setToken] = useState(storedToken || "");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:3600/api/getprofile",
//           { token }
//         );

//         if (response.data.message !== "Enter details") {
//           const obj = {
//             name: response.data.uploads.name,
//             id: response.data.uploads.rollNo,
//             branch: response.data.uploads.branch,
//             email: response.data.uploads.email,
//           };
//           localStorage.setItem("Info", JSON.stringify(obj));
//           setProfile(response.data.uploads);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false); // Stop loading once the data is fetched
//       }
//     };

//     fetchProfile();
//   }, [token]);

//   const uploadHandler = () => {
//     navigate("/upload");
//   };

//   const logout = () => {
//     alert("Logged out");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const home = () => {
//     navigate("/");
//   };

//   // Static Alumni Data
//   const alumniData = [
//     { name: "Doe", batch: "2015", branch: "CSE", contact: "johndoe@gmail.com" },
//     { name: "Smith", batch: "2016", branch: "ECE", contact: "janesmith@gmail.com" },
//     { name: "Michael", batch: "2017", branch: "IT", contact: "michaelj@gmail.com" },
//     { name: "Johnson", batch: "2015", branch: "IT", contact: "john@gmail.com" },
//     { name: "mike", batch: "2017", branch: "IT", contact: "mike@gmail.com" },
//     { name: "Monica", batch: "2013", branch: "MCA", contact: "monica@gmail.com" },
//     { name: "Nile", batch: "2010", branch: "MCA", contact: "nile@gmail.com" },
//     { name: "Larry", batch: "2017", branch: "Mtech", contact: "larry@gmail.com" },
//     { name: "Joe", batch: "2018", branch: "MCA", contact: "joe@gmail.com" },
//     { name: "Sam", batch: "2019", branch: "IT", contact: "sam@gmail.com" },
//     { name: "Charles", batch: "2017", branch: "IT", contact: "charles@gmail.com" },
//     { name: "Johnson", batch: "2017", branch: "IT", contact: "johnson@gmail.com" },
//   ];

//   // Gallery Images
//   // const galleryImages = [
//   //   "/src/Images/1.jpg",
//   //   "/src/Images/2.jpg",
//   //   "/src/Images/3.jpg",
//   //   "/src/Images/9.jpeg",

//   // ];







//   if (loading) {
//     return <div className="loading">Loading...</div>; // Loading indicator
//   }

//   return (
//     <div>
//       <div className="dashboard-main">
//         {profileData === null ? (
//           <Setprofile token={storedToken} />
//         ) : (
//           <div className="Dashboardsecondpage">
//             <div className="dashboard-sidebar">
//               <h2 className="capitalize">{profileData.name}</h2>

//               <Link className="link-button" to={"/myprofile"}>
//                 My Profile
//               </Link>

//               <button className="dashboard-button" onClick={home}>
//                 Home
//               </button>
//               <button className="dashboard-button" onClick={uploadHandler}>
//                 Upload
//               </button>
//               <button className="dashboard-button-logout" onClick={logout}>
//                 Logout
//               </button>
//             </div>

//             <div>
//               <h1 className="Dashboardsecondpagecontent">Dashboard</h1>

//               {/* Alumni Directory Section */}
//               <div className="alumni-directory">
//                 <h2>Alumni Directory</h2>
//                 <ul>
//                   {alumniData.map((alumnus, index) => (
//                     <li key={index} className="alumni-item">
//                       <strong>{alumnus.name}</strong> - Batch {alumnus.batch} - {alumnus.branch} - Contact: {alumnus.contact}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Gallery Section */}
//               {/* <div className="gallery">
//                 <h2>Gallery</h2>
//                 <div className="gallery-grid">
//                   {galleryImages.map((image, index) => (
//                     <img key={index} src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
//                   ))}
//                 </div>
//               </div> */}

//               <div className="gallery">
//                 <div className="gallery-item"><img src="1.jpg" alt="1"/></div>
//                 <div className="gallery-item"><img src="3.jpg" alt="3"/></div>
//                 <div className="gallery-item"><img src="2.jpg" alt="4"/></div>
//                 <div className="gallery-item"><img src="9.jpeg" alt="5"/></div>
//                 <div className="gallery-item"><img src="10.jpeg" alt="6"/></div>
//                 <div className="gallery-item"><img src="backImage.jpeg" alt="7"/></div>
//               </div>
//               <div className="main-content">
//                 {<Allpost />}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

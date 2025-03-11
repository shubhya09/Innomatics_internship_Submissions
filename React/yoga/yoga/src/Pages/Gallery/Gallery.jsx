// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import './Gallery.css';
// import CategoryFilter from '../../Components/categoryFilter';
// // import images from '../../Data/imageData';
// import { useNavigate } from 'react-router-dom'
// import { BASE_URL_BACKEND } from '../../../apiManager/config';

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [view, setView] = useState('grid'); // Toggle between grid and list view
//   const[images, setImages] = useState([]);

//     const navigate = useNavigate();

//   useEffect(() =>{ 
//     const fetchImageData = async()=>{
//       try{
//         const response = await axios.get(`${BASE_URL_BACKEND}/api/images/get-images`)
//         console.log(response);
//         setImages(response.data)
//       }
//       catch(e){
//         console.log(e);
//       }

//     }
//     fetchImageData();
//     const storedData = JSON.parse(localStorage.getItem('user'));
//     if(!storedData){
//       navigate('/login')
//     }
//   },[])
   
//   const filteredImages = selectedCategory === 'All'
//     ? images
//     : images.filter((img) => img.category === selectedCategory);

//   return (
//     <>
//       <div>
//         <h1 className="imageGallery_heading">Yoga Gallery</h1>
//         <CategoryFilter setSelectedCategory={setSelectedCategory} />

//         <div className="viewSwitcher">
//           <button 
//             className={view === 'grid' ? 'active' : ''} 
//             onClick={() => setView('grid')}
//           >
//             Grid View
//           </button>
//           <button 
//             className={view === 'list' ? 'active' : ''} 
//             onClick={() => setView('list')}
//           >
//             List View
//           </button>
//         </div>

//         <div className={view === 'grid' ? "gridContainer" : "listContainer"}>
//           {filteredImages.map((image) => (
//             <div className={view === 'grid' ? "gridItem" : "listItem"} key={image.image_id}>
//               <img src={image.url} alt={image.name} className={view === 'grid' ? "gridImage" : "listImage"} />
//               <div className="imageDetails">
//                 <h3>{image.name}</h3>
//                 <p>{image.description}</p>
//                 <p><strong>Category:</strong> {image.category}</p>
//                 <p><strong>Duration:</strong> {image.duration}</p>
//                 <p><strong>Difficulty:</strong> {image.difficulty}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';
import CategoryFilter from '../../Components/categoryFilter';
import { useNavigate } from 'react-router-dom';
import { BASE_URL_BACKEND } from '../../../apiManager/config';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('grid'); // Toggle between grid and list view
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(`${BASE_URL_BACKEND}/api/images/get-image`);
        console.log("API Response:", response.data);
        
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else if (Array.isArray(response.data.images)) {
          setImages(response.data.images);
        } else {
          console.error("Unexpected API response format:", response.data);
          setImages([]);
        }
      } catch (e) {
        console.error("Error fetching images:", e);
        setImages([]);
      }
    };

    fetchImageData();
    const storedData = JSON.parse(localStorage.getItem('user'));
    if (!storedData) {
      navigate('/login');
    }
  }, [navigate]);

  const filteredImages = Array.isArray(images) ? (
    selectedCategory === 'All' ? images : images.filter((img) => img.category === selectedCategory)
  ) : [];

  return (
    <>
      <div>
        <h1 className="imageGallery_heading">Yoga Gallery</h1>
        <CategoryFilter setSelectedCategory={setSelectedCategory} />

        <div className="viewSwitcher">
          <button 
            className={view === 'grid' ? 'active' : ''} 
            onClick={() => setView('grid')}
          >
            Grid View
          </button>
          <button 
            className={view === 'list' ? 'active' : ''} 
            onClick={() => setView('list')}
          >
            List View
          </button>
        </div>

        {filteredImages.length === 0 ? (
          <p className="noImagesMessage">No images found.</p>
        ) : (
          <div className={view === 'grid' ? "gridContainer" : "listContainer"}>
            {filteredImages.map((image) => (
              <div className={view === 'grid' ? "gridItem" : "listItem"} key={image.image_id}>
                <img src={image.url} alt={image.name} className={view === 'grid' ? "gridImage" : "listImage"} />
                <div className="imageDetails">
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                  <p><strong>Category:</strong> {image.category}</p>
                  <p><strong>Duration:</strong> {image.duration}</p>
                  <p><strong>Difficulty:</strong> {image.difficulty}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
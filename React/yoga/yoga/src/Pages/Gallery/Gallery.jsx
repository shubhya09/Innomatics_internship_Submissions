import React, { useEffect, useState } from 'react';
import './Gallery.css';
import CategoryFilter from '../../Components/categoryFilter';
import images from '../../Data/imageData';
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('grid'); // Toggle between grid and list view

    const navigate = useNavigate();

  useEffect(() =>{
    const storedData = JSON.parse(localStorage.getItem('user'));
    if(!storedData){
      navigate('/login')
    }
  })
   
  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((img) => img.category === selectedCategory);

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
      </div>
    </>
  );
};

export default Gallery;

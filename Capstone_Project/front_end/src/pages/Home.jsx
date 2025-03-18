
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div style={styles.container}>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    
    width: '100%',
    padding: '0px',
    margin: '0px',
    backgroundColor: '#F9FAFB', // Light gray background
  },
};

export default Home;

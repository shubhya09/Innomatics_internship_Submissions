
import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p>About Us</p>
      </div>

      <div style={styles.aboutSection}>
        <img style={styles.image} src={assets.about_image} alt="About Us" />

        <div style={styles.textContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium aut laborum ratione,
            voluptatibus, reiciendis accusamus aliquid at temporibus deserunt vero doloremque incidunt architecto fugiat omnis libero?
            Fuga, deserunt optio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel! Ex enim, id consectetur,
            modi nobis corrupti maiores provident impedit necessitatibus nam debitis non nesciunt? Eum aspernatur reiciendis quis atque!
            Assumenda eveniet autem nam earum repudiandae commodi fuga. Nihil earum ut commodi cum fugiat doloribus reprehenderit iure
            omnis alias illum vitae blanditiis maiores, ea obcaecati tempore aspernatur provident recusandae vel! Eos vero magnam reprehenderit
            ea labore hic itaque voluptatibus expedita non numquam fuga, sed sint totam distinctio soluta consequuntur pariatur, quaerat,
            rerum laborum voluptatum illo. Eum.
          </p>
          <b style={styles.visionTitle}>Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus quam culpa porro a eligendi delectus!
            Animi, hic ipsum. Temporibus molestias dolor aliquam. Distinctio delectus enim amet nihil, perspiciatis odit.
            Unde sunt fugiat autem, possimus blanditiis voluptatem, quis earum libero esse nisi magnam id nostrum illum?
            Fuga nihil eaque aliquam, harum quod omnis odit distinctio qui. Reprehenderit repellendus dolor natus.
          </p>
        </div>
      </div>

      <div style={styles.chooseUsHeader}>
        <p>
          WHY <span style={styles.chooseUsText}>CHOOSE US</span>
        </p>
      </div>

      <div style={styles.cardsContainer}>
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div style={{ ...styles.card, ...styles.cardHover }}>
          <b>Convenience:</b>
          <p>It was the best-suited hospital, so visit with the best doctors.</p>
        </div>

        <div style={{ ...styles.card, ...styles.cardHover }}>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

// Embedded CSS Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#4A5568',
  },
  header: {
    fontSize: '24px',
    paddingTop: '20px',
    color: '#718096',
  },
  aboutSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    margin: '40px 0',
    textAlign: 'left',
    justifyContent: 'center',
    maxWidth: '1000px',
    marginInline: 'auto',
  },
  image: {
    width: '100%',
    maxWidth: '360px',
    borderRadius: '10px',
  },
  textContainer: {
    maxWidth: '600px',
    fontSize: '14px',
    color: '#4A5568',
    lineHeight: '1.6',
  },
  visionTitle: {
    fontSize: '18px',
    color: '#2D3748',
  },
  chooseUsHeader: {
    fontSize: '20px',
    margin: '20px 0',
    fontWeight: 'bold',
  },
  chooseUsText: {
    color: '#2D3748',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '800px',
    margin: 'auto',
  },
  card: {
    padding: '20px',
    border: '1px solid #CBD5E0',
    fontSize: '15px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'background 0.3s, color 0.3s',
  },
  cardHover: {
    ':hover': {
      background: '#2B6CB0',
      color: 'white',
    },
  },
};

export default About;

import Experience from './components/Experience';
import ButtonComp from './components/ButtonComp';
import { useState } from 'react';

const CardComp = ({ data, id }) => {
  const cardStyle = {
    borderRadius: '10px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px',
    padding: '20px',
    width: '400px',
    boxShadow:
      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    overflow: 'hidden',
  };

  const imgStyle = {
    borderRadius: '50%',
  };

  return (
    <div style={cardStyle}>
      <h2>{data.name}</h2>
      <p>{data.profession}</p>
      <img style={imgStyle} src={data.profile}></img>
      <div>
        <Experience data={data.experience} id={id} />
      </div>
      <div>
        <ButtonComp id={id} />
      </div>
    </div>
  );
};

export default CardComp;

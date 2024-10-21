import React from 'react';

const ShowErrors = ({ errors }) => {
  return (
    <>
      {errors.map((item, i) => {
        return (
          <div
            style={{
              backgroundColor: '#f3d8da',
              color: '#cb444a',
              padding: '0.25rem 0.5rem',
              fontSize: '0.95rem',
              borderRadius: '4px',
              marginBottom: '0.5rem',
            }}
            key={i}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </>
  );
};

export default ShowErrors;

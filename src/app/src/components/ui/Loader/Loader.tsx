import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <span className="loader__dot" key={`dot_1`} />
      <span className="loader__dot" key={`dot_2`} />
      <span className="loader__dot" key={`dot_3`} />
    </div>
  );
};

export default Loader;

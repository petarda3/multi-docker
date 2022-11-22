import React from 'react';
import { Link } from 'react-router-dom';

const Component = () => {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
export default Component;

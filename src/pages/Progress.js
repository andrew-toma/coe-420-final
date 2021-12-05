import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ percentage }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

<<<<<<< HEAD
export default Progress;
=======
export default Progress;
>>>>>>> 25fc581a5241e5658a574590baf225aa2763ed00

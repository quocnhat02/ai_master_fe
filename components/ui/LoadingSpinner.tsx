import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const LoadingSpinner: React.FC = () => (
  <ThreeDots
    height='60'
    width='60'
    color='#eeeeee'
    ariaLabel='three-dots-loading'
    visible={true}
  />
);

export default LoadingSpinner;

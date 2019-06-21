import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

const LoadingIndicator = () => {
  return (
    <div>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        width={500}
        height={400}
      />
    </div>
  )
}

export default LoadingIndicator;
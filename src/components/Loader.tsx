import React from 'react';


export const Loader: React.FunctionComponent<any> = () => 
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>


/**
* React Drop Component
* Copyright © 2015-present Thierry Charbonnel AnoterPlanet All rights reserved.
*
*/

import React, {PropTypes} from 'react';

import Button from '../Button';
import classnames from 'classnames';
import css from './Drop.css';

class Drop extends React.Component {
  render() {
    return (
      <div className={classnames(css.drop_zone)}>
        <p>Simply drag and drop your files to begin. Supported formats: .jpg and .png</p>
        
        <Button info="" primary={true} style={{ zIndex: 26, color: 'rgba(10,20,32,0)' }}>Add image</Button><Button>Clear</Button>
      </div>
    );
  }
}

export default Drop;

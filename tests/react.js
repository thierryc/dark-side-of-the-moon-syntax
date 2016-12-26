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
        <Button primary={true}>Add image</Button><Button>Clear</Button>
      </div>
    );
  }
}

export default Drop;

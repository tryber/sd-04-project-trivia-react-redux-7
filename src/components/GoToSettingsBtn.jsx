import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';

class GoToSettingsBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <button type="button" data-testid="btn-settings">
            <BsGear />
          </button>
        </Link>
      </div>
    );
  }
}

export default GoToSettingsBtn;

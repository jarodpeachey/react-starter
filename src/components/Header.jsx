import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

class Header extends Component {
  static propTypes = {

  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {

  }

  shouldComponentUpdate () {

  }

  render () {
    return (
      <Wrapper>
        <div className="container py-none">
          <div className="navbar-content">
            <div className="navbar-left">
              <h3 className="m-0">
                Brand Name
              </h3>
            </div>
            <div className="navbar-right">
              Menu
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.main}
`;

export default Header;

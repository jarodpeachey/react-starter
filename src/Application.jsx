import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Header from './components/Header';

class Application extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount () {

  // }

  // shouldComponentUpdate () {

  // }

  render () {
    const header = <Header headerContent="Brand Name" />;

    return (
      <div>
        {header}
        {this.props.children}
      </div>
    );
  }
}

export default Application;


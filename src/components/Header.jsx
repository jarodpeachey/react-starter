import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router';

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
      <span>
        <Wrapper>
          <Row>
            <ColumnOne>
              <Link to="/">
                <BrandName>
                  CalTrack
                </BrandName>
              </Link>
            </ColumnOne>
            <ColumnTwo>
              <Menu>
                <MenuItem>
                  <Link to="/meals">
                    1
                  </Link>
                </MenuItem>
              </Menu>
            </ColumnTwo>
          </Row>
        </Wrapper>
      </span>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.colors.main};
  color: white;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ColumnOne = styled.div`
  width: fit-content;
`;

const ColumnTwo = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const MenuItem = styled.li`
  width: fit-content:
`;

const BrandName = styled.h1`
  color: white !important;
`;

export default Header;


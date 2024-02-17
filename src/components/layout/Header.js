import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
// import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'

import LanguageSelector from './LanguageSelector'
import NetworkSelector from './NetworkSelector'
import logoImg from '../../img/logo.svg'

class Header extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Navbar fluid fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logoImg}
                className="App-logo"
                alt={formatMessage({id: 'logo'})}
              />
              <span className="pi-text"> Pi </span>
              <span className="brand-text">blockexplorer</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <LanguageSelector
              language={this.props.language}
              switcher={this.props.languageSwitcher}
            />
          </Navbar.Form>
          <Navbar.Form pullRight>
            <div className={'Network-Selector'}>
              <button onClick={() => {window.open('https://www.picn.cc')}} className={'is-inactive'}>
                PICN.CC
              </button>
            </div>
          </Navbar.Form>
          <Nav>
            <LinkContainer to="/payments">
                <NavItem>
                  <FormattedMessage id="payments" />
                </NavItem>
              </LinkContainer>
            <LinkContainer to="/txs">
              <NavItem>
                <FormattedMessage id="transactions" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/blocks">
              <NavItem>
                <FormattedMessage id="ledgers" />
              </NavItem>
            </LinkContainer>
            <NavItem>
              <div onClick={() => {window.open('https://test.picn.cc')}}>节点检测</div>
            </NavItem>
{/*            <NavItem>
              <div onClick={() => {window.open('https://www.picn.cc/question/all.html')}}>讨论区</div>
            </NavItem>
            <NavItem>
              <div onClick={() => {window.open('https://www.picn.cc/chat')}}>聊天</div>
            </NavItem>*/}
            {/* <li className="divider-vertical" />
            <LinkContainer to="/assets">
              <MenuItem>
                <FormattedMessage id="assets" />
              </MenuItem>
            </LinkContainer>
            <LinkContainer to="/anchors">
              <MenuItem>
                <FormattedMessage id="anchors" />
              </MenuItem>
            </LinkContainer>
            <LinkContainer to="/exchanges">
              <MenuItem>
                <FormattedMessage id="exchanges" />
              </MenuItem>
            </LinkContainer>
            <li className="divider-vertical" />

            <NavDropdown
              eventKey={3}
              title={formatMessage({id: 'more'})}
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/effects">
                <MenuItem>
                  <FormattedMessage id="effects" />
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/payments">
                <MenuItem>
                  <FormattedMessage id="payments" />
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/trades">
                <MenuItem>
                  <FormattedMessage id="trades" />
                </MenuItem>
              </LinkContainer>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default injectIntl(Header)

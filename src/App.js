import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions';
import {Switch, Route, NavLink, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Layout from './components/Layout/Layout';
import Account from './components/Account/Account';
import Transactions from './components/Transactions/Transactions';

class App extends Component {
  componentDidMount() {
    //get data from data.json
    this
      .props
      .fetchData();
  }
  render() {
    const data = this.props.setData;
    console.log('data', data)

    const mappedData = data.map(ele => {
      return ele;
    })

    const accountInfo = 
    data
    .map(item => {
      return (item.accounts.account.map(ele => {
        return (
          <Navbar expand="lg" key={ele.id} fixed="top">
            <Container>
              <Navbar.Brand >
                <Link to="/"><img src="https://assets.website-files.com/5c794ffa39d1ad7a031cec44/5c79552aeb8c479f67aece6d_betterfin_logo_orange.svg" alt="logl" /></Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/transactions">Transactions</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }))
    })

    return (
      <div>
        <Layout>
          {accountInfo}
          <Switch>
            <Route 
              exact path="/" 
              render={(routeProps) => (
              <Account {...routeProps}  accountInfo={mappedData} />
            )} />
            <Route 
              exact path="/transactions" 
              render={(routeProps) => (
              <Transactions {...routeProps} transactionData={mappedData} />
            )} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {setData} = state;
  return {setData}
}

export default connect(mapStateToProps, {fetchData})(App);

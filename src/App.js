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
          <Navbar expand="lg" key={ele.id}>
            <Container>
              <Navbar.Brand fixed="top">
                <Link to="/" className="navbar-brand">{ele.accountName}</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                  <Nav.Link ><NavLink to="/transactions">Transaction</NavLink></Nav.Link>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions';

import Layout from './components/Layout/Layout';
import MainNav from './components/MainNav/MainNav';
import Account from './components/Account/Account';

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

    return (
      <div>
        <Layout>
          <MainNav data={mappedData}/>
          <Account accountInfo={mappedData}/>
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

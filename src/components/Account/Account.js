import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const account = (props) => {
  console.log('account', props);
  const accountInfo = props
    .accountInfo
    .map(item => {
      return (item.accounts.account.map(ele => {
        return (

          <div className="account-info" key={ele.id}>
            <div className="d-flex justify-content-between">
              <span>Available Balance: {ele.availableBalance.amount}</span>
              <span>currency: {ele.availableBalance.currency}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Current Balance: {ele.currentBalance.amount}</span>
              <span>currency: {ele.currentBalance.currency}</span>
            </div>
          </div>

        )
      }))
    })

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>{accountInfo}</Col>
        <Col xs={12} md={6}>hello world</Col>
      </Row>
    </Container>

  )
}

export default account;
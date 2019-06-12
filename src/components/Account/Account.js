import React from 'react';

import Container from 'react-bootstrap/Container';
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
      <Col xs={12}>{accountInfo}</Col>
    </Container>
  )
}

export default account;
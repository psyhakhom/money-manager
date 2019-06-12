import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<<<<<<< HEAD
import Table from 'react-bootstrap/Table';
=======
>>>>>>> 7d7af095094080cd6dec3bdc2f0759530c0b3762

const account = (props) => {
  console.log('account', props);
  const accountInfo = props
    .accountInfo
    .map(item => {
      return (item.accounts.account.map(ele => {
        return (
<<<<<<< HEAD
=======

>>>>>>> 7d7af095094080cd6dec3bdc2f0759530c0b3762
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
<<<<<<< HEAD
=======

>>>>>>> 7d7af095094080cd6dec3bdc2f0759530c0b3762
        )
      }))
    })

<<<<<<< HEAD
  const transactionsInfo = props.accountInfo.map(item => {
    return item.trxs.transaction.map(ele => {
      return (
        <tr key={ele.id}>
          <td>{ele.date}</td>
          <td>{ele.description.simple}</td>
          <td>{ele.type}</td>
          <td className={ele.type === 'REFUND' ? 'refund' : null}>{ele.type === 'REFUND' ? ele.amount.amount : '-$' + ele.amount.amount}</td>
          <td>${ele.runningBalance.amount}</td>
        </tr>
      )
    })
  })

  console.log(transactionsInfo)

=======
>>>>>>> 7d7af095094080cd6dec3bdc2f0759530c0b3762
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>{accountInfo}</Col>
<<<<<<< HEAD
        <Col xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
              {transactionsInfo}
            </thead>
            <tbody>
            </tbody>
          </Table>
        </Col>
=======
        <Col xs={12} md={6}>hello world</Col>
>>>>>>> 7d7af095094080cd6dec3bdc2f0759530c0b3762
      </Row>
    </Container>

  )
}

export default account;
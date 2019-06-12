import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

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

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>{accountInfo}</Col>
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
      </Row>
    </Container>

  )
}

export default account;
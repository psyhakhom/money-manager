import React from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const transactions = (props) => {
  const transactionsInfo = props.transactionData.map(item => {
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
      <Table responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactionsInfo}
        </tbody>
      </Table>
    </Container>
  )
}

export default transactions;
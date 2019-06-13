import React from 'react';

import {Container, Card, Row, Col} from 'react-bootstrap';

const account = (props) => {
  console.log('account', props);
  const accountInfo = props
    .accountInfo
    .map(item => {
      return (item.accounts.account.map(ele => {
        return (
          <Card key={ele.id}>
            <Card.Header><b>HELLO, {ele.displayedName}!</b></Card.Header>
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center pb-2 pb-lg-0" xs={12} sm={12} md={5}>
                    <Card.Img className="profile-image" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" />
                  </Col>
                  <Col xs={12} sm={12} md={7}>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={6} className="pb-2"><b>Account Name:</b> <span>{ele.accountName}</span></Col>
                      <Col xs={12} sm={12} md={12} lg={6} className="pb-2"><b>Account Number:</b> <span>{ele.accountNumber}</span></Col>
                      <Col xs={12} sm={12} md={12} lg={6} className="pb-2"><b>Account Status:</b> <span>{ele.accountStatus}</span></Col>
                      <Col xs={12} sm={12} md={12} lg={6} className="pb-2"><b>Account Type:</b> <span>{ele.accountType}</span></Col>
                    </Row>
                    <hr />
                      <Row>
                        <Col xs={12} className="pb-2"><b>Available Balance:</b> <span  className={ele.availableBalance.amount < 0 ? 'warning': null}>{ele.availableBalance.amount}</span></Col>
                        <Col xs={12} className="pb-2"><b>Current Balance:</b> <span  className={ele.currentBalance.amount < 0 ? 'warning': null}>${ele.currentBalance.amount}</span></Col>
                      </Row>
                  </Col>
                </Row>
              </Card.Body>
          </Card>
        )
      }))
    })

  return (
    <Container className="top-page-padding">
      <Col>{accountInfo}</Col>
    </Container>
  )
}

export default account;
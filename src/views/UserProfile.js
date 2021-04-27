/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { LoginContext } from "contexts/LoginContext";
import useSignIn from "hooks/useSignIn";
import Admin from "layouts/Admin/Admin";
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  const [user, setUser] = React.useState({ email: "", pass: "" });

  const onLogin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSignIn({ email: user.email, pass: user.pass });
  };

  const onChange = (e, type) => {
    const temp = user;
    temp[type] = e.target.value;
    setUser({ ...temp });
  };

  return (
    <Admin login={true}>
      <div className="content">
        <Row>
          <Col md="10">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                >
                  <h6
                    className="title"
                    style={{ fontSize: 20, textAlign: "center" }}
                  >
                    LOGIN
                  </h6>
                </div>
                <Col className="pl-md-1" md="12">
                  <FormGroup>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Input
                      placeholder="mike@email.com"
                      type="email"
                      onChange={(e) => onChange(e, "email")}
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-md-1" md="12">
                  <FormGroup>
                    <label>Password</label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => onChange(e, "pass")}
                    />
                  </FormGroup>
                </Col>
              </CardBody>
              <CardFooter>
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    flex: 1,
                    display: "flex",
                  }}
                >
                  <Button
                    className="btn-fill"
                    color="primary"
                    type="submit"
                    onClick={onLogin}
                  >
                    Sign In
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </Admin>
  );
}

export default UserProfile;

import React from "react";
import QRCode from "qrcode.react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import useFirestore from "hooks/useFirestore";

function Dashboard(props) {
  const [data, setData] = React.useState([]);

  const update = (dt) => {
    setData([...dt]);
  };

  useFirestore({ update });

  return (
    <>
      <div className="content">
        <Row>
          {data.map((itm) => (
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">{itm?.pathName}</CardTitle>
                </CardHeader>
                <CardBody>
                  <div
                    className="chart-area"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    {itm?.pathName && (
                      <QRCode size={200} value={itm?.pathName} />
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

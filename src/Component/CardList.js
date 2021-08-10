import React from "react";
import { Button, Card, Col, Row } from "antd";
import "antd/dist/antd.css";

const CardList = (props) => {
  const { items } = props;

  const editData = (value, index) => {
    const edit = { ...value, id: index };
    props.editData(edit);
  };

  const deleteData = (value, index) => {
    const del = { ...value, id: index };
    props.deleteData(del);
  };

  return (
    <div>
      <div
        className="site-card-wrapper"
        style={{ padding: "20px", background: "#dfe1ee" }}
      >
        <Row gutter={16}>
          {items.map((data, index) => {
            const { label, textarea } = data;
            return (
              <Col span={8} style={{ marginBottom: "19px" }} key={index}>
                <Card
                  title={label}
                  style={{ height: "200px" }}
                  extra={
                    <Button
                      type="primary"
                      onClick={() => editData(data, index)}
                    >
                      Edit{" "}
                    </Button>
                  }
                >
                  <h5>{textarea}</h5>
                  <Button
                    type="primary"
                    danger
                    style={{ marginLeft: "83%" }}
                    onClick={() => deleteData(data, index)}
                  >
                    Delete
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CardList;

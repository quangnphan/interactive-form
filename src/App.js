import { useState } from "react";
import cardBack from "./images/bg-card-back.png";
import iconCheck from "./images/icon-complete.svg";
import cardLogo from "./images/card-logo.svg";
import { Form, Input, Row, Col, Button } from "antd";
function App() {
  const [form] = Form.useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("Add me");
  const [number, setNumber] = useState("00000000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const onFinish = async () => {
    form.validateFields().then(async (values) => {
      setIsSubmit(true);
      console.log(values);
    });
  };
  return (
    <div className="App">
      <div className="cards">
        <div className="card">
          <div className="text-on-img">
            <img className="card-logo" src={cardLogo} alt="logo" />
            <h2>{number}</h2>
            <div className="card-footer">
              <span>{name}</span>
              <span>
                {month}/{year}
              </span>
            </div>
          </div>
        </div>
        <img className="back" src={cardBack} alt="card back" />
      </div>
      {isSubmit ? (
        <div className="thankyou">
          <img src={iconCheck} alt="check" />
          <h3>THANK YOU!</h3>
          <p>We've added your card details</p>
          <Button onClick={() => setIsSubmit(false)}>Continue</Button>
        </div>
      ) : (
        <div className="content" style={{ maxWidth: 500 }}>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            labelCol={{ span: 16 }}
          >
            <Form.Item
              name="name"
              label="CARD HOLDER NAME"
              rules={[{ required: true, message: "Can't be blank" }]}
            >
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jane Something"
              />
            </Form.Item>
            <Form.Item
              name="number"
              label="CARD NUMBER"
              rules={[
                { required: true, message: "Can't be blank" },
                {
                  pattern: /^[0-9]*$/,
                  message: "Wrong format, numbers only",
                },
              ]}
            >
              <Input
                onChange={(e) => setNumber(e.target.value)}
                placeholder="e.g. 1234 5678"
              />
            </Form.Item>
            <Row justify="space-between">
              <Col span={10}>
                <Form.Item
                  name="date"
                  label="EXP.DATE(MM/YY)"
                  rules={[
                    { required: true, message: "Can't be blank" },
                    {
                      pattern: /^[0-9]*$/,
                      message: "Wrong format, numbers only",
                    },
                  ]}
                >
                  <Row justify="space-between">
                    <Col span={11}>
                      <Input
                        onChange={(e) => setMonth(e.target.value)}
                        placeholder="MM"
                      />
                    </Col>
                    <Col span={11}>
                      <Input
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="YY"
                      />
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="cvc"
                  label="CVC"
                  rules={[
                    { required: true, message: "Can't be blank" },
                    {
                      pattern: /^[0-9]*$/,
                      message: "Wrong format, numbers only",
                    },
                  ]}
                >
                  <Input placeholder="e.g. 123" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button size="large" htmlType="submit" style={{ width: "100%" }}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default App;

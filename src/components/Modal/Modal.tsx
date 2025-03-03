import React, { FC, useState } from "react";
import "./Modal.css";
import { Button, Modal, Input, DatePicker, Form } from "antd";
import dayjs from "dayjs";

type Props = {
  open: boolean;
  onCancel: () => void;
  onOk?: () => void;
};

const ModalComponent: FC<Props> = ({ onCancel, open, onOk }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const formattedData = {
        ...values,
        dateIn: values.dateIn.format("YYYY-MM-DD"),
        dateOut: values.dateOut.format("YYYY-MM-DD"),
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();
      console.log("Данные сохранены:", data);
      form.resetFields(); // Очистка формы после отправки
      onCancel(); // Закрытие модального окна
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Введите данные"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Отменить
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => form.submit()}
        >
          Отправить
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          dateIn: dayjs(),
          dateOut: dayjs().add(1, "day"),
        }}
      >
        <Form.Item label="Дата заезда" name="dateIn" rules={[{ required: true, message: "Выберите дату заезда" }]}>
          <DatePicker format="DD-MM-YYYY" />
        </Form.Item>

        <Form.Item label="Дата выезда" name="dateOut" rules={[{ required: true, message: "Выберите дату выезда" }]}>
          <DatePicker format="DD-MM-YYYY" />
        </Form.Item>

        <Form.Item label="Имя" name="firstName" rules={[{ required: true, message: "Введите имя" }]}>
          <Input placeholder="Иван" />
        </Form.Item>

        <Form.Item label="Фамилия" name="lastName" rules={[{ required: true, message: "Введите фамилию" }]}>
          <Input placeholder="Иванов" />
        </Form.Item>

        <Form.Item label="Телефон" name="phone" rules={[{ required: true, message: "Введите номер телефона" }]}>
          <Input type="tel" placeholder="+7 900 000-00-00" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Введите корректный email" }]}>
          <Input placeholder="example@mail.com" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalComponent;

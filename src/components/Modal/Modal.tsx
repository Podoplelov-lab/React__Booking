import React, { FC, useActionState } from "react";
import "./Modal.css";
import { Button, Modal } from "antd";
import { sendOrders } from "../../api/hotels";

type Props = {
  open: boolean
  onCancel: () => void
  onOk?: () => void
}


const ModalComponent: FC<Props> = ({ onCancel, open, onOk }) => {

  const action = (oldState, formData) => {
    const dateIn = formData.get('dateIn')
    const dateOut = formData.get('dateOut')
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    console.log(dateIn, dateOut, name, phone, email)
    sendOrders({phone, email})
  }

  const [state, formAction] = useActionState(action, null);



  return (
    <div>
      <Modal title="Введите данные" open={open} onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Отменить
          </Button>,
          <Button htmlType="submit" key="submit" type="primary" form="booking">
            Отправить
          </Button>,
        ]}>
        <form action={formAction} id="booking">
          <div>
            <label>Дата заезда:</label>
            <input name="dateIn" type="date" required />
          </div>
          <div>
            <label>Дата выезда:</label>
            <input name="dateOut" type="date" required />
          </div>
          <div>
            <label>ФИО:</label>
            <input name="name" type="text" required />
          </div>
          <div>
            <label>Телефон:</label>
            <input name="phone" type="number" required />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" type="email" required />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalComponent;


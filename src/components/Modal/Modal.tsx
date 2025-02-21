import React, { useState } from "react";
import "./Modal.css";

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [date, setDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дата:", date);
    console.log("ФИО:", fullName);
    console.log("Email:", email);
    closeModal();
  };

  return (
    <div>
      {modalIsOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Введите данные</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Дата заезда:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div>
                <label>Дата выезда:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div>
                <label>ФИО:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div>
                <label>Телефон:</label>
                <input type="number" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <button type="submit">Сохранить</button>
              <button type="button" onClick={closeModal}>Закрыть</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;

import React, { useEffect, useState } from "react";
import { Button, Popover, Space } from "antd";

const Popovers: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);

    // Функция загрузки пользователей
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    };
  
    useEffect(() => {
      fetchUsers(); // Загружаем пользователей при первом рендере
    }, []);
  
    // Функция удаления пользователя
    const handleDelete = async (id: string) => {
      try {
        await fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        });
  
        // Убираем удаленного пользователя из списка
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Ошибка удаления:", error);
      }
    };

  // Формируем контент для Popover
  const content = (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <p>
              <strong>Имя:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>Телефон:</strong> {user.phone}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Заезд:</strong> {user.dateIn}
            </p>
            <p>
              <strong>Выезд:</strong> {user.dateOut}
            </p>
            <Button type="primary" danger onClick={() => handleDelete(user.id)}>
              Удалить
            </Button>
            <hr />
          </div>
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );

  return (
    <Space wrap>
      <Popover title="Данные пользователя" trigger="click">
            {content}
      </Popover>
    </Space>
  );
};

export default Popovers;

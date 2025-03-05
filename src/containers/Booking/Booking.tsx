import { Button, Popover } from "antd";
import styles from "./Booking.module.css"
import { useEffect, useState } from "react";
import { getBooking, deletBooking } from "../../api";
import { Booking as TBooking } from "../../types/hotel";


export default function Booking() {

  const [booking, setBooking] = useState<TBooking[]>([])


  const getData = async () => {
    try {
      const data = await getBooking()
      const result = await data.json()
      setBooking(result)
    } catch {
      console.log('Error')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const count = booking.length

  const handleDelete = async (id: string) => {
    try {
       deletBooking(id)

       setBooking((prev) => prev.filter((user) => user.id !== id));
    } catch {
      console.log("Error")
    }
  }

  const content = (
    <div>
      {booking.length > 0 ? (
        booking.map((user) => (
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
    <>
      <Popover
        content={content}
        title="Избранное"
        trigger="click"
      >
        <div className={styles.container}>
          <img className={styles.like} src="../../src/img/like.png" alt="Избранное" />
          {count > 0 && <span className={styles.count}>{count}</span>}
        </div>
      </Popover>
    </>
  )
}
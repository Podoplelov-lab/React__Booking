import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Main, About, Map } from './pages'
import Layout from './components/Layout/Layout.js';
import useAuth from './hooks/useAuth.js';
import useHotels from './hooks/useHotels.js';

function App() {

  useAuth()

  useHotels()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<Main />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App





// Добавить файл db.json каждый заказ будет представлять из себя             
            // {
            //   "tid": 1,
            //   "title": "MR",
            //   "firstName": "BOB",
            //   "lastName": "SMITH",
            //   "phone": phone,
            //   "email": email,
            //   "country": 'RU',
            //   "address": 'MOSCOW'
            //   'hotelName': 'RADISSON BLU BELORUSSKAYA MOW'
            // }
// Там будет хранится массив
// Написать метод получения всех бронирований
// Удаление из массива
// "server": "json-server --watch db.json --port 5000" добавить в package.json
// Создать тип для объекта type Order
// По клику на сердечко вызвать popover(https://ant.design/components/popover) отобразить список бронированных отелей из файла db.json
// Валидация на форме
// Добавить дизейбл кнопки если уже нажата кнопка в форме 
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





// в (drawer) сделать забронировать отель должна появляться форма в модальном окне 1 Выбрать дату(сделать календарь) 2 ФИО 3 email когда вся форма заполнена добавить кнопку подтвердить
// по нажатию на эту кнопку реализовать POST https://developers.amadeus.com/self-service/category/hotels/api-doc/hotel-booking/api-reference
// Если запрос успешно отправлен то сохранить ответ в localstorage
// Создать рядом с личным кабинетом кнопку активные бронирования по нажатию на кнопку выпадать список с бронированием отелей
// Описать типы для функций

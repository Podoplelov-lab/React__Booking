import './Card.css'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { setSelectedHotel } from '../../store/slice/hotels'




function Card ({item}) {

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(setSelectedHotel(item))
  }

    return(
        <li className="placement-item">
        <article>
          <div className="border-placement">
              <div>
                  {item.overallRating}
              </div>
            <h3 className="text-placement">
                {item?.name}
            </h3>
            <span className="country">
              {item?.address.countryCode}
            </span>
            <button className="rooms" onClick={onClick}>
              <Link to={'/map'}> Подробнее </Link>
            </button>
          </div>
        </article>
      </li>
    )
}

export default Card



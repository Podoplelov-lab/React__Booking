import styles from './List.module.css'

function List({ dataSource, renderItem }) {

  // const [selectedCountry, setSelectedCountry] = useState("");

  // const handleSelectChange = (event) => {
  //   setSelectedCountry(event.target.value);
  // };

  console.log(dataSource)

  return (
    <>
      {/* <select value={selectedCountry} onChange={handleSelectChange}>
        <option value="RU">RU</option>
        <option value="ZA">ZA</option>
        <option value="GB">GB</option>
        <option value="BW">BW</option>
        <option value="CN">CN</option>
        <option value="FR">FR</option>
        <option value="AU">AU</option>
      </select> */}
      <ul className={styles.ul}>
        {dataSource?.map((item) => (
          <li className={styles.li} key={item.id}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
import List from "../components/List/List";
import Card from "../components/Card/Card";
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";
import Select from "../components/Select/Select";
import { useState } from "react";
import { countyOptions } from "../utils";

function Main() {
  const data = useSelector((state: RootState) => state.hotels.data);
  const [value, setValue] = useState('');

  const data2 = useSelector((state: RootState) => state.geocode.value);
  console.log(data2);

  const filterByCountry = value ? data?.filter((item) => item.address.countryCode === value) : data;

  return (
    <>
      <Select value={value} onChange={setValue} options={countyOptions} />
      <List dataSource={filterByCountry} renderItem={(item) => <Card key={item.id} item={item} />} />
    </>
  );
}

export default Main;

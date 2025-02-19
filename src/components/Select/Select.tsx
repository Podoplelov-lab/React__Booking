import { FC } from "react"

type SelectProps = {
    options: {key: string | number, value: string | number}[]
    value: string | number
    onChange: (value: string | number) => void
}

const Select: FC<SelectProps> = ({options, value, onChange}) => {

    const handleSelectChange = (event) => {
        onChange(event.target.value);
      };


    return(
        <select value={value} onChange={handleSelectChange}>
        {options.map(({key, value}) => {
            return <option value={key}>{value}</option>
        })}
        {/* <option value="RU">RU</option>
        <option value="ZA">ZA</option>
        <option value="GB">GB</option>
        <option value="BW">BW</option>
        <option value="CN">CN</option>
        <option value="FR">FR</option>
        <option value="AU">AU</option> */}
      </select>
    )
}

export default Select
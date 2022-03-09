import React,{useState} from "react";
import DatePicker from 'react-date-picker';

function ReactCalendar () {

const[value,setValue] = useState(new Date());

const onChange = () => {
    setValue(value)
}
    return( <div>
        <DatePicker  onChange={onChange} value={value} />
    </div>
    )
}
export default ReactCalendar;
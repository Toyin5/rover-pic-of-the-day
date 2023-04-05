import { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'
import "react-date-picker/dist/DatePicker.css"
import "react-date-picker/dist/DatePicker.css"
import "./Display.css"
interface det {
    url: "",
    title: ""
}

function Display() {
    const [details, setDetails] = useState<det>({
        url: "",
        title: ""
    })
    const [date, setdate] = useState<Date>(new Date())

    async function getImage() {
        try {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}&date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1}`)
            const data = await res.json()
            console.log(data)
            setDetails({
                url: data.url,
                title: data.title
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(`date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1}`)
    useEffect(() => {
        getImage()
    }, [date])

    return (
        <div className='display'>
            <div className='image'>
                <p>Title: {details.title}</p>
                <p>Date: {date.toString()}</p>
                <img src={details.url} alt='photo-of-the-day' />
            </div>
            <div>
                <p>Toggle the date to get specific date. Note: No pic available for tomorrow!</p>
                <DatePicker calendarIcon={false} className="calendar" clearIcon={false} openCalendarOnFocus={true} selected={date} onChange={(date) => setdate(date)} />

            </div>
        </div>
    )
}

export default Display
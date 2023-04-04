import { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker'
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
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env}&date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 1}`)
            const data = res.json()
            console.log(data)
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

            </div>
            <DatePicker className="calendar" selected={date} onChange={(date) => setdate(date)} />
        </div>
    )
}

export default Display
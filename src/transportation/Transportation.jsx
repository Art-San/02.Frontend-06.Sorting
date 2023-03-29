import React, { useState, useEffect } from 'react'
import Сities from './components/Сities'
import SearchStatusDirection from './components/SearchStatusDirection'
import api from './api'

function Transportation() {
    const [cities, setCities] = useState()
    const [cars, setCars] = useState()

    useEffect(() => {
        api.price.fetchAll().then((data) => {
            setCities(data[0])
            setCars(data[1])
        })
    }, [])

    const handleDelete = (cityId) => {
        setCities(cities.filter((city) => city._id !== cityId))
    }
    const handleToggleBookMark = (id) => {
        setCities(
            cities.map((city) => {
                if (city._id === id) {
                    return { ...city, bookmark: !city.bookmark }
                }
                return city
            })
        )
        console.log(id)
    }
    return (
        <div>
            {cities && (
                <>
                    <SearchStatusDirection length={cities.length} />
                    <Сities
                        cities={cities}
                        cars={cars}
                        onDelete={handleDelete}
                        onToggleBookMark={handleToggleBookMark}
                    />
                </>
            )}
        </div>
    )
}

export default Transportation

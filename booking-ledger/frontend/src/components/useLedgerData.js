import { useState, useEffect } from 'react'
import { apiClient } from "../apiClient"


export const useLedgerData = () => {
  const [guests,setGuests] = useState([])
  const [properties,setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [guestsRes, propertiesRes] = await Promise.all([
          apiClient.get('guests/'),
          apiClient.get('properties/')
        ])

        setGuests(guestsRes.data)
        setProperties(propertiesRes.data)

      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { guests, properties, loading, error }
}
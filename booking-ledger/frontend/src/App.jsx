import { useLedgerData } from "./components/useLedgerData"
import { getProperties } from "./services/propertyService"
import { GuestDropdown } from "./components/GuestDropdown"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const { guests, properties, loading, error } = useLedgerData()
  const [selectedGuestId, setSelectedGuestId] = useState(null)

  const getGuestsName = (guestId) => {
    const guest = guests.find((g) => g.id == guestId)
    return guest ? guest.name : 'Unknown guest'
  }

  const handleCancel = async (propertyId) => {
    try{
      await getProperties.cancelBooking(propertyId)
      window.location.reload()
    }catch(e){
      console.log("Error")
    }
  }

  const handleBooking = async (propertyId) => {
    try{
      await getProperties.bookProperty(propertyId,selectedGuestId)
      window.location.reload()
    }catch(e){
      console.log("Error")
    }
  }

  if (loading) return <p>Loading Ledger ... </p>
  if (error) return <p> Error Loading data </p>

  return (
    <main style={{padding: '20px'}}>
      <h1>Booking Ledger</h1>
      <GuestDropdown 
        guests={guests}
        selectedGuestId={selectedGuestId}
        onSelectGuest={setSelectedGuestId}
        disabled={loading} 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.nightly_rate}</td>
              <td>{property.is_booked ? `Booked by ${getGuestsName(property.booked_by)}` : 'Available'}</td>
              <td>{property.is_booked ? (
                <button onClick={() => handleCancel(property.id)}>
                  Cancel Booking
                </button>
              ) : (
                <button onClick={() => handleBooking(property.id)}>
                  Book Property
                </button>
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App

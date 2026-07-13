export const GuestDropdown = ({ guests, selectedGuestId, onSelectGuest, disabled }) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
      {/* 1. Accessibility: The label is permanently linked to the select via htmlFor */}
      <label htmlFor="guest-selector" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Select Guest for Booking
      </label>
      
      <select
        id="guest-selector"
        // 2. Controlled Component: React completely controls this value
        value={selectedGuestId || ""} 
        // 3. Type Safety: e.target.value is always a string. Cast it to a Number for your DB.
        onChange={(e) => onSelectGuest(Number(e.target.value))} 
        // 4. Defensive UX: Disable it if the parent says so, or if there are no guests
        disabled={disabled || guests.length === 0}
        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
      >
        {/* 5. The Default "Null" Option */}
        <option value="" disabled>
          {guests.length === 0 ? "Loading guests..." : "-- Choose a Guest --"}
        </option>
        
        {/* 6. The Mapping */}
        {guests.map((guest) => (
          <option key={guest.id} value={guest.id}>
            {/* Pro-Tip: Show the balance in the dropdown so the user knows if a booking will fail! */}
            {guest.name} (Balance: ${guest.wallet_balance})
          </option>
        ))}
      </select>
    </div>
  );
};
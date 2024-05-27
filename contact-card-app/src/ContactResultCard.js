// ContactResultCard.js
import React, { useState } from 'react';

function ContactNameCard({ contact }) {
  const [showFormattedNumber, setShowFormattedNumber] = useState(false);

  const handleContactButtonClick = () => {
    setShowFormattedNumber(true);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Format phone number here
    // Example: Convert "1234567890" to "(123) 456-7890"
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  };

  return (
    <div className="name-card">
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>
        Phone: {showFormattedNumber ? formatPhoneNumber(contact.phone) : <button onClick={handleContactButtonClick}>Show Number</button>}
      </p>
    </div>
  );
}

export default ContactNameCard;

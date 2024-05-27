// ContactInputCard.js
import React from 'react';

function ContactInputCard({ contact, onChange, onSubmit }) {
  return (
    <div className="input-card">
      <h2>Input Contact Details</h2>
      <input type="text" placeholder="Name" value={contact.name} onChange={(e) => onChange('name', e.target.value)} />
      <input type="email" placeholder="Email" value={contact.email} onChange={(e) => onChange('email', e.target.value)} />
      <input type="tel" placeholder="Phone" value={contact.phone} onChange={(e) => onChange('phone', e.target.value)} />
      
    </div>
  );
}

export default ContactInputCard;

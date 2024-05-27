import './styles.css';
import React, { useState } from 'react';
import ContactInputCard from './ContactInputCard';
import ContactResultCard from './ContactResultCard';

function App() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here if needed
  };

  return (
    <div className="App">
      <ContactInputCard contact={contact} onChange={handleInputChange} onSubmit={handleSubmit} />
      <ContactResultCard contact={contact} />
    </div>
  );
}

export default App;

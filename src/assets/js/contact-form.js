import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ContactForm() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      title,
      content,
    };

    try {
      const response = await fetch('http://localhost:3000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setName('');
        setTitle('');
        setContent('');
      } else {
        alert('An error occurred while sending the e-mail.');
      }
    } catch (error) {
      console.error('An error occurred while sending the e-mail:', error);
      alert('An error occurred while sending the e-mail.');
    }
  };

  return (
  <div className="w-100 mw-lg">
    {isSent && (
      <div className="alert alert-success" role="alert">
        <i className="fas fa-paper-plane"></i> Gesendet
      </div>
    )}

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Titel:</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Inhalt:</label>
        <textarea className="form-control" rows="5" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>

      <button type="submit" className="btn btn-primary text-white">Senden</button>
    </form>
  </div>
  );
}

ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact, uploadImg } from '../../Service/Action/contectAction';
import { ref, uploadBytesResumable } from 'firebase/storage';



const ContactForm = ({ existingContact }) => {
    const dispatch = useDispatch();
    const [contact, setContact] = useState(existingContact || {
        avatar: '',
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        notes: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

  const handleImg = (e) => {
    const file = e.target.files[0];
    dispatch(uploadImg(file));
    console.log('wertyuj',file);
   
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingContact) {
            dispatch(updateContact(contact));
        } else {
            dispatch(addContact(contact));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="avatar" value={contact.avatar} onChange={handleImg} />
            <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="address" value={contact.address} onChange={handleChange} placeholder="Address" />
            <textarea name="notes" value={contact.notes} onChange={handleChange} placeholder="Notes"></textarea>
            <button type="submit">{existingContact ? 'Update' : 'Add'} Contact</button>
        </form>
    );
};

export default ContactForm;

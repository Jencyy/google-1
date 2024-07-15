import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Service/Action/contectAction';


const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="contact-item">
      <img src={contact.avatar} alt={contact.name} />
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.phoneNumber}</p>
        <p>{contact.address}</p>
        <p>{contact.notes}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default ContactItem;

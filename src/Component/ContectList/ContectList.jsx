
import { useSelector, useDispatch } from 'react-redux';


import ContactItem from '../ContectItem/ContectItem';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';


const ContactList = () => {

  const { isLoading, error, contacts }  = useSelector(state => state.contactReducer);




  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

import { useState, useEffect } from 'react';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    // якщо в локалСторедж є контакти, додаємо їх в стейт
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    // в іншому випадку порожній масив
    return [];
  });

  const [filter, setFilter] = useState('');

  // Аналог componentDidUpdate
  // якщо додали новий контакт або видалили з книги,
  // то оновлюємо контакти в сторедж
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Додаємо новий контакт до стейту
  const addContact = newContact => {
    // Перевірка на дубль контактів
    const hasNewContactInContacts = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    // Якщо контакт вже є в книзі, то виводимо алерт
    // в іншому випадку додаємо його до книги
    hasNewContactInContacts
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  //Видаляємо контакт з книги за айді
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  //Додаємо фільтр в стейт
  const updateFilter = filterString => {
    setFilter(filterString);
  };

  return (
    <AppLayout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          filter={filter}
          onUpdateFilter={updateFilter}
          onDelete={deleteContact}
        ></ContactList>
      )}
    </AppLayout>
  );
};

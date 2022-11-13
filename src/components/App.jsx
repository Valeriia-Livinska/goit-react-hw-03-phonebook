import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/Contactlist';
import { Title, Subtitle } from './App.styled';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsList = localStorage.getItem('contacts');

    if (contactsList) {
      this.setState({ contacts: JSON.parse(contactsList) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactToList = newContact => {
    const contactAlreadyInList = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    contactAlreadyInList
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  getFiletredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedfilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiletredContacts();

    return (
      <Box
        flexDirection="column"
        alignItems="center"
        mt={6}
        mb={0}
        mx="auto"
        maxWidth={600}
      >
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContactToList} />

        <Subtitle>contacts</Subtitle>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}

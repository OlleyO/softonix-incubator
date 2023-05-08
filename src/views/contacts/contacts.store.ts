export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])
  const contactsError = ref<string | null>(null)

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: IContact) {
    return contactsService.createContact({
      name: contact.name,
      description: contact.description
    }).then(() => {
      contacts.value.push(contact)
    })
  }

  function updateContact (contact: IContact) {
    const { id, description, name } = contact
    return contactsService.updateContact({
      id, description, name
    }).then(() => {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value[currentIndex] = { ...contact }
    })
  }

  function deleteContact (contact: IContact) {
    return contactsService.deleteContact(contact).then(() => {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value.splice(currentIndex, 1)
    })
  }

  function setError (errMsg: string) {
    contactsError.value = errMsg
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    setError,
    updateContact
  }
})

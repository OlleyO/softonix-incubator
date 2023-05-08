class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact (contact: IContactCreateRequest) {
    return useHttp.post('rest/v1/contacts', contact)
  }

  updateContact (contact: IContactUpdateRequest) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${contact.id}`, contact)
  }

  deleteContact (contact: IContact) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contact.id}`)
  }
}

export const contactsService = new ContactsService()

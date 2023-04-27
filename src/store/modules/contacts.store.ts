import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { IContact } from '@/types'
import { trimmedNoNonWordLocaleLowerCasedString } from '@/utils'

export const useContactsStore = defineStore('contactsStore', () => {
  const roles = ref(['developer', 'designer', 'CTO', 'CEO', 'QA', 'data analyst'])
  const selectedRoles = ref<string[]>([])
  const sortOrder = ref<'asc' | 'desc' | 'default'>('default')
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'developer'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'QA'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'CTO'
    },
    {
      id: 4,
      name: 'Oleh Selivanov',
      description: 'Vue Developer',
      image: '',
      role: 'developer'
    },
    {
      id: 5,
      name: 'Cody Po',
      description: 'Chief Executive Officer',
      image: '',
      role: 'CEO'
    },
    {
      id: 6,
      name: 'Edgar Muhray',
      description: 'Chief Technical Officer',
      image: '',
      role: 'CTO'
    }
  ])

  const filteredContacts = ref<IContact[]>([...contacts.value])

  const searchQuery = ref('')

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  watch(contacts, (contacts) => {
    filteredContacts.value = [...contacts]
  })

  watch([searchQuery, selectedRoles],
    ([searchQuery, selectedRoles]) => {
      const preparedSearchQuery = `${searchQuery}`.trim().toLowerCase()

      if (!preparedSearchQuery && !selectedRoles.length) filteredContacts.value = [...contacts.value]

      const matchRegExp = new RegExp(preparedSearchQuery.split(/\s+/g).join('|'), 'i')

      filteredContacts.value = contacts.value.filter((c) => {
        const nameDescription = `${c.name} ${c.description}`.toLocaleLowerCase()
        const includesRole = selectedRoles.includes(c.role)
        const nameDescriptionMatchedFully = matchRegExp.test(nameDescription)

        return (
          selectedRoles.length
            ? nameDescriptionMatchedFully && includesRole
            : nameDescriptionMatchedFully)
      })
    })

  watch(sortOrder, (sortOrder) => {
    switch (sortOrder) {
    case 'asc':
      filteredContacts.value.sort((c1, c2) =>
        trimmedNoNonWordLocaleLowerCasedString(c1.name).localeCompare(trimmedNoNonWordLocaleLowerCasedString(c2.name)))
      break
    case 'desc':
      filteredContacts.value.sort((c1, c2) =>
        trimmedNoNonWordLocaleLowerCasedString(c2.name).localeCompare(trimmedNoNonWordLocaleLowerCasedString(c1.name)))
      break
    default:
      filteredContacts.value = contacts.value.filter(c => filteredContacts.value.find(fc => fc.id === c.id))
      break
    }
  })

  function resetAll () {
    selectedRoles.value = []
    searchQuery.value = ''
    sortOrder.value = 'default'
    filteredContacts.value = [...contacts.value]
  }

  return {
    contacts,
    roles,
    selectedRoles,
    searchQuery,
    sortOrder,
    addContact,
    deleteContact,
    updateContact,
    filteredContacts,
    resetAll
  }
})

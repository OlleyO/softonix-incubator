<template>
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-4">
      <h3 class="font-medium m-0">Contact list</h3>
      <AppButton @click="createNewContact">
        <template #icon>
          <IconPlus class="w-5 h-5" />
        </template>
        Add Contact
      </AppButton>
    </div>

    <div class="flex flex-col gap-4">
      <SearchInput v-model="searchQuery" />
      <label class="text-sm font-medium grid max-w-fit gap-3 grid-flow-col" for="matchFlag">
        Apply full match
        <input id="matchFlag" v-model="matchFlag" class="self-center" type="checkbox">
      </label>
    </div>
  </div>
  <div class="flex justify-between mt-6">
    <Select
      v-model="selectedRoles"
      label="Select Roles"
      :options="rolesOptions"
      :open="rolesSelectOpen"
      multi
      @click="togggleRolesSelectOpen"
    />

    <Select
      v-model="sortOrder"
      label="Select sort order"
      :options="sortOrderOptions"
      :open="sortOrderSelectOpen"
      @click="togggleSortOrderSelectOpen"
    />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchInput from '@/components/SearchInput.vue'
import Select from '@/components/Select.vue'
import type { IOption } from '@/components/Select.vue'

const router = useRouter()

const contactsStore = useContactsStore()
const { searchQuery, filteredContacts, matchFlag, roles, selectedRoles, sortOrder } = storeToRefs(contactsStore)
const { updateContact, deleteContact, resetAll } = contactsStore

const rolesSelectOpen = ref(false)
const rolesOptions = computed<IOption[]>(() => roles.value.map(role => ({
  label: role,
  value: role
})))

const sortOrderSelectOpen = ref(false)
const sortOrderOptions: IOption[] = [
  {
    label: 'Default',
    value: 'default'
  }, {
    label: 'Ascending',
    value: 'asc'
  }, {
    label: 'Descending',
    value: 'desc'
  }]

function createNewContact () {
  resetAll()
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  resetAll()
  router.push({ name: 'upsertContact', params: { contactId } })
}

function togggleRolesSelectOpen () {
  rolesSelectOpen.value = !rolesSelectOpen.value
}

function togggleSortOrderSelectOpen () {
  sortOrderSelectOpen.value = !sortOrderSelectOpen.value
}
</script>

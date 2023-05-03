<template>
  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="onItemClick(contact.id)"
      @delete="onItemDelete"
      @save="onItemSave"
    />
  </div>
</template>

<script lang="ts" setup>
import ContactItem from './ContactItem.vue'

defineProps<{
  contacts: IContact[]
}>()

const emit = defineEmits(['itemDelete', 'itemSave', 'itemClick'])

function onItemSave (contact: IContact) {
  emit('itemSave', contact)
}

function onItemClick (contactId: number) {
  emit('itemClick', contactId)
}

function onItemDelete (contact: IContact) {
  emit('itemDelete', contact)
}
</script>

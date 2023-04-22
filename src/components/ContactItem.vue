<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || props.newContactForm">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block font-medium w-full"
              placeholder="Oleh Selivanov"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full"
              placeholder="Dummy text"
            >
            <input
              v-if="props.newContactForm"
              v-model="localContact.image"
              type="text"
              placeholder="https://img-url.png"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact?.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact?.description }}
            </p>
          </template>
        </div>
        <img
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact?.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode || props.newContactForm">
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onCancel"
          >
            Cancel
          </button>

          <button
            class="text-blue-500 font-medium text-xs cursor-pointer
            hover:underline disabled:text-gray disabled:pointer-events-none"
            :disabled="!isContactValid"
            @click="() => newContactForm ? onCreate() : onSave()"
          >
            {{ newContactForm ? 'Create' : 'Save' }}
          </button>
        </template>

        <template v-else>
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >
            Edit
          </button>

          <button
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

interface IProps {
  contact?: IContact
  newContactForm?: boolean
}

const props = defineProps<IProps>()

const emit = defineEmits(['delete', 'save', 'create', 'cancel-create'])

const inputRef = ref<HTMLInputElement>()

const defaultContact = {
  name: '',
  description: '',
  image: ''
}

const localContact = ref<Omit<IContact, 'id'>>(defaultContact)

const isContactValid = computed<boolean>(() =>
  validateStringRequired(localContact.value.name) &&
  validateStringRequired(localContact.value.description)
)

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = props.contact ? { ...props.contact } : defaultContact
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

function validateStringRequired (str: string) {
  return !!str.trim().length
}

function onCreate () {
  emit('create', localContact.value)
}

function onCancelCreate () {
  emit('cancel-create')
}

function onCancel () {
  editMode.value = false
  onCancelCreate()
}
</script>

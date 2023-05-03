<template>
  <div class="flex justify-center">
    <el-card class="w-[350px]">
      <template #header>
        <h3 class="font-semibold">{{ cardTitle }}</h3>
      </template>

      <el-form
        ref="formRef"
        :rules="formRules"
        :model="formModel"
        class="space-y-4"
      >
        <el-form-item prop="name">
          <el-input v-model.trim="formModel.name" placeholder="Name" />
        </el-form-item>

        <el-form-item prop="description">
          <el-input v-model.trim="formModel.description" placeholder="Description" />
        </el-form-item>

        <el-form-item prop="image">
          <el-input v-model.trim="formModel.image" placeholder="Image Link" />
        </el-form-item>
      </el-form>

      <div class="mt-10 flex gap-3">
        <el-button
          class="flex-auto"
          @click="$router.back"
        >
          Cancel
        </el-button>

        <el-button
          v-if="currentContact"
          class="flex-auto"
          :type="$elComponentType.danger"
          @click="onDelete"
        >
          Delete
        </el-button>

        <el-button
          class="flex-auto"
          :type="$elComponentType.primary"
          @click="onSave"
        >
          <template #icon>
            <IconPlus class="w-5 h-5" />
          </template>
          Save
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const formRef = useElFormRef()

const formModel = useElFormModel(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const formRules = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      if (currentContact.value) {
        updateContact(formModel)
      } else {
        addContact(formModel)
      }
      router.push({ name: $routeNames.contacts })
    }
  })
}
</script>

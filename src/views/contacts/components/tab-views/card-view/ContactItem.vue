<template>
  <el-card>
    <div class="flex">
      <div class="flex-grow text-sm truncate" @click.stop>
        <template v-if="editMode">
          <el-form
            ref="formRef"
            :rules="formRules"
            :model="localContact"
          >
            <el-form-item prop="name">
              <el-input
                ref="inputRef"
                v-model="localContact.name"
                type="text"
              />
            </el-form-item>
            <el-form-item prop="description">
              <el-input v-model="localContact.description" type="text" />
            </el-form-item>
          </el-form>
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <AppAvatarImage
        :name="contact.name"
        :src="contact.image"
        class="flex items-center justify-center w-[40px] h-[40px] ml-2 rounded-full shrink-0 overflow-hidden
        border border-gray-medium bg-gray-ultra-light"
      />
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <el-button
          :size="$elComponentSize.small"
          class="font-medium text-xs hover:underline"
          text
          @click.stop="editMode = false"
        >
          Cancel
        </el-button>

        <el-button
          :size="$elComponentSize.small"
          :type="$elComponentType.primary"
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          text
          @click.stop="onSave"
        >
          Save
        </el-button>
      </template>

      <template v-else>
        <el-button
          :size="$elComponentSize.small"
          :type="$elComponentType.primary"
          class="font-medium text-xs hover:underline"
          text
          @click.stop="triggerEditMode"
        >
          Edit
        </el-button>

        <el-button
          :size="$elComponentSize.small"
          :type="$elComponentType.danger"
          class="font-medium text-xs hover:underline"
          text
          @click.stop="$emit('delete', contact)"
        >
          Delete
        </el-button>
      </template>
    </div>

    <template #footer>
      <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
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
    </template>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()
const editMode = ref(false)

const formRef = useElFormRef()

const localContact = useElFormModel<IContact>({
  id: -1,
  name: '',
  description: '',
  image: ''
})

const formRules = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

async function triggerEditMode () {
  editMode.value = true

  localContact.id = props.contact.id
  localContact.name = props.contact.name
  localContact.description = props.contact.description
  localContact.image = props.contact.image

  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  formRef.value?.validate(isValid => {
    if (isValid) {
      emit('save', localContact)
      editMode.value = false
    }
  })
}
</script>

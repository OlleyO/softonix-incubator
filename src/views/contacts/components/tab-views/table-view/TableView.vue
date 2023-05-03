<template>
  <el-form id="tableViewEditForm" ref="formRef" :rules="formRules" :model="localContact">
    <el-table :data="contacts" @row-click="onItemClick">
      <el-table-column
        width="130"
        prop="image"
        label="Contact Photo"
      >
        <template #default="scope">
          <AppAvatarImage
            :src="scope.row.image"
            :name="scope.row.name"
            class="flex w-32 h-32 items-center justify-center bg-gray-ultra-light"
          />
        </template>
      </el-table-column>

      <el-table-column
        width="200"
        prop="name"
        label="Fullname"
      >
        <template #default="scope">
          <el-form-item v-if="editMode === scope.row.id" class="no-margin" prop="name" @click.stop>
            <el-input v-model="localContact.name" />
          </el-form-item>
          <template v-else>{{ scope.row.name }}</template>
        </template>
      </el-table-column>
      <el-table-column
        width="800"
        prop="description"
        label="Description"
      >
        <template #default="scope">
          <el-form-item v-if="editMode === scope.row.id" class="no-margin" prop="description" @click.stop>
            <el-input v-model="localContact.description" />
          </el-form-item>
          <template v-else>{{ scope.row.description }}</template>
        </template>
      </el-table-column>
      <el-table-column
        class="flex items-center"
        label="Actions"
        fixed="right"
        width="150"
      >
        <template #default="scope">
          <div class="flex">
            <template v-if="editMode === scope.row.id">
              <el-button
                @click.stop="onCancel"
              >
                Cancel
              </el-button>
              <el-button
                :type="$elComponentType.primary"
                @click.stop="onItemSave(localContact)"
              >
                Save
              </el-button>
            </template>
            <template v-else>
              <el-button
                :type="$elComponentType.danger"
                @click.stop="onItemDelete(scope.row)"
              >
                Delete
              </el-button>
              <el-button
                :type="$elComponentType.primary"
                @click.stop="onEdit(scope.row)"
              >
                Edit
              </el-button>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script lang="ts" setup>
defineProps<{
  contacts: IContact[]
}>()

const inputRef = ref<HTMLInputElement>()
const editMode = ref<number | null>(null)

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

async function triggerEditMode (contact: IContact) {
  editMode.value = contact.id

  localContact.id = contact.id
  localContact.name = contact.name
  localContact.description = contact.description
  localContact.image = contact.image

  await nextTick()
  inputRef.value?.focus()
}

function onCancel () {
  editMode.value = null
}

function onEdit (contact: IContact) {
  editMode.value = contact.id
  triggerEditMode(contact)
}

const emit = defineEmits(['itemDelete', 'itemSave', 'itemClick'])

function onItemSave (contact: IContact) {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      emit('itemSave', contact)
      editMode.value = null
    }
  })
}

function onItemClick (contact: IContact) {
  emit('itemClick', contact.id)
}

function onItemDelete (contact: IContact) {
  emit('itemDelete', contact)
}
</script>

<style lang="scss" scoped>
.no-margin {
  margin: 0 !important;
}
</style>

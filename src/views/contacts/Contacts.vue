<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </div>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="Card View" name="card">
      <CardView
        :contacts="contacts"
        @itemDelete="deleteContact"
        @itemSave="updateContact"
        @itemClick="editContact"
      />
    </el-tab-pane>
    <el-tab-pane label="Table View" name="table">
      <TableView
        :contacts="contacts"
        @itemDelete="deleteContact"
        @itemSave="updateContact"
        @itemClick="editContact"
      />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import CardView from './components/tab-views/card-view/CardView.vue'
import TableView from './components/tab-views/table-view/TableView.vue'

const router = useRouter()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts, activeTab } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
</script>

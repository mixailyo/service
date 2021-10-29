<template>
  <div class="container">
    <requests-list :requests="activeRequestsList" @remove="removeRequest"></requests-list>
    <button class="requests-create btn" @click="showDialogWithRequestsAddForm">Создать заявку</button>
    <my-dialog v-model:show="dialogWithRequestsAddFormVisible">
      <requests-add-form @create="createRequest"></requests-add-form>
    </my-dialog>
  </div>
</template>

<script>
import RequestsList from "@/components/RequestsList";
import RequestsAddForm from "@/components/RequestsAddForm";

export default {
  components: { RequestsList, RequestsAddForm },
  data() {
    return {
      activeRequestsList: {
        listTitle: "Список активных заявок",
        listTitleAlternate: "Активных заявок нет",
        listItems: [
          { id: 1, title: "Ремонт холодильника", description: "Не работает холодильник" },
          { id: 2, title: "Не горят лампочкки", description: "В зале не горят ламопчки" },
          { id: 3, title: "Не работаю колонки", description: "Не работает музыка" },
        ],
      },
      dialogWithRequestsAddFormVisible: false,
    };
  },
  methods: {
    createRequest(request) {
      this.activeRequestsList.listItems.push(request);
    },
    removeRequest(request) {
      this.activeRequestsList.listItems = this.activeRequestsList.listItems.filter((requestInList) => requestInList.id !== request.id);
    },
    showDialogWithRequestsAddForm() {
      this.dialogWithRequestsAddFormVisible = true;
    },
  },
};
</script>

<style lang="scss">
// VARS
:root {
  --color-black: #000000;
  --color-white: #ffffff;
}

// RESET DEFAULT STYLES
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: monospace;
}

input {
  outline: unset;
  border: unset;
  border-radius: unset;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: unset;
}

// COMMON STYLES
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 200px;
  max-width: 100%;
  text-transform: uppercase;
  border: 1px solid var(--color-black);
  transition: background-color 0.3s linear;
  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
}

.input {
  border: 1px solid var(--color-black);
  padding: 10px;
}
</style>

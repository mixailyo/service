<template>
  <form class="requests-add-form" @submit.prevent>
    <h2 class="requests-add-form__title">Добавление новой заявки</h2>
    <input type="text" class="requests-add-form__input input" v-model="request.title" />
    <input type="text" class="requests-add-form__input input" v-model="request.description" />
    <button class="requests-add-form__submit btn" @click="createRequest">Отправить заявку</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      request: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createRequest() {
      this.request.id = new Date().now;
      this.$emit("create", this.request);
      this.request = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style lang="scss">
.requests-add-form {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  &__title {
    margin-bottom: 20px;
  }
  &__input {
    margin-bottom: 15px;
  }
  &__submit {
  }
}
</style>

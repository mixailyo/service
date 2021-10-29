<template>
  <div class="requests">
    <h2 class="requests__title" v-if="requests.listItems.length">{{ requests.listTitle }}</h2>
    <h2 class="requests__title" v-else>{{ requests.listTitleAlternate }}</h2>
    <ul class="requests-list">
      <li class="requests-list__item" v-for="request in requests.listItems" :key="request.id">
        <requests-card :request="request" @remove="$emit('remove', request)"></requests-card>
      </li>
    </ul>
  </div>
</template>

<script>
import RequestsCard from "@/components/RequestsCard";

export default {
  components: { RequestsCard },
  props: {
    requests: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.requests {
  padding: 40px 0;
  &__title {
    margin-bottom: 20px;
  }
}
.requests-list {
  &__item {
    list-style: none;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>

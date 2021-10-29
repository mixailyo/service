<template>
  <div class="requests-card">
    <div class="requests-card__content">
      <h3 class="requests-card__title">{{ request.title }}</h3>
      <p class="requests-card__description">{{ request.description }}</p>
    </div>
    <div class="requests-card__buttons">
      <button class="requests-card__button">
        <icon-edit />
      </button>
      <button class="requests-card__button" @click="$emit('remove', request)">
        <icon-close />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.requests-card {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--color-black);
  &:hover {
    .requests-card__buttons {
      opacity: 1;
      pointer-events: all;
    }
  }
  &__title {
  }
  &__description {
  }
  &__buttons {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s linear;
  }
  &__button {
    transition: transform 0.2s linear;
    &:not(:last-child) {
      margin-right: 5px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

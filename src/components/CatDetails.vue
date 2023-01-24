<template>
  <div>
    <div
      class="details"
      @mouseenter="emit('hovered', props.index)"
      @mouseleave="emit('mouseleave')"
    >
      <span>Created At:  {{ formatDate(props.createdAt) }}</span>
      <span>Verifed:  {{ props.verified ? 'Yes' : 'No'}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import moment from 'moment';

const props = defineProps<{
  createdAt: string
  verified: string
  index: number
}>()

const emit = defineEmits<{
  (event: 'hovered', index: number): void
  (event: 'mouseleave'): void
}>()

const formatDate = (value: string) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
}
</script>


<style scoped>
.details{
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
</style>

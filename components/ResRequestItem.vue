<script lang="ts" setup>
import { getDayLabel } from "~/utils/helpers/dates";
import type { Reservation } from "~/utils/interfaces/Reservation";

const props = defineProps({
  reservation: {
    type: Object as PropType<Reservation>,
    required: true,
  },
});

const { setFilters } = useReservationsStore();

const updateFilters = () => {
  setFilters({
    date: props.reservation.date,
    startTime: props.reservation.time,
  });
};

const getDateLabel = computed(() => {
  const date = new Date(props.reservation.date);
  return getDayLabel(date).label;
});
</script>

<template>
  <div @click="updateFilters" class="border py-3 px-5 mb-3 cursor-pointer">
    <div class="flex justify-between">
      <div class="flex flex-col mb-3 gap-2">
        <p class="text-lg font-semibold">{{ reservation.customerName }}</p>
        <p class="text-sm">{{ reservation.customerPhone }}</p>
        <p class="text-sm">{{ reservation.user?.email }}</p>
      </div>
      <div class="flex flex-col items-end gap-2">
        <p class="text-lg font-semibold">
          {{ getDateLabel }}
        </p>
        <p class="text-lg font-semibold">{{ reservation.time }}</p>
        <span class="text-sm">{{ reservation.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "~/utils/helpers/dates";

const nuxtApp: any = useNuxtApp();
const startDate = formatDate(new Date());
const { restaurant, reservations } = useAppStore();
const { reservationRequests } = storeToRefs(reservations);

onMounted(async () => {
  const { data } = await nuxtApp.$fetch(
    `/api/restaurants/${restaurant.restaurant?._id}/reservations?startDate=${startDate}&status=pending`
  );
  reservations.setReservationRequests(data);
});
</script>

<template>
  <div class="mt-4">
    <div v-if="!reservationRequests.length">
      <p>There is no reservation requests</p>
    </div>
    <div v-else>
      <ResRequestItem
        v-for="res in reservationRequests"
        :key="res._id"
        :reservation="res"
      />
    </div>
  </div>
</template>

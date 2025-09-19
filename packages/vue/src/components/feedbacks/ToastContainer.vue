<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :message="toast.message"
        :type="toast.type"
        :dismissible="toast.dismissible"
        @dismiss="removeToast(toast.id)"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../composables/useToast'
import { Toast } from './index'

// const { toasts, removeToast } = useToast()
</script>

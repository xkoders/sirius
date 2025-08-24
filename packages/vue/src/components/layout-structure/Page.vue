<template>
  <main
    :class="[
      props.className,
      props.fullWidth ? 'w-full' : 'max-w-5xl',
      'mx-auto p-6 w-full',
    ]"
  >
    <section class="flex gap-3 md:gap-6 mb-5 text-[15px]">
      <article
        :class="[
          props.subtitle ? 'items-start' : 'items-center',
          'flex-1 flex gap-3',
        ]"
      >
        <!-- Back Action Button -->
        <button
          v-if="props.backAction"
          class="shadow-sm border border-gray-400 hover:bg-gray-200 font-medium flex justify-center items-center w-10 h-10 rounded-md"
          @click="props.backAction.onAction"
          :title="props.backAction.label || 'Back'"
        >
          &larr;
        </button>

        <!-- Title and Subtitle -->
        <div class="flex-1">
          <h1 v-if="props.title" class="text-[22px] font-medium leading-[1]">
            {{ props.title }}
          </h1>
          <h2 v-if="props.subtitle" class="text-base opacity-75 mt-1">
            {{ props.subtitle }}
          </h2>
        </div>
      </article>

      <!-- Page Actions Section -->
      <article class="flex gap-3">
        <!-- Desktop Actions -->
        <div class="hidden lg:flex gap-3">
          <!-- Secondary Actions -->
          <Button
            v-for="(item, index) in props.secondaryActions"
            :key="index"
            :class="'hover:text-indigo-700 font-medium py-2 h-fit rounded-md'"
            @click="item.onAction"
            :disabled="item.disabled"
            :loading="item.loading"
            :variant="item.variant || 'ghost'"
            :url="item.url"
            :rel="item.rel"
            :target="item.target"
          >
            {{ item.label }}
          </Button>

          <!-- Action Groups -->
          <Popover v-for="(group, index) in props.actionGroups" :key="index">
            <!-- Activator for desktop -->
            <template #activator>
              <div>
                <Button>
                  <span>{{ group.title }}</span>
                  <span class="-mr-2.5 ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </template>
            <!-- Dropdown list for action group -->
            <ul
              class="focus:outline-none p-2 whitespace-nowrap min-w-[12rem]"
            >
              <li v-for="(action, idx) in group.actions" :key="idx">
                <Button
                  :disabled="action.disabled"
                  @click="action.onAction"
                  :url="action.url"
                  :loading="action.loading"
                  fullwidth
                  alignment="start"
                  size="none"
                  class="p-2"
                >
                  {{ action.label }}
                </Button>
              </li>
            </ul>
          </Popover>
        </div>

        <!-- Mobile Actions -->
        <div class="block lg:hidden">
          <Popover>
            <!-- Activator for mobile -->
            <template #activator>
              <Button outline>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 -mx-2"
                >
                  <path
                    d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  />
                </svg>
              </Button>
            </template>
            <!-- Dropdown list for mobile -->
            <ul class="py-2">
              <!-- Secondary Actions -->
              <li v-for="(item, index) in props.secondaryActions" :key="index" class="px-2">
                <Button
                  v-bind="item"
                  :disabled="item.disabled"
                  @click="item.onAction"
                  :url="item.url"
                  fullwidth
                  alignment="start"
                  size="small"
                >
                  {{ item.label }}
                </Button>
              </li>
              <!-- Action Groups -->
              <li v-for="(group, index) in props.actionGroups" :key="index">
                <span
                  class="text-xs font-medium px-4 py-2.5 mt-2 border-t w-full flex"
                >
                  {{ group.title }}
                </span>
                <ul
                  class="focus:outline-none px-2 whitespace-nowrap min-w-[12rem]"
                >
                  <li v-for="(action, idx) in group.actions" :key="idx">
                    <Button
                      :disabled="action.disabled"
                      @click="action.onAction"
                      :url="action.url"
                      :loading="action.loading"
                      fullwidth
                      alignment="start"
                      size="small"
                    >
                      {{ action.label }}
                    </Button>
                  </li>
                </ul>
              </li>
            </ul>
          </Popover>
        </div>

        <!-- Primary Action -->
        <Button
          v-if="props.primaryAction"
          @click="props.primaryAction.onAction"
          variant="primary"
        >
          {{ props.primaryAction.label }}
        </Button>
      </article>
    </section>

    <!-- Main Content Slot -->
    <slot />
  </main>
</template>

<script setup lang="ts">
import Popover from './Popover.vue'
import {Button} from '../actions' // Assuming a Button component exists

interface IAction {
  label: string
  onAction?: () => void
  target?: string
  url?: string
  disabled?: boolean
  loading?: boolean
  variant?: string
  rel?: string
}

interface IPageProps {
  children?: any
  backAction?: IAction
  className?: string
  title?: string
  subtitle?: string
  primaryAction?: IAction
  secondaryActions?: IAction[]
  actionGroups?: {
    title: string
    actions: IAction[]
  }[]
  fullWidth?: boolean
}

const props = defineProps<IPageProps>()
</script>

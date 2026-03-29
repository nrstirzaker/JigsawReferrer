<script setup lang="ts">
import { Icon } from '@iconify/vue'

import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectLabel,
    SelectPortal,
    SelectRoot,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectViewport,
} from 'reka-ui'
// import { ref } from 'vue'

// const orga = ref()

defineProps<{
    options: string[]
    placeHolder: string
}>()
</script>

<template>
    <SelectRoot>
        <SelectTrigger
            class="text-grass11 data-placeholder:text-green9 inline-flex h-8.75 min-w-40 items-center justify-between gap-1.25 rounded-lg border bg-white px-3.75 text-xs leading-none shadow-sm outline-none hover:bg-stone-50 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customise options"
        >
            <SelectValue :placeholder="placeHolder" />
            <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
        </SelectTrigger>

        <SelectPortal>
            <SelectContent
                class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-100 min-w-40 rounded-lg border bg-white shadow-sm will-change-[opacity,transform]"
                :side-offset="5"
            >
                <SelectScrollUpButton
                    class="text-violet11 flex h-6.25 cursor-default items-center justify-center bg-white"
                >
                    <Icon icon="radix-icons:chevron-up" />
                </SelectScrollUpButton>

                <SelectViewport class="p-1.25">
                    <SelectGroup>
                        <SelectItem
                            v-for="(option, index) in options"
                            :key="index"
                            class="text-grass11 data-disabled:text-mauve8 data-highlighted:bg-green9 data-highlighted:text-green1 relative flex h-6.25 items-center rounded-[3px] pr-8.75 pl-6.25 text-xs leading-none select-none data-disabled:pointer-events-none data-highlighted:outline-none"
                            :value="option"
                        >
                            <SelectItemIndicator
                                class="absolute left-0 inline-flex w-6.25 items-center justify-center"
                            >
                                <Icon icon="radix-icons:check" />
                            </SelectItemIndicator>
                            <SelectItemText>
                                {{ option }}
                            </SelectItemText>
                        </SelectItem>
                    </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton
                    class="text-violet11 flex h-6.25 cursor-default items-center justify-center bg-white"
                >
                    <Icon icon="radix-icons:chevron-down" />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>

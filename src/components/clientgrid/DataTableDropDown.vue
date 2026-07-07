<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

defineProps<{
    client: {
        id: number
    }
}>()

function copy(id: number) {
    navigator.clipboard.writeText(id.toString())
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="h-8 w-8 p-0">
                <span class="sr-only">Open menu</span>
                <MoreHorizontal class="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem @click="copy(client.id)">
                Copy Client Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                ><a :href="'/client/parent-carer?clientId=' + client.id"
                    >Edit Client</a
                ></DropdownMenuItem
            >
            <DropdownMenuItem
                ><a :href="'/client/refer?clientId=' + client.id"
                    >Refer Client</a
                ></DropdownMenuItem
            >
        </DropdownMenuContent>
    </DropdownMenu>
</template>

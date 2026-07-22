<script setup lang="ts">
import { Button } from '@/components/ui/button'
const props = defineProps(['clientId'])

</script>

<template>
    <a :href="'/client/parent-carer?clientId=' + props.clientId">
    <Button >
        Edit Client
    </Button>
    </a>
</template>
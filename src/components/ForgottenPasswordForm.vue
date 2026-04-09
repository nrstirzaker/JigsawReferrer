<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

async function submit(e: Event) {
    e.preventDefault()

    const email = (e.currentTarget as HTMLFormElement).email.value

    const response = await fetch('/api/auth/request-password-reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            redirectTo: 'http://localhost:4321/resetpassword',
        }),
        credentials: 'include',
    })

    window.location.href =
        'http://localhost:4321/waitForPasswordResetEmail?emailAddress=' + email
}
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card>
            <CardHeader>
                <CardTitle>Forgotten Password</CardTitle>
                <CardDescription>
                    Enter your email below and if you have an account we will
                    send you a link to enable you to reset your password
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit="submit">
                    <FieldGroup>
                        <Field>
                            <FieldLabel for="email"> Email </FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                name="emailAddress"
                                placeholder="m@example.com"
                                required
                            />
                        </Field>

                        <Field>
                            <Button type="submit"> Submit </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

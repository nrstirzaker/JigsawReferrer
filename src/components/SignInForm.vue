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
    const password = (e.currentTarget as HTMLFormElement).password.value
    const response = await fetch('/api/auth/sign-in/email', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })

    if (response.ok) {
        window.location.href = '/'
    } else {
        console.error('login fail')
    }
}
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card>
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email address and password to login to your
                    account
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
                                placeholder="m@example.com"
                                name="email"
                                required
                            />
                        </Field>
                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="password">
                                    Password
                                </FieldLabel>
                                <a
                                    href="forgottenpassword"
                                    class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </Field>
                        <Field>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                        </Field>
                        <Field>
                            <Button type="submit"> Sign In </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

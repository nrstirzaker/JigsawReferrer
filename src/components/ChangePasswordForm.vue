<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

async function submit(e: Event) {
    e.preventDefault()

    const newPassword = (e.currentTarget as HTMLFormElement).newPassword.value
    const currentPassword = (e.currentTarget as HTMLFormElement).currentPassword
        .value

    const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({
            newPassword: newPassword,
            currentPassword: currentPassword,
            revokeOtherSessions: true,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })

    console.log('response: ' + response is 400 if current password is not correct

    window.location.href = 'http://localhost:4321/signin'
}
</script>

<template>
    <div :class="cn('flex flex-col gap-6')">
        <Card>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                    Please enter your current and new password below
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit="submit">
                    <FieldGroup>
                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="currentPassword">
                                    Current Password
                                    <span class="text-red-600">*</span>
                                </FieldLabel>
                            </div>
                            <Input
                                id="currentPassword"
                                type="password"
                                name="currentPassword"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel for="newPassword">
                                New Password
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="newPassword"
                                type="password"
                                name="newPassword"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel for="confirmNewPassword">
                                Confirm New Password
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="confirmNewPassword"
                                type="password"
                                name="confirmNewPassword"
                                required
                            />
                        </Field>
                        <Field>
                            <Button type="submit"> Reset </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    </div>
</template>

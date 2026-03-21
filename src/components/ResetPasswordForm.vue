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
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card>
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>
                    Please enter your new password below
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <FieldGroup>
                        <Field>
                            <FieldLabel for="email"> Email </FieldLabel>
                            <Input id="email" type="email" readonly />
                        </Field>
                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="password">
                                    Password <span class="text-red-600">*</span>
                                </FieldLabel>
                            </div>
                            <Input id="password" type="password" required />
                        </Field>
                        <Field>
                            <FieldLabel for="confirm-password">
                                Confirm Password
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
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

<script setup lang="ts">
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
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
                Enter your information below to create your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/user/signup" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="fullName"> Full Name </FieldLabel>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="John Doe"
                            name="fullName"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="email"> Email </FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            name="email"
                            required
                        />
                        <FieldDescription>
                            We'll use this to contact you. We will not share
                            your email with anyone else.
                        </FieldDescription>
                    </Field>
                    <Field>
                        <FieldLabel for="password"> Password </FieldLabel>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                        <FieldDescription
                            >Must be at least 8 characters
                            long.</FieldDescription
                        >
                    </Field>
                    <Field>
                        <FieldLabel for="confirm-password">
                            Confirm Password
                        </FieldLabel>
                        <Input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            required
                        />
                        <FieldDescription
                            >Please confirm your password.</FieldDescription
                        >
                    </Field>
                    <FieldGroup>
                        <Field>
                            <Button type="submit"> Create Account </Button>
                            <FieldDescription class="px-6 text-center">
                                Already have an account? <a href="#">Sign in</a>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldGroup>
            </form>
        </CardContent>
    </Card>
</template>

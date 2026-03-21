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
            <form action="/api/signinup" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="firstName">
                            First Name <span class="text-red-600">*</span>
                        </FieldLabel>
                        <Input
                            id="firstName"
                            type="text"
                            placeholder="Jane"
                            name="firstName"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="surname">
                            Surname
                            <span class="text-red-600">*</span></FieldLabel
                        >
                        <Input
                            id="surname"
                            type="text"
                            placeholder="Doe"
                            name="surname"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="email">
                            Email
                            <span class="text-red-600">*</span></FieldLabel
                        >
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            name="email"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="contactPhone">
                            Contact Phone Number
                            <span class="text-red-600">*</span>
                        </FieldLabel>
                        <Input
                            id="contactPhoneNumber"
                            type="text"
                            name="contactPhoneNumber"
                            required
                        />
                    </Field>
                    <FieldDescription>
                        We'll only use your email address and phone number to
                        contact you, we will not share these with anyone else.
                    </FieldDescription>
                    <Field>
                        <FieldLabel for="password">
                            Password
                            <span class="text-red-600">*</span></FieldLabel
                        >
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
                            Confirm Password <span class="text-red-600">*</span>
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
                                Already have an account?
                                <a href="signin">Sign in</a>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldGroup>
            </form>
        </CardContent>
    </Card>
    <FieldDescription class="px-6 text-center">
        By clicking continue, you agree to our
        <a href="tos">Terms of Service</a> and
        <a href="privacypolicy">Privacy Policy</a>.
    </FieldDescription>
</template>

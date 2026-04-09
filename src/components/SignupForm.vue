<script setup lang="ts">
import { ref } from 'vue'
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

async function submit(e: Event) {
    e.preventDefault()

    //const formData = new FormData(e.currentTarget as HTMLFormElement)
    const firstName = (e.currentTarget as HTMLFormElement).firstName.value
    const surname = (e.currentTarget as HTMLFormElement).surname.value
    const name = firstName + ' ' + surname
    const email = (e.currentTarget as HTMLFormElement).email.value
    const password = (e.currentTarget as HTMLFormElement).password.value

    console.log('name: ' + name)
    console.log('emailaddress: ' + email)
    console.log('password: ' + password)

    const response = await fetch('/api/auth/sign-up/email', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            callbackURL: 'http://localhost:4321/signin',
        }),
        credentials: 'include',
    })

    if (response.ok) {
        window.location.href = 'waitForVerifyEmail/?emailAddress=' + email
    } else {
        console.error('sign up failed')
    }
}
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
            <form @submit="submit">
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

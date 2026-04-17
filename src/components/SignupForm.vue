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
    FieldError,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Field as VeeField, useForm } from 'vee-validate'

import * as yup from 'yup'

const schema = yup.object({
    firstName: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords don't match!")
        .required('Required'),
})

const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        firstName: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
})

const onSubmit = handleSubmit(async (values: any) => {
    const firstName = values.firstName
    const surname = values.surname
    const name = firstName + ' ' + surname
    const email = values.email
    const password = values.password

    console.log('name: ' + name)
    console.log('email: ' + email)
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
})
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
            <form id="sign-up-form" @submit="onSubmit">
                <FieldGroup>
                    <VeeField v-slot="{ field, errors }" name="firstName">
                        <Field :data-invalid="!!errors.length">
                            <FieldLabel for="firstName">
                                First Name <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                v-bind="field"
                                :aria-invalid="!!errors.length"
                                autocomplete="off"
                                data-vv-validate-on="none"
                            />
                            <FieldError v-if="errors.length" :errors="errors" />
                        </Field>
                    </VeeField>
                    <VeeField v-slot="{ field, errors }" name="surname">
                        <Field :data-invalid="!!errors.length">
                            <FieldLabel for="surname">
                                Surname
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="surname"
                                type="text"
                                placeholder="Doe"
                                v-bind="field"
                                :aria-invalid="!!errors.length"
                                autocomplete="off"
                                data-vv-validate-on="none"
                            />
                        </Field>
                    </VeeField>
                    <VeeField v-slot="{ field, errors }" name="email">
                        <Field :data-invalid="!!errors.length">
                            <FieldLabel for="email">
                                Email
                                <span class="text-red-600">*</span>
                            </FieldLabel>

                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                v-bind="field"
                                :aria-invalid="!!errors.length"
                                autocomplete="off"
                                data-vv-validate-on="none"
                            />
                        </Field>
                    </VeeField>
                    <VeeField v-slot="{ field, errors }" name="password">
                        <Field>
                            <FieldLabel for="password">
                                Password
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="password"
                                type="password"
                                v-bind="field"
                                :aria-invalid="!!errors.length"
                                autocomplete="off"
                                data-vv-validate-on="none"
                            />
                            <FieldDescription
                                >Must be at least 8 characters long.
                            </FieldDescription>
                            <FieldError v-if="errors.length" :errors="errors" />
                        </Field>
                    </VeeField>
                    <VeeField v-slot="{ field, errors }" name="confirmPassword">
                        <Field>
                            <FieldLabel for="confirm-password">
                                Confirm Password
                                <span class="text-red-600">*</span>
                            </FieldLabel>
                            <Input
                                id="confirmPassword"
                                type="password"
                                v-bind="field"
                                :aria-invalid="!!errors.length"
                                autocomplete="off"
                                data-vv-validate-on="none"
                            />
                            <div v-if="errors.length">
                                <FieldError true :errors="errors" />
                            </div>
                            <div v-else>
                                <FieldDescription>
                                    Please confirm your password.
                                </FieldDescription>
                            </div>
                        </Field>
                    </VeeField>
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

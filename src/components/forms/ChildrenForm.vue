<script setup lang="ts">
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
import { Select } from '@/components/ui/select'

const options = ['Male', 'Female', 'Prefer not to say']
</script>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Child Form</CardTitle>
            <CardDescription> Enter child details below </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/children" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="firstname"> Firstname </FieldLabel>
                        <Input
                            id="firstname"
                            type="text"
                            placeholder="Firstname"
                            name="firstname"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="lastname"> Lastname </FieldLabel>
                        <Input
                            id="lastname"
                            type="text"
                            placeholder="Lastname"
                            name="lastname"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="age"> Age </FieldLabel>
                        <Input
                            id="age"
                            type="number"
                            min="0"
                            max="50"
                            placeholder="10"
                            name="age"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="gender"> Gender </FieldLabel>
                        <Select
                            id="gender"
                            type="select"
                            name="gender"
                            place-holder="Male"
                            :options="options"
                        />
                    </Field>
                    <Field>
                        <Button type="submit"> Save </Button>
                        <Button type="button"> Cancel </Button>
                    </Field>
                </FieldGroup>
            </form>
        </CardContent>
    </Card>
</template>

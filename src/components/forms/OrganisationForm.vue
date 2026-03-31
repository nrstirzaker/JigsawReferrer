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
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

const options = ['Type One', 'Type Two']
</script>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Organisation Form</CardTitle>
            <CardDescription>
                Enter organisation details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/registration/organisation" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="nameOfOrganisation">
                            Name of organisation
                        </FieldLabel>
                        <Input
                            id="nameOfOrganisation"
                            type="text"
                            placeholder="Name of organisation"
                            name="nameOfOrganisation"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="typeOfOrganisation">
                            Type of organisation
                        </FieldLabel>
                        <Select
                            id="typeOfOrganisation"
                            type="select"
                            name="typeOfOrganisation"
                            place-holder="Type One"
                            :options="options"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="address"> Address </FieldLabel>
                        <Textarea
                            id="address"
                            placeholder="Enter full address"
                            maxlength="300"
                            name="address"
                        />
                    </Field>
                    <div class="flex justify-center gap-5">
                        <Button type="submit"> Save </Button>
                        <Button type="button"> Cancel </Button>
                    </div>
                </FieldGroup>
            </form>
        </CardContent>
    </Card>
</template>

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
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

const titleOptions = ['Please Select','Mr', 'Mrs', 'Miss', 'Ms']
const organisationOptions = ['Organisation One', 'Organisation Two']
</script>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Referrer Registration Form</CardTitle>
            <CardDescription>
                Enter Referrer Registration details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/registration/referrer" method="POST">
                <div class="w-6xl">
                    <FieldGroup class="mb-4">
                        <div class="grid grid-cols-4 gap-1">
                            <Field>
                                <FieldLabel for="title"> Title <span class="manditory">*</span></FieldLabel>
                                <Select id="title" type="select" name="title" place-holder="Please Select"
                                    :options="titleOptions" />
                            </Field>

                            <Field>
                                <FieldLabel for="firstName"> Firstname <span class="manditory">*</span></FieldLabel>
                                <Input id="firstName" type="text" placeholder="First Name" name="firstName" />
                            </Field>
                            <Field>
                                <FieldLabel for="middleInitials">Middle Innitials</FieldLabel>
                                <Input id="middleInitials" type="text" placeholder="Middle Initials" name="middleInitials" />
                            </Field>
                            <Field>
                                <FieldLabel for="lastName"> Lastname <span class="manditory">*</span></FieldLabel>
                                <Input id="lastName" type="text" placeholder="Last Name" name="lastName" />
                            </Field>

                            <Field>
                                <FieldLabel for="email"> Email <span class="manditory">*</span></FieldLabel>
                                <Input id="email" type="email" placeholder="email@example.com" name="email" required />
                                <FieldDescription>
                                    We'll use this to contact you. We will not share
                                    your email with anyone else.
                                </FieldDescription>
                            </Field>

                            <Field>
                                <FieldLabel for="tel"> Phone <span class="manditory">*</span></FieldLabel>
                                <Input id="tel" type="tel" placeholder="07825324478" name="tel" />
                                <FieldDescription>
                                    We'll use this to contact you. We will not share
                                    your number with anyone else.
                                </FieldDescription>
                            </Field>

                            <Field>
                                <FieldLabel for="organisation">
                                    Organisation
                                </FieldLabel>
                                <Select id="organisation" type="select" name="organisation"
                                    place-holder="Organisation One" :options="organisationOptions" />
                            </Field>
                        </div>
                        </FieldGroup>
                        <FieldGroup>
                            <div>
                            <div class="flex justify-center gap-5">
                                <Button type="submit"> Save </Button>
                                <Button type="button"> Cancel </Button>
                            </div>
                        </div>
                    </FieldGroup>
                </div>
            </form>
        </CardContent>
    </Card>
</template>

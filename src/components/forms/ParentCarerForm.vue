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
import { Textarea } from '@/components/ui/textarea'

const genderOptions = ['Male', 'Female', 'Prefer not to say']
const pregnantOptions = ['Yes', 'No']
</script>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Parent Carer Form</CardTitle>
            <CardDescription>
                Enter Parent Carer details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/parent-carer" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="referralNumber">
                            Referral Number
                        </FieldLabel>
                        <Input
                            id="referralNumber"
                            type="number"
                            min="0"
                            max=""
                            placeholder="Enter referral number"
                            name="referralNumber"
                        />
                    </Field>
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
                        <FieldLabel for="tel"> Phone </FieldLabel>
                        <Input
                            id="tel"
                            type="tel"
                            placeholder="07825324478"
                            name="tel"
                        />
                        <FieldDescription>
                            We'll use this to contact you. We will not share
                            your number with anyone else.
                        </FieldDescription>
                    </Field>
                    <Field>
                        <FieldLabel for="pregnant"> Pregnant </FieldLabel>
                        <Select
                            id="pregnant"
                            type="select"
                            name="pregnant"
                            place-holder="No"
                            :options="pregnantOptions"
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="gender"> Gender </FieldLabel>
                        <Select
                            id="gender"
                            type="select"
                            name="gender"
                            place-holder="Male"
                            :options="genderOptions"
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
                    <Field>
                        <FieldLabel for="reasonForReferral">
                            Reason for referral
                        </FieldLabel>
                        <Textarea
                            id="reasonForReferral"
                            placeholder="Enter reason for referral"
                            maxlength="800"
                            name="reasonForReferral"
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

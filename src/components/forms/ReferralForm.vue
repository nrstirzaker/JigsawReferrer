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
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Referral Form</CardTitle>
            <CardDescription> Enter your information below </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/referral" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="name"> Full Name </FieldLabel>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            name="name"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="reasonForReferral">
                            Reason For Referral
                        </FieldLabel>
                        <Textarea
                            id="reasonForReferral"
                            placeholder="Reason for referral"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="descriptionOfItemsNeeded">
                            Description Of Items Needed
                        </FieldLabel>
                        <Textarea
                            id="descriptionOfItemsNeeded"
                            placeholder="Description Of Items Needed"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel for="additionalNotes">
                            Additional Notes
                        </FieldLabel>
                        <Textarea
                            id="additionalNotes"
                            placeholder="Additional Notes"
                            required
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

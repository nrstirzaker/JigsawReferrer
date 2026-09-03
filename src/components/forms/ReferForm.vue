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
<style>
textarea {
    resize: none;
}
</style>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Referral Form</CardTitle>
            <CardDescription> Enter your information below </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/refer" method="POST">
                <div class="w-6xl">
                    <FieldGroup class="mb-4">
                        <div class="grid grid-cols-4 gap-1">
                            <Field>
                                <FieldLabel for="referralId"> Referral Id </FieldLabel>
                                <Input id="referralId" type="text" name="referralId"
                                    placeholder="20260708-100350-JH or 000000024" readonly />
                            </Field>
                            <Field>
                                <FieldLabel for="name"> Full Name <span class="mandatory">*</span></FieldLabel>
                                <Input id="name" type="text" placeholder="John Doe" name="name" required />
                            </Field>
                        </div>
                    </FieldGroup>
                    <FieldGroup class="mb-4">
                        <Field>
                            <FieldLabel for="reasonForReferral">
                                Reason For Referral <span class="mandatory">*</span>
                            </FieldLabel>
                            <Textarea id="reasonForReferral" placeholder="Reason for referral" required />
                        </Field>
                        <Field>
                            <FieldLabel for="descriptionOfItemsNeeded">
                                Description Of Items Needed <span class="mandatory">*</span>
                            </FieldLabel>
                            <Textarea id="descriptionOfItemsNeeded" placeholder="Description Of Items Needed"
                                required />
                        </Field>
                        <Field>
                            <FieldLabel for="additionalNotes">
                                Additional Notes <span class="mandatory">*</span>
                            </FieldLabel>
                            <Textarea id="additionalNotes" placeholder="Additional Notes" required />
                        </Field>
                        <div class="flex justify-center gap-5">
                            <Button type="submit"> Save </Button>
                            <Button type="button"> Cancel </Button>
                        </div>
                    </FieldGroup>
                </div>
            </form>
        </CardContent>
    </Card>
</template>

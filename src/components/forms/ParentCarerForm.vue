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
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from '@/components/ui/field'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import "tailwindcss";

const genderOptions = ['Male', 'Female', 'Prefer not to say']
const pregnantOptions = ['Yes', 'No']
const shelterOptions = ['Shelter 1', 'Shelter 2']
const refugeOptions = ['Refuge 1', 'Refuge 2']

function AddChild() {}
</script>
<style>
.manditory {
    color: red;
}
.border-input {
    border-color: black;
    border-radius: 4px;
}
button {
    border-radius: 4px;
}
</style>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Parent/Carer Form</CardTitle>
            <CardDescription>
                Enter Parent/Carer details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/parent-carer" method="POST">
                <div class="w-6xl">
                    <FieldGroup class="mb-4">
                        <div class="grid grid-cols-4 gap-1">
                            <Field class="min-w-1/4">
                                <FieldLabel for="firstname">
                                    First Name <span class="manditory">*</span>
                                </FieldLabel>
                                <Input
                                    id="firstname"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    class="rounded-lg border"
                                    required
                                />
                            </Field>
                            <Field class="min-w-1/4">
                                <FieldLabel for="lastname">
                                    Last Name <span class="manditory">*</span>
                                </FieldLabel>
                                <Input
                                    id="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                />
                            </Field>
                            <Field class="min-w-1/4">
                                <FieldLabel for="email"> Email </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    name="email"
                                    required
                                />
                            </Field>
                            <Field class="min-w-1/4">
                                <FieldLabel for="tel"> Phone </FieldLabel>
                                <Input
                                    id="tel"
                                    type="tel"
                                    placeholder="Mobile or Landline"
                                    name="tel"
                                />
                            </Field>
                        </div>
                    </FieldGroup>
                    <FieldGroup class="mb-4">
                        <div class="grid grid-cols-2 grid-rows-4 gap-4">
                            <Field class="col-start-1 row-start-1 w-sm">
                                <FieldLabel for="addressNumberName">
                                    House Number/Name
                                </FieldLabel>
                                <Input
                                    id="addressNumberName"
                                    placeholder="House Number or Name"
                                    name="addressNumberName"
                                />
                            </Field>
                            <Field class="col-start-1 row-start-2 w-sm">
                                <FieldLabel for="addressStreet">
                                    Street
                                </FieldLabel>
                                <Input
                                    id="addressStreet"
                                    placeholder="Street"
                                    name="addressStreet"
                                />
                            </Field>

                            <Field class="col-start-1 row-start-3 w-sm">
                                <FieldLabel for="addressTown">
                                    Town
                                </FieldLabel>
                                <Input
                                    id="addressTown"
                                    placeholder="Town"
                                    name="addressTown"
                                />
                            </Field>

                            <Field class="col-start-1 row-start-4 w-sm">
                                <FieldLabel for="addressPostCode">
                                    Postcode
                                </FieldLabel>
                                <Input
                                    id="addressPostCode"
                                    placeholder="Postcode"
                                    name="addressPostCode"
                                />
                            </Field>

                            <Field class="col-start-2 row-start-1 w-2.5">
                                <FieldLabel for="Shelter"> Shelter </FieldLabel>
                                <Select
                                    id="shelter"
                                    type="select"
                                    name="Shelter"
                                    place-holder="Shelter"
                                    :options="shelterOptions"
                                />
                            </Field>
                            <Field class="col-start-2 row-start-2 w-2.5">
                                <FieldLabel for="refuge"> Refuge </FieldLabel>
                                <Select
                                    id="refuge"
                                    type="select"
                                    name="refuge"
                                    place-holder="Refuge"
                                    :options="refugeOptions"
                                />
                            </Field>
                        </div>
                    </FieldGroup>
                    <FieldGroup class="mb-4">
                        <div class="grid grid-cols-1 grid-rows-2 gap-4">
                            <Field class="w-2.5">
                                <FieldLabel for="gender"> Gender </FieldLabel>
                                <Select
                                    id="gender"
                                    type="select"
                                    name="gender"
                                    place-holder="Please Select"
                                    :options="genderOptions"
                                />
                            </Field>
                            <Field class="w-1">
                                <FieldLabel for="pregnant">
                                    Pregnant?
                                </FieldLabel>
                                <Select
                                    id="pregnant"
                                    type="select"
                                    name="pregnant"
                                    place-holder="Pregnant"
                                    :options="pregnantOptions"
                                />
                            </Field>
                        </div>
                    </FieldGroup>
                </div>
            </form>
            <FieldGroup class="">
                <Dialog>
                    <form>
                        <DialogTrigger as-child>
                            <Button> Add Children </Button>
                        </DialogTrigger>
                        <DialogContent class="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add/Remove Children</DialogTitle>
                            </DialogHeader>
                            <div class="grid gap-4">
                                <div class="grid gap-3">
                                    <Label for="name-1">Child's Name</Label>
                                    <Input id="childsName" name="childsName" />
                                </div>
                                <div class="grid gap-3">
                                    <Label for="username-1">Child's Age</Label>
                                    <Input
                                        type="number"
                                        id="childsAge"
                                        name="childsAge"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose as-child>
                                    <Button variant="outline"> Cancel </Button>
                                </DialogClose>
                                <Button type="submit"> Save </Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
                <div class="w-sm">
                    <div
                        class="grid grid-cols-2 grid-rows-1 border border-black"
                    >
                        <div class="bg-blue-600 text-white">First Name</div>
                        <div class="bg-blue-600 text-white">Age</div>
                        <div>Mary</div>
                        <div>5</div>
                    </div>
                </div>
                <div class="w-6xl">
                    <div class="flex justify-center gap-5">
                        <Button type="submit"> Save </Button>
                        <Button type="button"> Cancel </Button>
                    </div>
                </div>
            </FieldGroup>
        </CardContent>
    </Card>
</template>

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
</script>
<template>
    <Card>
        <CardHeader>
            <CardTitle>Jigsaw Hub Location Form</CardTitle>
            <CardDescription> Enter location name below</CardDescription>
        </CardHeader>
        <CardContent>
            <form action="/api/jigsaw-hub-location" method="POST">
                <FieldGroup>
                    <Field>
                        <FieldLabel for="location">
                            Name of location
                        </FieldLabel>
                        <Input
                            id="location"
                            type="text"
                            placeholder="Name of location"
                            name="location"
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

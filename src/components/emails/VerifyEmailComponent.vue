<script setup lang="ts">
import {
    Button,
    Head,
    Html,
    Text,
    Section,
    Heading,
    Body,
    Container,
    Preview,
    Link,
} from '@vue-email/components'

defineProps({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    resetUrl: { type: String, default: '' },
})
</script>

<template>
    <Html lang="en" dir="ltr">
        <Head />
        <Preview
            >Please verify your email address to complete your account
            setup</Preview
        >
        <Body class="bg-gray-100 py-[40px] font-sans">
            <Container
                class="mx-auto max-w-[600px] rounded-[8px] bg-white px-[32px] py-[40px]"
            >
                <Section class="mb-[32px] text-center">
                    <Heading class="m-0 text-[24px] font-bold text-gray-900">
                        Welcome! Please verify your email
                    </Heading>
                </Section>

                <Section class="mb-[32px]">
                    <Text
                        class="m-0 mb-[16px] text-[16px] leading-[24px] text-gray-700"
                    >
                        Hi there {{ name }},
                    </Text>
                    <Text
                        class="m-0 mb-[16px] text-[16px] leading-[24px] text-gray-700"
                    >
                        Thank you for signing up! We're excited to have you on
                        board. To complete your account setup and ensure the
                        security of your account, please verify your email
                        address by clicking the button below.
                    </Text>
                    <Text
                        class="m-0 mb-[24px] text-[16px] leading-[24px] text-gray-700"
                    >
                        Your email address:
                        <strong>{{ email }}</strong>
                    </Text>
                </Section>

                <Section class="mb-[32px] text-center">
                    <Button
                        v-bind:href="resetUrl"
                        class="box-border rounded-[8px] bg-blue-600 px-[32px] py-[16px] text-[16px] font-semibold text-white no-underline"
                    >
                        Verify Email Address
                    </Button>
                </Section>

                <Section class="mb-[32px]">
                    <Text
                        class="m-0 mb-[8px] text-[14px] leading-[20px] text-gray-600"
                    >
                        If the button above doesn't work, you can also copy and
                        paste this link into your browser:
                    </Text>
                    <Link
                        v-bind:href="resetUrl"
                        class="text-[14px] break-all text-blue-600"
                    >
                        {{ resetUrl }}
                    </Link>
                </Section>

                <Section
                    class="mb-[32px] rounded-[8px] border-[1px] border-solid border-gray-200 bg-gray-50 p-[16px]"
                >
                    <Text
                        class="m-0 mb-[8px] text-[14px] leading-[20px] text-gray-600"
                    >
                        <strong>Security Notice:</strong>
                    </Text>
                    <Text class="m-0 text-[14px] leading-[20px] text-gray-600">
                        This verification link will expire in 24 hours for your
                        security. If you didn't create an account with us,
                        please ignore this email or contact our support team.
                    </Text>
                </Section>

                <Section
                    class="border-t-[1px] border-solid border-gray-200 pt-[24px]"
                >
                    <Text
                        class="m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500"
                    >
                        Best regards,<br />
                        The Team
                    </Text>
                    <Text
                        class="m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500"
                    >
                        123 Business Street, Suite 100<br />
                        London, UK SW1A 1AA
                    </Text>
                    <Text class="m-0 text-[12px] leading-[16px] text-gray-500">
                        <Link href="#" class="text-gray-500 no-underline"
                            >Unsubscribe</Link
                        >
                        |
                        <Link
                            href="#"
                            class="ml-[4px] text-gray-500 no-underline"
                            >Privacy Policy</Link
                        >
                    </Text>
                    <Text
                        class="m-0 mt-[8px] text-[12px] leading-[16px] text-gray-500"
                    >
                        © 2026 Your Company Name. All rights reserved.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
</template>

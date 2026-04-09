<script setup lang="ts">
import {
    Button,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    CodeInline,
} from '@vue-email/components'

const props = defineProps({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    resetUrl: { type: String, default: '' },
})

console.log('resetUrl: ' + props.resetUrl)
</script>
<template>
    <Html lang="en" dir="ltr">
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <body class="bg-gray-100 py-[40px] font-sans">
            <Container
                class="mx-auto max-w-[600px] rounded-[8px] bg-white p-[40px] shadow-lg"
            >
                <Section class="mb-[32px] text-center">
                    <Heading class="m-0 text-[28px] font-bold text-gray-900">
                        Password Reset Request
                    </Heading>
                </Section>

                <Section class="mb-[32px]">
                    <Text
                        class="mb-[16px] text-[16px] leading-[24px] text-gray-700"
                    >
                        Hello {{ name }},
                    </Text>
                    <Text
                        class="mb-[16px] text-[16px] leading-[24px] text-gray-700"
                    >
                        We received a request to reset the password for your
                        account associated with
                        <strong>{{ email }}</strong
                        >.
                    </Text>
                    <Text
                        class="mb-[24px] text-[16px] leading-[24px] text-gray-700"
                    >
                        To reset your password, click the button below. This
                        link will expire in 24 hours for security reasons.
                    </Text>
                </Section>

                <Section class="mb-[32px] text-center">
                    <Button
                        v-bind:href="resetUrl"
                        class="box-border inline-block rounded-[8px] bg-blue-600 px-[32px] py-[16px] text-[16px] font-semibold text-white no-underline"
                    >
                        Reset Your Password
                    </Button>
                </Section>

                <Section class="mb-[32px]">
                    <Text
                        class="mb-[8px] text-[14px] leading-[20px] text-gray-600"
                    >
                        If the button above doesn't work, you can copy and paste
                        this link into your browser:
                    </Text>
                    <Link
                        v-bind:href="resetUrl"
                        class="text-[14px] break-all text-blue-600 underline"
                    >
                        {{ resetUrl }}
                    </Link>
                </Section>

                <Section
                    class="mb-[32px] border-l-[4px] border-yellow-400 bg-yellow-50 p-[16px]"
                >
                    <Text
                        class="m-0 text-[14px] leading-[20px] text-yellow-800"
                    >
                        <strong>Security Notice:</strong> If you didn't request
                        this password reset, please ignore this email. Your
                        password will remain unchanged.
                    </Text>
                </Section>

                <Section class="border-t border-gray-200 pt-[24px]">
                    <Text
                        class="m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500"
                    >
                        Best regards,<br />
                        The Security Team
                    </Text>
                    <Text
                        class="m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500"
                    >
                        123 Security Street, Safe City, SC 12345
                    </Text>
                    <Text class="m-0 text-[12px] leading-[16px] text-gray-500">
                        <Link href="#" class="text-gray-500 underline">
                            Unsubscribe
                        </Link>
                        | © 2026 Your Company Name. All rights reserved.
                    </Text>
                </Section>
            </Container>
        </body>
    </Html>
</template>

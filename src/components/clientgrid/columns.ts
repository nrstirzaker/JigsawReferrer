import type { Client } from '@/typings/client'
import type { ColumnDef } from '@tanstack/vue-table'
import DropdownAction from '@/components/clientgrid/DataTableDropDown.vue'
import { h } from 'vue'
import { ArrowUpDown, ChevronDown } from '@lucide/vue'
import { Button } from '@/components/ui/button'

// const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{
//   payment: {
//     id: string
//   }
//   onExpand: () => void
// }>()

export const columns: ColumnDef<Client>[] = [
    {
        accessorKey: 'id',
        header: () => h('div', { class: 'text-right' }, 'Client Id'),
        cell: ({ row }) => {
            const id: number = row.getValue('id')
            return h('div', { class: 'text-right font-medium' }, id)
        },
    },
    {
        accessorKey: 'fullName',
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: 'ghost',
                    class: 'text-right',
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === 'asc'),
                },
                () => [
                    'Full Name',
                    h(ArrowUpDown, { class: 'text-right font-medium' }),
                ]
            )
        },
        cell: ({ row }) => {
            const fullName: number = row.getValue('fullName')
            return h('div', { class: 'text-right font-medium' }, fullName)
        },
    },
    {
        accessorKey: 'phoneNumber',
        header: () => h('div', { class: 'text-right' }, 'Phone Number'),
        cell: ({ row }) => {
            const phoneNumber: number = row.getValue('phoneNumber')
            return h('div', { class: 'text-right font-medium' }, phoneNumber)
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const client: Client = row.original

            return h(
                'div',
                { class: 'relative' },
                h(DropdownAction, {
                    client,
                })
            )
        },
    },
]

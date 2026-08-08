<script setup lang="ts">
import type { Client } from '@/typings/client'
import { onMounted, ref } from 'vue'
import { columns } from './columns'
import DataTable from './DataTable.vue'
import { db } from '@/db/db.ts'
import { parentCarers } from '@/schema/registration-schema.ts'

const data = ref<Client[]>([])

async function getData()  {
    return db
        .select({
            id: parentCarers.parentCarerId,
            fullName: parentCarers.firstName,
            phoneNumber: parentCarers.phoneNumber
        })
        .from(parentCarers)
}

// async function getData(): Promise<Client[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             id: 1,
//             referralNumber: 8596,
//             fullName: 'Ellsworth Crehan',
//             phoneNumber: '+44 75832 48604',
//         },
//         {
//             id: 2,
//             referralNumber: 1709,
//             fullName: 'Zacaria Todorov',
//             phoneNumber: '+44 71700 06428',
//         },
//         {
//             id: 3,
//             referralNumber: 6570,
//             fullName: 'Fatiha Sarkar',
//             phoneNumber: '+44 72138 70292',
//         },
//         {
//             id: 4,
//             referralNumber: 5517,
//             fullName: 'Alys Cruce',
//             phoneNumber: '+44 70848 32142',
//         },
//         {
//             id: 5,
//             referralNumber: 4844,
//             fullName: 'Annslee Zartman',
//             phoneNumber: '+44 71041 67569',
//         },
//         {
//             id: 6,
//             referralNumber: 7127,
//             fullName: 'Tayten Conlon',
//             phoneNumber: '+44 70864 98491',
//         },
//         {
//             id: 7,
//             referralNumber: 3354,
//             fullName: 'Arvis Sabia',
//             phoneNumber: '+44 79117 52309',
//         },
//         {
//             id: 8,
//             referralNumber: 1927,
//             fullName: 'Chloe Summerhays',
//             phoneNumber: '+44 79696 54283',
//         },
//         {
//             id: 9,
//             referralNumber: 5790,
//             fullName: 'Ellianna Tuttle',
//             phoneNumber: '+44 78653 55371',
//         },
//         {
//             id: 10,
//             referralNumber: 4145,
//             fullName: 'Daeshaun Crapps',
//             phoneNumber: '+44 71161 86824',
//         },
//         {
//             id: 11,
//             referralNumber: 6850,
//             fullName: 'Jazzlin Vanderhoff',
//             phoneNumber: '+44 72012 99883',
//         },
//         {
//             id: 12,
//             referralNumber: 3858,
//             fullName: 'Solei Toner',
//             phoneNumber: '+44 70859 19714',
//         },
//         {
//             id: 13,
//             referralNumber: 9929,
//             fullName: 'Rick Barrineau',
//             phoneNumber: '+44 70864 34347',
//         },
//         {
//             id: 14,
//             referralNumber: 7693,
//             fullName: 'Shelia Alderton',
//             phoneNumber: '+44 79852 73569',
//         },
//         {
//             id: 15,
//             referralNumber: 2641,
//             fullName: 'Huzaifa Bezdek',
//             phoneNumber: '+44 77944 59996',
//         },
//         {
//             id: 16,
//             referralNumber: 5520,
//             fullName: 'Yamilet Reddell',
//             phoneNumber: '+44 71032 57903',
//         },
//         {
//             id: 17,
//             referralNumber: 3502,
//             fullName: 'Meshelle Nguyen',
//             phoneNumber: '+44 71857 70912',
//         },
//         {
//             id: 18,
//             referralNumber: 3574,
//             fullName: 'Carnell Staple',
//             phoneNumber: '+44 78748 89182',
//         },
//         {
//             id: 19,
//             referralNumber: 6367,
//             fullName: 'France Osorno',
//             phoneNumber: '+44 71898 20139',
//         },
//         {
//             id: 20,
//             referralNumber: 6572,
//             fullName: 'Calub Cocozza',
//             phoneNumber: '+44 70857 73445',
//         },
//         {
//             id: 21,
//             referralNumber: 5255,
//             fullName: 'Ngai Savio',
//             phoneNumber: '+44 72120 99050',
//         },
//         {
//             id: 22,
//             referralNumber: 9802,
//             fullName: 'Benji Offill',
//             phoneNumber: '+44 71984 46294',
//         },
//         {
//             id: 23,
//             referralNumber: 1221,
//             fullName: 'Britny Folger',
//             phoneNumber: '+44 79432 69830',
//         },
//         {
//             id: 24,
//             referralNumber: 9394,
//             fullName: 'Zidan Grine',
//             phoneNumber: '+44 72138 58034',
//         },
//         {
//             id: 25,
//             referralNumber: 1431,
//             fullName: 'Haruo Hark',
//             phoneNumber: '+44 74099 30000',
//         },
//         {
//             id: 26,
//             referralNumber: 5775,
//             fullName: 'Saron Donna',
//             phoneNumber: '+44 70862 87875',
//         },
//         {
//             id: 27,
//             referralNumber: 6712,
//             fullName: 'Mckaylee Dangerfield',
//             phoneNumber: '+44 70862 10021',
//         },
//         {
//             id: 28,
//             referralNumber: 3088,
//             fullName: 'Mitsuru Tower',
//             phoneNumber: '+44 71132 12714',
//         },
//         {
//             id: 29,
//             referralNumber: 3392,
//             fullName: 'Chanee Arden',
//             phoneNumber: '+44 71898 46146',
//         },
//         {
//             id: 30,
//             referralNumber: 4640,
//             fullName: 'Aarushi Hicklin',
//             phoneNumber: '+44 72138 69127',
//         },
//         {
//             id: 31,
//             referralNumber: 3812,
//             fullName: 'Asiel Kilian',
//             phoneNumber: '+44 72128 72102',
//         },
//         {
//             id: 32,
//             referralNumber: 9949,
//             fullName: 'Ephram Kiker',
//             phoneNumber: '+44 71842 80382',
//         },
//         {
//             id: 33,
//             referralNumber: 3108,
//             fullName: 'Raengel Richmond',
//             phoneNumber: '+44 70860 66450',
//         },
//         {
//             id: 34,
//             referralNumber: 5049,
//             fullName: 'Io Legarda',
//             phoneNumber: '+44 71153 34038',
//         },
//         {
//             id: 35,
//             referralNumber: 2279,
//             fullName: 'Evelia Duch',
//             phoneNumber: '+44 71161 34383',
//         },
//         {
//             id: 36,
//             referralNumber: 7684,
//             fullName: 'Wylodene Bruening',
//             phoneNumber: '+44 78037 42860',
//         },
//         {
//             id: 37,
//             referralNumber: 9569,
//             fullName: 'Crissie Shires',
//             phoneNumber: '+44 78997 71639',
//         },
//         {
//             id: 38,
//             referralNumber: 7760,
//             fullName: 'Anye Fogel',
//             phoneNumber: '+44 78654 75064',
//         },
//         {
//             id: 39,
//             referralNumber: 6737,
//             fullName: 'Aradhya Alvin',
//             phoneNumber: '+44 72138 64618',
//         },
//         {
//             id: 40,
//             referralNumber: 6598,
//             fullName: 'Eiza Kinsella',
//             phoneNumber: '+44 72129 18379',
//         },
//     ]
//}

onMounted(async () => {
    data.value = await getData()
})
</script>

<template>
    <div class="container mx-auto py-10">
        <DataTable :columns="columns" :data="data" />
    </div>
</template>

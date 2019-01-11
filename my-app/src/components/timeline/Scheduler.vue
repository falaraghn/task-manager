<template>
    <div>
        <h1>Project List</h1>

        <div
                v-if="isLoading"
                class="alert alert-info">Loading...
        </div>
        <div
                v-if="error"
                class="alert alert-danger">{{ error }}
        </div>
        <span>Size: {{items.length}}</span>

        <full-calendar :events="items"></full-calendar>
    </div>
</template>

<script>
    import FullCalendar from '../full-calendar/FullCalendar';
    import {mapActions, mapGetters} from 'vuex'
    import {items} from "../../store/modules/project/list/getters";

    export default {
        name: "scheduler",
        components: {FullCalendar},
        data() {
            return {
                items: [
                    {
                        id: 1,
                        name: 'event1',
                        startDate: '2019-01-09',
                        cssClass: 'blue',
                        completionLevel: 49,
                    },
                    {
                        id: 2,
                        name: 'event2',
                        startDate: '2019-01-08',
                        endDate: '2019-01-13',
                        completionLevel: 55
                    },
                    {
                        id: 3,
                        name: 'event3',
                        startDate: '2019-01-08',
                        endDate: '2019-01-13',
                        completionLevel: 99
                    }
                ]
            }
        },
        // computed: {
        //     ...mapGetters({
        //                    items: 'project/list/items',
        //                    error: 'project/list/error',
        //                    isLoading: 'project/list/isLoading',
        //                })
        // }
    }
</script>

<style scoped>

</style>
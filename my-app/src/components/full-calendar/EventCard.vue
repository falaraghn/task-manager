<template>
    <p class="event-item" :class="cssClasses" :style="{ backgroundColor : style}"
       @click="$emit('click', event, $event)">
        <slot-scope :event="event" v-if="showTitle">
            {{ event.name }} ({{event.completionLevel}}%)
        </slot-scope>
    </p>
</template>

<script>
    import moment from '../../../node_modules/moment/moment'
    export default {
        props: ['event', 'date', 'firstDay'],
        computed: {
            style() {
                if(this.event.completionLevel <=50) return 'orange';
                if(this.event.completionLevel >50 && this.event.completionLevel <=75) return 'limegreen';
                if(this.event.completionLevel >75 && this.event.completionLevel <=100) return 'skyblue';
                return 'red';
            },
            cssClasses () {
                /*let cssClasses = this.event.cssClass;
                if (!Array.isArray(cssClasses)) {
                    cssClasses = [cssClasses];
                } else {
                    cssClasses = Array.from(cssClasses);
                }*/
                let cssClasses = [];
                console.log(this.start, this.date)
                if (this.start.isSame(this.date, 'day')) {
                    cssClasses.push('is-start');
                }
                if (this.end.isSame(this.date, 'day')) {
                    cssClasses.push('is-end');
                }
                if (! this.event.isShow) {
                    cssClasses.push('is-opacity');
                }
                return cssClasses.join(' ');
            },
            showTitle() {
                return (this.date.day() == this.firstDay || this.start.isSame(this.date, 'day'));
            },
            start () {
                return moment(this.event.startDate);
            },
            end () {
                return moment(this.event.endDate);
            }
        }
    }
</script>

<style>
</style>
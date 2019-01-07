<template>
    <form @submit.prevent="handleSubmit(item)">
        <div class="form-group">
            <label
                    for="project_name"
                    class="form-control-label">name</label>
            <input
                    id="project_name"
                    v-model="item.name"
                    :class="['form-control', isInvalid('name') ? 'is-invalid' : '']"
                    type="text"
                    placeholder="The title of the project."
                    @input="handleUpdateField('name', $event.target.value)">
            <div
                    v-if="isInvalid('name')"
                    class="invalid-feedback">{{ violations.name }}
            </div>
        </div>
        <div class="form-group">
            <label
                    for="project_completionLevel"
                    class="form-control-label">completionLevel</label>
            <input
                    id="project_completionLevel"
                    v-model.number="item.completionLevel"
                    :class="['form-control', isInvalid('completionLevel') ? 'is-invalid' : '']"
                    type="number"
                    placeholder="The description of this book."
                    @input="handleUpdateField('completionLevel', $event.target.value)">
            <div
                    v-if="isInvalid('completionLevel')"
                    class="invalid-feedback">{{ violations.completionLevel }}
            </div>
        </div>
        <!--<div class="form-group">
            <label
                    for="project_startDate"
                    class="form-control-label">startDate</label>
            <input
                    id="project_startDate"
                    v-model="item.startDate"
                    :class="['form-control', isInvalid('startDate') ? 'is-invalid' : '']"
                    type="dateTime"
                    placeholder="The start date of the project."
                    @input="handleUpdateField('startDate', $event.target.value)">
            <div
                    v-if="isInvalid('startDate')"
                    class="invalid-feedback">{{ violations.startDate }}
            </div>
        </div>-->
        <div class="form-group">
            <label
                    class="form-control-label">startDate</label>
            <datepicker id="project_endDate"
                        v-model="item.startDate"
                        :class="['form-control', isInvalid('startDate') ? 'is-invalid' : '']"
                        :style="{}"
                        placeholder="The end date of the project."
                        @input="handleUpdateField('startDate', $event.target.value)">

            </datepicker>
            <div
                    v-if="isInvalid('endDate')"
                    class="invalid-feedback">{{ violations.endDate }}
            </div>
        </div>

        <!--<div class="form-group">-->
            <!--<label-->
                    <!--for="project_endDate"-->
                    <!--class="form-control-label">endDate</label>-->
            <!--<input-->
                    <!--id="project_endDate"-->
                    <!--v-model="item.endDate"-->
                    <!--:class="['form-control', isInvalid('endDate') ? 'is-invalid' : '']"-->
                    <!--type="dateTime"-->
                    <!--placeholder="The end date of the project."-->
                    <!--@input="handleUpdateField('endDate', $event.target.value)">-->

        <!--</div>-->

        <div class="form-group">
            <label
                    class="form-control-label">endDate</label>
            <datepicker id="project_endDate"
                        v-model="item.endDate"
                        :class="['form-control', isInvalid('endDate') ? 'is-invalid' : '']"
                        :style="{}"
                        placeholder="The end date of the project."
                        @input="handleUpdateField('endDate', $event.target.value)">

            </datepicker>
            <div
                    v-if="isInvalid('endDate')"
                    class="invalid-feedback">{{ violations.endDate }}
            </div>
        </div>

        <button
                type="submit"
                class="btn btn-success">Submit
        </button>
    </form>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {
        props: {
            handleSubmit: {
                type: Function,
                required: true
            },

            handleUpdateField: {
                type: Function,
                required: true
            },

            values: {
                type: Object,
                required: true
            },

            errors: {
                type: Object,
                default: () => {
                }
            },

            initialValues: {
                type: Object,
                default: () => {
                }
            }
        },

        computed: {
            // eslint-disable-next-line
            item() {
                return this.initialValues || this.values
            },

            violations() {
                return this.errors || {}
            }
        },

        methods: {
            isInvalid(key) {
                return Object.keys(this.violations).length > 0 && this.violations[key]
            }
        },

        components: {
            Datepicker
        }
    }
</script>
<style>
    input {
        border: none;
    }
</style>

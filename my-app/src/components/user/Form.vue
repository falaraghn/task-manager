<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="user_username"
        class="form-control-label">username</label>
      <input
        id="user_username"
        v-model="item.username"
        :class="['form-control', isInvalid('username') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('username', $event.target.value)">
      <div
        v-if="isInvalid('username')"
        class="invalid-feedback">{{ violations.username }}</div>
    </div>
    <div v-if="!item.id" class="form-group">
      <label
        for="user_password"
        class="form-control-label">password</label>
      <input
        id="user_password"
        v-model="item.password"
        :class="['form-control', isInvalid('password') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('password', $event.target.value)">
      <div
        v-if="isInvalid('password')"
        class="invalid-feedback">{{ violations.password }}</div>
    </div>
    <div class="form-group">
      <label
        for="user_roles"
        class="form-control-label">roles</label>
      <input
        id="user_roles"
        v-model="item.roles"
        :class="['form-control', isInvalid('roles') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('roles', $event.target.value)">
      <div
        v-if="isInvalid('roles')"
        class="invalid-feedback">{{ violations.roles }}</div>
    </div>
    <div class="form-group">
      <label
        for="user_isActive"
        class="form-control-label">isActive</label>
      <input
        id="user_isActive"
        v-model="item.isActive"
        :class="['form-control', isInvalid('isActive') ? 'is-invalid' : '']"
        type="checkbox"
        placeholder=""
        @input="handleUpdateField('isActive', $event.target.value)">
      <div
        v-if="isInvalid('isActive')"
        class="invalid-feedback">{{ violations.isActive }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
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
      default: () => {}
    },

    initialValues: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    // eslint-disable-next-line
    item () {
      return this.initialValues || this.values
    },

    violations () {
      return this.errors || {}
    }
  },

  methods: {
    isInvalid (key) {
      return Object.keys(this.violations).length > 0 && this.violations[key]
    }
  }
}
</script>

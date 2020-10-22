<template>
  <div class="form-field">
    <input type="text" required name="text" :id="id" />
    <label class="form-field-label" :for="id">{{ label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>
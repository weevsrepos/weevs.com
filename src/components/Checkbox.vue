<template>
  <label class="checkbox"
         :class="{ 'form-field-invalid': !!errorMessage, success: meta.valid }"
  >
    <input type="checkbox" @change="handleChange(value)"/>
    <span></span>
    <slot />
  </label>
</template>

<script>
import { useField } from "vee-validate";
import Icon from "@/components/Icon";

export default {
  name: 'Checkbox',
  components: {Icon},
  props: {
    modelValue: {
      type: null,
    },
    name: String,
    value: {
      type: String,
    },
  },
  setup({ name, value }) {
    const {
      checked,
      handleChange,
      errorMessage,
      meta,
    } = useField(name, undefined, {
      type: "checkbox",
      valueProp: value,
    });

    return {
      checked,
      handleChange,
      errorMessage,
      meta,
    };
  },
};
</script>

<style scoped>

</style>
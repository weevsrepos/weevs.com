<template>
  <div class="form-field"
       :class="{ 'form-field-invalid': !!errorMessage, success: meta.valid }"
       :data-validationerror="errorMessage"
  >
    <component :is="type === 'textarea' ? type : 'input'"
               :type="type"
               required
               :name="name"
               rows="5"
               :id="id"
               :value="inputValue"
               @input="handleChange"
               @blur="handleBlur"
    />
    <label class="form-field-label" :for="id">{{ label}}</label>
    <div class="d-flex align-center mt-8 caption-s--light" v-if="errorMessage">
      <Icon href="error" size="14" fill="#F53C37" />
      <span class="mt-3 ml-9">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import Icon from "@/components/Icon";
export default {
  components: {Icon},
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
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
}
</script>
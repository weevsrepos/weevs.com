<template>
  <div class="form-field"
       :class="{ 'form-field-invalid': !!errorMessage, success: meta.valid }"
       :data-validationerror="errorMessage"
  >
    <template v-if="textarea">
      <textarea required
                rows="5"
                :name="name"
                :id="id"
                :value="inputValue"
                @input="handleChange"
                @blur="handleBlur"
                :data-value="inputValue"
      />
    </template>
    <template v-else>
      <input :type="type"
             required
             :name="name"
             :id="id"
             :value="inputValue"
             @input="handleChange"
             @blur="handleBlur"
             :data-value="inputValue"
      />
    </template>
    <label class="form-field-label" :for="id">
      {{ label }}<span class="required" v-if="required">*</span>
    </label>
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
    textarea: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      default: false
    }
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
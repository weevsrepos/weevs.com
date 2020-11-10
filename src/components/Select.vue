<template>
  <div class="form-field custom-select"
       :class="{ 'form-field-invalid': !!errorMessage, success: meta.valid }"
  >
    <input type="text" required
           :name="name"
           id="field-dropDown"
           :value="inputValue"
           @input="handleChange"
           @blur="handleBlur"
    />
    <Icon href="chevron-down" size="12" class="angle-down"/>
    <label class="form-field-label" for="field-dropDown">
      {{ label }}<span class="required" v-if="required">*</span>
    </label>
    <ul class="dropdown">
      <template v-if="grouped">
        <template v-for="group in Object.keys(options)">
          <li class="title">{{ group }}</li>
          <li v-for="item in options[group]" @click='inputValue = item.value'>{{ item.label }}</li>
        </template>
      </template>
      <template v-else>
        <li v-for="item in options" @click='inputValue = item.value'>{{ item.label }}</li>
      </template>
    </ul>

    <div class="d-flex align-center mt-8 caption-s--light" v-if="errorMessage">
      <Icon href="error" size="14" fill="#F53C37" />
      <span class="mt-3 ml-9">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import {useField} from "vee-validate";
export default {
  components: {Icon},
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    grouped: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: "",
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

    const selected = null;

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
      selected
    };
  },
}
</script>

<style scoped>

</style>
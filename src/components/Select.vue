<template>
  <div class="form-field custom-select"
       :class="{ 'form-field-invalid': !!errorMessage, success: meta.valid }"
  >
    <input type="text" required
           :name="name"
           :id="`field-${name}`"
           :value="inputValue"
           @input="handleChange"
           @blur="state.focused = false; handleBlur()"
           @keydown="keyDown"
           @keyup="keyUp"
           @focus="focus"
           ref="input"
           class="dropdown-input"
           :data-value="inputValue"
    />
    <label class="form-field-label" :for="`field-${name}`">
      {{ label }}<span class="required" v-if="required">*</span>
    </label>
    <ul class="dropdown" >
      <template v-if="grouped">
        <template v-for="(group, key) in Object.keys(state.items)" :key="key">
          <li class="title">{{ group }}</li>
          <li v-for="item in state.items[group]" @mousedown='inputValue = item.value'>{{ item.label }}</li>
        </template>
      </template>
      <template v-else>
        <li v-for="(item, key) in state.items" :key="key" @mousedown='inputValue = item.value'>{{ item.label }}</li>
      </template>
    </ul>

    <div class="d-flex align-center mt-8 caption-s--light" v-if="errorMessage">
      <Icon href="error" size="14" fill="#F53C37" />
      <span class="mt-3 ml-9">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
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
      type: [Array, Object],
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

    // reactive state
    const state = reactive({
      items: props.grouped ? {} : [],
      focused: false
    })

    const originalOptions = props.grouped ? Object.assign({}, props.options) : props.options;

    const search = function (keyword) {
      keyword = keyword.toLowerCase();

      if(!keyword) { state.items = originalOptions; return;}

      if(!props.grouped) {
        state.items = props.options.filter((v) => v.label.toLowerCase().includes(keyword));
      } else {
        let finalObj = {};

        Object.keys(props.options).map((item) => {
          let options = props.options[item].filter((v) => v.label.toLowerCase().includes(keyword));

          if(options.length) {
            finalObj[item] = options;
          }
        })

        state.items = finalObj;
      }
    }

    const keyDown = function (e) {

      search(e.target.value);
    }

    const keyUp = function (e) {
      search(e.target.value);
    }

    const focus = function (e) {
      state.focused = true;
      state.items = originalOptions;
    }

    return {
      focus,
      keyUp,
      state,
      keyDown,
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
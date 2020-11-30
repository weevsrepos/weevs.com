<template>
  <Form :validation-schema="schema" @submit="handleSubmit" autocomplete="off" ref="form">
    <section class="form--controls">
      <div class="d-flex flex-mobile-column">
        <Input label="Full name"
               type="text"
               name="full_name"
               class="flex-1 mr-24 mr-mobile-0" id="full-name"
               v-model="formData.full_name"
               required
        />

        <Select label="Country"
                :options="countries"
                class="flex-1"
                required
                name="country"
                v-model="formData.country"
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Input label="Email"
               type="email"
               name="email"
               class="flex-1 mr-24 mr-mobile-0"
               id="email"
               v-model="formData.email"
               required
        />
        <Input label="Phone"
               type="text"
               name="phone"
               class="flex-1"
               id="phone"
               v-model="formData.phone"
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Input label="Company"
               type="text"
               name="company"
               class="flex-1 mr-24 mr-mobile-0"
               id="company"
               v-model="formData.company"
               required
        />
        <Input label="Job title"
               type="text"
               name="job_title"
               class="flex-1"
               id="job_title"
               v-model="formData.job_title"
               required
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Input label="What can we do for you?"
               :textarea="true"
               name="message"
               class="flex-1"
               id="message"
               v-model="formData.message"
               required
        />
      </div>

      <div class="d-flex justify-content-between mt-40 flex-mobile-column">
        <Checkbox class="mr-85 mb-mobile-24" name="policy" value="1" v-model="formData.policy">
          <p class="caption-s--regular text--privacy">
            I agree to share my information with you and understand it will be used as described in
            <router-link :to="{ name: 'Privacy' }">Privacy Policy</router-link>
          </p>
        </Checkbox>
        <Button text="Send message" size="lg"
                :loading="loading"
                class="flex-shrink-0 d-flex justify-content-center self-align-start self-mobile-align-stretch"/>
      </div>
    </section>
  </Form>
</template>

<script>
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import * as Yup from "yup";
import Input from "@/components/Input";
import Select from "@/components/Select";
import country from "country-list-js";
import {Form} from 'vee-validate';

export default {
  components: {Select, Input, Button, Checkbox, Form},
  data() {
    return {
      formData: {
        full_name: null,
        phone: null,
        email: null,
        company: null,
        job_title: null,
        message: null,
        country: null,
        policy: null
      },
      schema: {
        full_name: Yup.string().required().label('Full Name'),
        phone: Yup.string().label("Phone"),
        email: Yup.string().email().required().label('E-mail'),
        company: Yup.string().required().label('Company'),
        job_title: Yup.string().required().label("Job title"),
        message: Yup.string().required().label("Message"),
        country: Yup.string().required().label("Country"),
        policy: Yup.string().required().label("Terms & Policy"),
      },
      loading: false
    }
  },
  methods: {
    handleSubmit(values) {
      this.loading = true;
      let form = new FormData();
      Object.keys(values).map((item) => {
        form.append(item, values[item]);
      })

      this.axios.post("/gsheet-hire-us.php", form).then((res) => {
        this.$emit("success");
      }).catch((err) => {
        const res = err.response;

        if(res.status === 422) {
          const errors = res.data;

          Object.keys(errors).map((i) => {
            this.$refs.form.setErrors({
              [i]: errors[i]
            });
          })
        } else {
          alert("Oops, something wrong with server please try again later.");
        }
      }).finally(() => {
        this.loading = false;
      })
    },
  },
  computed: {
    countries: function () {
      let names = Object.values(country.all).map((item) => {
        return {label: item.name, value: item.name}
      });
      names = names.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;

      });
      return names;
    }
  },
  watch: {
    "formData.country": function (newVal) {
      console.log(newVal);
    }
  }
}
</script>

<style scoped>

</style>
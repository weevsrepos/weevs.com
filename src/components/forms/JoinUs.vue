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

        <Input label="Email"
               type="email"
               name="email"
               class="flex-1" id="email"
               v-model="formData.email"
               required
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Select label="Country"
                :options="countries"
                class="flex-1 mr-24 mr-mobile-0"
                required
                name="country"
                v-model="formData.country"
        />

        <Select label="Area of expertise"
                :options="expertises"
                :grouped="true"
                class="flex-1"
                required
                name="expertise"
                v-model="formData.expertise"
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Input label="Linkedin"
               type="text"
               name="linkedin"
               class="flex-1"
               id="linkedin"
               v-model="formData.linkedin"
               required
        />
      </div>

      <div class="d-flex mt-5 flex-mobile-column">
        <Input label="Tell us what drives you"
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
import country from 'country-list-js';
import Input from "@/components/Input";
import {Form} from 'vee-validate';
import * as Yup from "yup";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";

export default {
  components: {Select, Button, Checkbox, Input, Form},
  data() {
    return {
      expertises: {
        plan: [
          {label: 'Tech Strategic Steering', value: 'Tech Strategic Steering'},
          {label: 'Agile and Scrum', value: 'Agile and Scrum'},
          {label: 'Product Management', value: 'Product Management'},
          {label: 'Delivery Management', value: 'Delivery Management'},
        ],
        build: [
          {label: 'Software Engineering', value: 'Software Engineering'},
          {label: 'Solutions Architecture', value: 'Solutions Architecture'},
          {label: 'AI & Machine Learning', value: 'AI & Machine Learning'},
          {label: 'Security', value: 'Security'},
          {label: 'UX & UI', value: 'UX & UI'},
          {label: 'Test Automation', value: 'Test Automation'},
        ],
        run: [
          {label: 'Cloud Architecture', value: 'Cloud Architecture'},
          {label: 'DevOps Engineers', value: 'DevOps Engineers'},
          {label: 'Socially Responsible Investment', value: 'Socially Responsible Investment'},
          {label: 'Site Reliability Engineering', value: 'Site Reliability Engineering'},
        ]
      },
      formData: {
        full_name: null,
        email: null,
        message: null,
        country: null,
        expertise: null,
        linkedin: null,
        policy: null
      },
      schema: {
        full_name: Yup.string().required().label('Full Name'),
        email: Yup.string().email().required().label('E-mail'),
        message: Yup.string().required().label("Message"),
        country: Yup.string().required().label("Country"),
        expertise: Yup.string().required().label("Area of expertise"),
        linkedin: Yup.string().required().matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'The Linkedin is not valid url'
        ).label("Linkedin"),
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

      this.axios.post("/join-us", form).then((res) => {
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
    }
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
  }
}
</script>

<style scoped>

</style>
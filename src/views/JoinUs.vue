<template>
  <div id="hire-join-sections">
    <section class="container">
      <h1 class="heading-xl--light">
        Get to know each other <br>
        and start making value now!
      </h1>

      <section class="items">
        <section class="left--side">
          <div class="headline d-flex">
            <router-link :to="{ name: 'HireUs'}">
              <h2 class="heading-xs--regular mr-48">Hire us</h2>
            </router-link>
            <router-link :to="{ name: 'JoinUs'}">
              <h2 class="heading-xs--regular active">Join us</h2>
            </router-link>
          </div>

          <Form :validation-schema="schema">
            <section class="form--controls">
              <div class="d-flex">
                <Input label="Full name"
                       type="text"
                       name="full_name"
                       class="flex-1 mr-24" id="full-name"
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

              <div class="d-flex mt-5">
                <Select label="Country"
                        :options="countries"
                        class="flex-1 mr-24"
                        required
                        name="country"
                        v-model="formData.country"
                />

                <Select label="Are of expertise"
                        :options="expertises"
                        :grouped="true"
                        class="flex-1"
                        required
                        name="expertise"
                        v-model="formData.expertise"
                />
              </div>

              <div class="d-flex mt-5">
                <Input label="Linkedin"
                       type="text"
                       name="linkedin"
                       class="flex-1"
                       id="linkedin"
                       v-model="formData.linkedin"
                       required
                />
              </div>

              <div class="d-flex mt-5">
                <Input label="Tell us what drives you"
                       :textarea="true"
                       name="message"
                       class="flex-1"
                       id="message"
                       v-model="formData.message"
                       required
                />
              </div>

              <div class="d-flex justify-content-between mt-40">
                <Checkbox class="mr-85">
                  <p class="caption-s--regular text--privacy">
                    I agree to share my information with you and understand it will be used as <br /> described in
                    <router-link :to="{ name: 'Privacy' }">Privacy Policy</router-link>
                  </p>
                </Checkbox>
                <Button text="Send message" size="lg" class="flex-shrink-0" />
              </div>
            </section>
          </Form>
        </section>

        <section class="right--side">
          <div>
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">our location</p>
            <h2 class="heading-s--regular line-height-42">2 Sembawang Walk 757616, Singapore</h2>
          </div>

          <div class="mt-40">
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">Give us a call</p>
            <a href="tel:+65 675 3900 1" class="heading-s--regular line-height-42">
              +65 675 3900 1
            </a>
          </div>

          <div class="mt-40">
            <p class="overline-s--medium text-uppercase mb-16 text-stone-gray mb-mobile-16 letter-spacing-08em">Email US</p>
            <a href="mailto:contact@weevs.com" class="heading-s--regular line-height-42">
              contact@weevs.com
            </a>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import country from 'country-list-js';
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import { Field, Form, configure } from 'vee-validate';
import * as Yup from "yup";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";

configure({
  validateOnChange: true,
  validateOnBlur: true,
});

export default {
  components: {Select, Button, Checkbox, Dropdown, Input, Field, Form},
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
        ]
      },
      formData: {
        full_name : null,
        email: null,
        message: null,
        country: null,
        expertise: null,
        linkedin: null
      },
      schema: {
        full_name: Yup.string().required().label('Full Name'),
        email: Yup.string().email().required().label('E-mail'),
        message: Yup.string().required().label("Message"),
        country: Yup.string().required().label("Country"),
        expertise: Yup.string().required().label("Area of expertise"),
        linkedin: Yup.string().required().label("Linkedin"),
      }
    }
  },
  computed: {
    countries: function () {
      let names = Object.values(country.all).map((item) => { return {label: item.name, value: item.name}});
      names = names.sort((a, b) => {
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;

      });
      return names;
    }
  }
}
</script>

<style scoped>

</style>
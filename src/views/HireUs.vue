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
              <h2 class="heading-xs--regular mr-48 active">Hire us</h2>
            </router-link>
            <router-link :to="{ name: 'HireUs'}">
              <h2 class="heading-xs--regular">Join us</h2>
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
                />
              </div>

              <div class="d-flex mt-5">
                <Input label="Email"
                       type="email"
                       name="email"
                       class="flex-1 mr-24"
                       id="email"
                       v-model="formData.email"
                />
                <Input label="Phone"
                       type="text"
                       name="phone"
                       class="flex-1"
                       id="phone"
                       v-model="formData.phone"
                />
              </div>

              <div class="d-flex mt-5">
                <Input label="Company"
                       type="text"
                       name="company"
                       class="flex-1 mr-24"
                       id="company"
                       v-model="formData.company"
                />
                <Input label="Job title"
                       type="text"
                       name="job_title"
                       class="flex-1"
                       id="job_title"
                       v-model="formData.job_title"
                />
              </div>

              <div class="d-flex mt-5">
                <Input label="What can we do for you?"
                       type="textarea"
                       name="message"
                       class="flex-1"
                       id="message"
                       v-model="formData.message"
                />
              </div>

              <div class="d-flex justify-content-end mt-40">
                <Button text="Send message" size="lg" />
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
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import { Field, Form, configure } from 'vee-validate';
import * as Yup from "yup";
import Button from "@/components/Button";

configure({
  validateOnChange: true,
  validateOnBlur: true,
});

export default {
  components: {Button, Dropdown, Input, Field, Form},
  data() {
    return {
      countries: [
        { label: 'a', value: 'c' }
      ],
      formData: {
        full_name : null,
        phone: null,
        email: null,
        company: null,
        job_title: null,
        message: null
      },
      schema: {
        full_name: Yup.string().required().label('Full Name'),
        phone: Yup.string().required().label("Phone"),
        email: Yup.string().email().required().label('E-mail'),
        company: Yup.string().required().label('Company'),
        job_title: Yup.string().required().label("Job title"),
        message: Yup.string().required().label("Message"),
      }
    }
  }
}
</script>

<style scoped>

</style>
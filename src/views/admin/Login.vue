<template>
  <div id="admin-login">
    <section class="login--box">
      <h1 class="heading-s--medium heading-m--medium mb-8 text-center">
        Login Admin Dashboard
      </h1>

      <Form :validation-schema="schema"
            @submit="handleSubmit"
            autocomplete="off"
            ref="form"
            class="d-flex flex-column"
      >
        <Input label="Email"
               type="email"
               name="email"
               class="flex-1 mr-mobile-0"
               id="email"
               v-model="formData.email"
               required />

        <Input label="Password"
               type="password"
               name="password"
               class="flex-1 mr-mobile-0"
               id="password"
               v-model="formData.password"
               required />

        <section class="justify-content-end d-flex mt-16">
          <Button text="Send message" size="sm"
                  :loading="loading" />
        </section>
      </form>
    </section>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import {Form} from 'vee-validate';
import * as Yup from "yup";

export default {
  components: {
    Button,
    Input,
    Form
  },
  data() {
    return {
      schema: {
        email: Yup.string().email().required().label('E-mail'),
        password: Yup.string().required().min(6).label('Password'),
      },
      loading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit(values) {
      this.loading = true;
      let form = new FormData();
      Object.keys(values).map((item) => {
        form.append(item, values[item]);
      })

      this.axios.post("/hire-us", form).then((res) => {
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
  }
}
</script>

<style scoped>

</style>

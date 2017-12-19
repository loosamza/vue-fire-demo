<template>
  <v-layout column>
    <v-flex xs12 class="text-cs-center" mt-5>
      <h3>Sing Up</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <form @submit.prevent="userSignUp">
        <v-layout column>
          <v-flex>
            <v-text-field name="email" label="Email" id="email" type="email" v-model="email" required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field name="password" label="password" id="password" type="password" v-model="password" required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field name="confirmPassword" label="Confirm  Password" id="confirmPassword" v-model="passwordConfirm" type="password"
              :rules="[comparePasswords]" required></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center" mt-5>
            <v-btn primary type="submit">Sing Up</v-btn primary>
          </v-flex>
        </v-layout>

      </form>
    </v-flex>

  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    },
    computed: {
      comparePasswords() {
        return this.password === this.passwordConfirm ? true :
          'Password and confirm password don\'t match'
      }
    },
    methods: {
      userSignUp() {
        if (this.comparePasswords !== true) {
          return
        }
        this.$store.dispatch('userSignUp', {
          email: this.email,
          password: this.password
        })
      }
    },
    watch: {
      error(value) {
        if (value) {
          this.alert = true
        }
      },
      alert(value) {
        if (!value) {
          this.$store.dispatch('setError', null)
        }
      }
    }
  }

</script>

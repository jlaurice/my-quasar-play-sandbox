<template>
  <q-page padding>
    <div>
      <h5>Hello World</h5>
      <br>
      <!-- This entire example highlights usage of several Vue directives, including v-model, v-if/else, and v-show -->
      <!-- Additionally, Notice here how we are using our own custom directive named v-autofocus -->
      <!-- This custom directive adds functionality to an element by automatically giving focus to the element when the page is first loaded -->
      <!-- See the Vue instance at bottom for the contained directives object for where this custom directive is defined -->
      <!-- Additonally, let's say we don't want this message to be longer than 22 chars and if it is add a css class to make it look like an error happened-->
      <!-- Using the "attribute-binding" v-bind directive, we can conditionally add styles to our elements based on what is happening in our data object -->
      <!-- The v-bind directive syntax is v-bind: followed by the html attribute that we want to bind to followed by the value to conditionally set and then the condition itself-->
      <!-- Alternatively, use the shorthand syntax, which replaces v-bind:class= with :class= -->
      <!-- We could have also instead binded directly to the style attribute plus using a computed property to generate the style ...-->
      <!-- As such, We could have done: :style="errorStyle" whereby errorStyle is a computed property -->
      <br>
      <input
        v-model="message"
        @keyup="onInputKeyup"
        v-autofocus
        v-bind:class="{ 'error' : message.length > 22 }"
      >
      <button @click="clearMessage">Clear</button>

      <div>{{ message.length }}</div>
      <br>
      <br>
      <button @click="toggleMessage">Show / Hide Message</button>
      <br>
      <br>

      <br>
      <br>Message Container #1 :
      <p class="border-grey" v-show="showMessage">{{ message }}</p>

      <br>Message Container #2 :
      <p class="border-grey" v-show="message.length">{{ message }}</p>

      <!-- This way removes element from the DOM all together whereby the v-show only hides it -->
      <br>Message Container #3 :
      <p v-if="message.length" class="border-grey">{{ message }}</p>
      <h6 v-else>No message entered</h6>

      <hr>

      <!-- This is an example of a computed property usage -->
      <!-- This computed property will only be called when the messge property changes-->
      Uppercase message :
      <p>{{ messageUppercase }}</p>

      <!-- This is an example of a filter usage -->
      <!-- In addition to computed property, filters are another way to manipulate data before displaying to the page -->
      <!-- However, filters are more limited since we do not have access to all other values of the Vue instance from within the filter function as we do do from within a computed property function -->
      <!-- A good example usage of a filter is when we want to reformat a date from a particular format to another format -->
      Lowercase message :
      <p>{{ message | messageLowercase }}</p>
    </div>
  </q-page>
</template>


<script>
export default {
  data() {
    return {
      message: 'I love Vue.js!',
      showMessage: true
    }
  },
  computed: {
    messageUppercase() {
      console.log('messageUppercase was called')
      return this.message.toUpperCase()
    },
    errorStyle() {
      if (this.message.length > 22) {
        return {
          color: 'red',
          background: 'pink'
        }
      }
    }
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage
    },
    clearMessage() {
      this.message = ''
    },
    onInputKeyup(evt) {
      console.log(evt)
      // Clear the message if escape key was pressed
      if (evt.keyCode == 27) this.clearMessage()
      // Alert the message if enter key was pressed
      if (evt.keyCode == 13) this.alertMessage()
    },
    alertMessage() {
      alert(this.message)
    }
  },
  filters: {
    messageLowercase(value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      // This gets invoked when the element gets loaded on the page ...
      inserted(el) {
        console.log('input inserted')
        el.focus()
      }
    }
  }
}
</script>

<style>
p {
  color: red;
}
.border-grey {
  border: 1px solid grey;
}
input,
button {
  font-size: 18px;
}
.error {
  color: red;
  background: pink;
}
</style>

new Vue({
  el: "#app",
  created: function () {
    document.getElementById("content").innerHTML = marked(this.input);
  },
  data: {
    input: "# Mark-It-Down",
  },
  methods: {
    marked: function () {
      this.input = document.getElementById("input").value;
      document.getElementById("content").innerHTML = marked(this.input);
    },
    resetAll: function () {
      this.input = "# Mark-It-Down";
      document.getElementById("content").innerHTML = marked(this.input);
    },
  },
});

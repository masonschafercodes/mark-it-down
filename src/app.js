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
    copyAll: function() {
      var copyText = document.getElementById('input');
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Copied the Markdown!");
    }
  },
});

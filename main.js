const { createApp } = Vue;

createApp({
  data() {
    return {
      p: 0,
      f: 0,
      n: 0,
      i: 0,
      vp: 0,
      vf: 0,
    };
  },
  methods: {
    newVp() {
      let f = +this.f;
      let n = +this.n;
      let i = +this.i;
      let vp = f / (1 + i) ** n;
      this.vp = vp;
    },
    newVf() {
      let p = +this.p;
      let n = +this.n;
      let i = +this.i;
      let vf = p * (1 + i) ** n;
      this.vf = vf;
    },
  },
}).mount("#app");

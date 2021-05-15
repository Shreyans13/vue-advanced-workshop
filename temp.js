import Vue from "./node_modules/vue/dist/vue.js";

const RulesPlugin = {
	install(Vue) {
		Vue.mixin({
			created() {
				if (this.$options.rules) {
					console.log("option found");
				} else {
					console.log("option not found");
				}
			},
		});
	},
	// Implement this!
};

Vue.use(RulesPlugin);

// -----------
const vm = new Vue({
	data: { foo: 10 },
	rules: {
		foo: {
			validate: (value) => value > 1,
			message: "foo must be greater than one",
		},
	},
});

vm.foo = 0; // should log: "foo must be greater than one"

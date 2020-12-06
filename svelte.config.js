import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
    preprocess: sveltePreprocess(),
    compilerOptions: {
      // enable run-time checks when not in production
      dev: !production
    }
}
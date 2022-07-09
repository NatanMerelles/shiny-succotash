module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom', 'prettier', 'plugin:@typescript-eslint/recommended'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}

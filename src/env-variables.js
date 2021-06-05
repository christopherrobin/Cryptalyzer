/*
  In short this should be stored on the back end and served to the
  client side using some sort of obfuscation technique. Seeing as this
  is mostly a side project at this time, and that Coinbase specifically
  ties use of the key to a specific domain, this will do for development purposes
  https://www.mokkapps.de/blog/how-to-use-environment-variables-to-store-secrets-in-aws-amplify-backend
*/
export const ENV_CONFIG = {
  // Coinbase API Secret
  coinbaseSecret: 'f6d6e442eea4960d0b236644ac474d0e9e7cecc3d984b31268eca1ba9696b027'
}

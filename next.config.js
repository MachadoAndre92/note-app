/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: "mongodb+srv://machado92:fqBbpwQKeJTM8d@cluster0.nnr4vst.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig

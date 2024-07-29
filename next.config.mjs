/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    domains: ['i.ibb.co'],
  },
};

export default nextConfig;

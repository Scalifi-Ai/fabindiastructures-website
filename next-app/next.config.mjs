/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [process.env.NEXT_PUBLIC_STRAPI_BROWSER_URL.includes('cms-internal') ? process.env.NEXT_PUBLIC_STRAPI_BROWSER_URL.split("//")[1] : process.env.DOMAIN]
    },
};

export default nextConfig;

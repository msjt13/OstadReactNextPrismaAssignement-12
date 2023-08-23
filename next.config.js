const process = require("next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss");
/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ['roar.media', 'flowbite.s3.amazonaws.com'],
    },
    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig

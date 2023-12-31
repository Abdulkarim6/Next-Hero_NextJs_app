/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //use for 3rd party web photo showing my web
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
            },
        ],
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: isServer ? 'file-loader' : 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static', 
            outputPath: `${isServer ? '../' : ''}static/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.istockphoto.com'], // Thêm các hostname vào đây
  },

  //   async headers() {
  //     return [
  //       {
  //         source: '/api/:path*',
  //         headers: [
  //           {
  //             key: 'Access-Control-Allow-Origin',
  //             value: 'http://localhost:3000',
  //           },
  //           {
  //             key: 'Access-Control-Allow-Methods',
  //             value: 'GET, POST, PUT, DELETE, OPTIONS',
  //           },
  //           {
  //             key: 'Access-Control-Allow-Headers',
  //             value: 'Content-Type, Authorization',
  //           },
  //         ],
  //       },
  //     ];
  //   },
};

export default nextConfig;

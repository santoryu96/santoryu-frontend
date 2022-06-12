/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) =>{
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD

    const env = {
        IS_DEV: isDev,
        IS_PROD: isProd,

        // Owned URLs
        BASE_URL: (() => {
            if (isDev) return 'http://127.0.0.1:5555'
            if (isProd) return 'https://santoryu.spartacodingclub.kr'
            return 'BASE_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
        API_BASE_URL: (() => {
            if (isDev) return 'http://127.0.0.1:9000'
            if (isProd) return 'https://api.me.spartacodingclub.kr'
            return 'API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
    }
    return {
        env
    }
}


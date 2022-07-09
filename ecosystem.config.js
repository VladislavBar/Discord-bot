'use strict'

module.exports = {
  apps: [
    {
      name: 'Discord-Bot',
      script: './index.js',
      instances: 1,
      min_uptime: 4000,
      restart_delay: 2000,
      max_restarts: 10,
      merge_logs: true,
      watch: false,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}

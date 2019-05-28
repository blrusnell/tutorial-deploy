module.exports = {
    apps: [{
      name: 'tutorial-2',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-19-61-244.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/fec-reviews.pem',
        ref: 'origin/master',
        repo: 'git@github.com:blrusnell/tutorial-deploy.git',
        path: '/home/ubuntu/tutorial-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
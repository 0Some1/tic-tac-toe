pipeline {
  agent any
  tools {
    nodejs 'node'
  }
  stage ('pre-build'){
    steps {
      sh 'npm install'
    }
  }
  stage ('build'){
    steps {
      sh 'npm run build'
    }
  }
  stage ('test'){
    steps {
      sh 'npm run test'
    }
  }
  stage ('deploy'){
    steps {
      sh 'vercel -t ${vercel_token} -c'
    }
  }
  
  
}

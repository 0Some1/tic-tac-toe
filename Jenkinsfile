pipeline{
    agent any
    tools {
        nodejs 'node'
    }
    stages{
        stage('pre-build'){
            steps{
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }
        stage('build'){
            steps{
                sh 'rm -rf build'
                sh 'npm run build'
            }
        }
        stage('test'){
            steps{
                sh 'npm run test'
            }
        }
        stage('deploy'){
            steps{
                sh 'vercel -t ${vercel_token} -c'
            }
        }

    }

}

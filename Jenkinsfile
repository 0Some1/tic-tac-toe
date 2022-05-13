pipeline{
    agent any
    tools {
        nodejs 'node'
    }
    stages{
        stage('pre-build'){
            steps{
                sh 'npm install'
                sh 'node -v'
            }
        }
        stage('build'){
            steps{
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

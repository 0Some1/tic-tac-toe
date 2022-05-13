pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('pre-build') {
            steps {
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                sh 'pm2 serve build 3000 --spa '
            }
        }
    }
}

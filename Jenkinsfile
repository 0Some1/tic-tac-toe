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
        stage('run') {
            steps {
                sh 'npm start'
            }
        }
    }
}

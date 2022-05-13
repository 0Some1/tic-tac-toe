pipeline {
    agent any
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
    }
    post {
        always {
            sh 'heroku git:remote -a tic-tac-toe25'
            sh 'git remote add heroku git@heroku.com:tic-tac-toe25.git'
            sh 'git push heroku master'
        }
    }
}

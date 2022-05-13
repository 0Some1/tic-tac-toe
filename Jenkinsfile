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
                sh 'heroku login -i'
                echo 'Lucky_Luciano000@protonmail.com'
                echo 'fuck the system @55'
                sh 'heroku git:remote -a tic-tac-toe25'
                sh 'git push heroku master' 
            }
        }
    }
}

pipeline {
    agent any

    tools {nodejs "node"}
    stages {
        stage('pre-build') {
              steps { 
                sh 'npm install'
                echo "build is done!" 
            
        }
        stage('build') {
            steps { 
                sh 'npm run build'
                echo "build is done!" 
            }
        }
        stage('test') { 
            steps {
                 sh "npm run test"
                 echo "test is done!" 
            }
        }
        
        
    }
    post {
        always {
            sh 'git remote add heroku git@htic-tac-toe25:myApp.git'
            sh 'git push heroku master'
            
        }
        failure {
            echo "something has failed!" 
        }
    }
 
}

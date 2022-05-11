pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                echo "build is done!!!!!!" 
            }
        }
        stage('test') { 
            steps {
                 echo "test is done!!!!!" 
            }
        }
        
        
    }
    post {
        always {
            sh 'npm start'
        }
        failure {
            echo  "depoly has failed!" 
        }
    
    }
}

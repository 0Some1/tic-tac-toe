pipeline {
    agent any

    stages {
        stage('pre-build') {
              steps { 
                sh 'npm install'
                echo "build is done!!!!!!" 
            }
        }
        stage('build') {
            steps { 
                sh 'npm build'
                echo "build is done!!!!!!" 
            }
        }
        stage('test') { 
            steps {
                 echo "test is done!!!!!" 
            }
        }
        
        
    }
 
}

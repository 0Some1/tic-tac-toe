pipeline {
    agent any
    stages {
        stage('pre-build') {
             sh "nmp install"
        }
        stage('build') {
            steps { 
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
 
}

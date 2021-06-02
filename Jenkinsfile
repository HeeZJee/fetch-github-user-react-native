pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm i expo-cli'
                sh 'npm install' 
                sh 'expo build:android -t apk'
                sh 'expo build:status'
            
        }
    }
}
}

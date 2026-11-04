pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh '''
                    test -f index.html
                    test -f style.css
                    test -f script.js
                    test -f Dockerfile
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    grep -q '<h1>' index.html
                    grep -q '<p' index.html
                    grep -q '<form' index.html
                    grep -q 'color:navy' style.css
                    grep -q 'text-transform:uppercase' style.css
                    grep -q 'text-decoration:underline' style.css
                    grep -q 'color:gray' style.css
                    grep -q 'function handleSubmit' script.js
                    grep -q 'preventDefault' script.js
                '''
            }
        }

        stage('Package') {
            steps {
                sh 'tar -czf devops-app.tar.gz index.html style.css script.js Dockerfile'
                archiveArtifacts artifacts: 'devops-app.tar.gz', fingerprint: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build and packaging successful'
        }
        failure {
            echo 'Build or packaging failed'
        }
    }
}
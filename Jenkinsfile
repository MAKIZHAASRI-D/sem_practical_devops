pipeline{
    agent any
    stages{
        stage(checkout){
            steps{
                echo "checking out the code from git"
                 checkout scm
            }
        }
        stage(build){
            steps{
                echo "building the code"
                sh '''
                test -f index.html
                test -f style.css
                test -f script.js
                '''
            }
        }
        stage(test){
        steps{
        echo "testing the code"
        sh '''
        grep -q "<h1>" index.html
        grep -q "<p>" index.html
        grep -q "color:navy" style.css
        grep -q "text-transform:uppercase" style.css
        grep -q "text-decoration:underline" style.css
        grep -q "color:gray" style.css
        grep -q "console.log" script.js
        '''
        }
        }
        stage(package){
            steps{
                echo "packaging the code"
                sh '''
                tar -cvf code.tar index.html style.css script.js
                '''
            }
        }
        stage(deploy){
            steps{
                echo "deploying the code"
                sh '''
                mkdir -p /var/www/html
                cp code.tar /var/www/html/
                cd /var/www/html/
                tar -xvf code.tar
                '''
            }
        }

    }
    post{
        always{
            echo "Cleaning up the workspace"
            cleanWs()
        }
        success{
            echo "Build and deployment successful"
        }
        failure{
            echo "Build or deployment failed"
        }
    }
}
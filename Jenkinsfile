pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                //bat 'npx playwright install'
                bat 'npx playwright install chromium'

            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        success {
            echo '✅ Playwright tests PASSED'
        }
        failure {
            echo '❌ Playwright tests FAILED'
        }
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}

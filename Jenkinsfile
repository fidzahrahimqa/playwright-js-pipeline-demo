pipeline {
    agent any

    environment {
        // Cache Playwright browsers inside Jenkins workspace
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\.playwright"
    }

    stages {

        stage('Install Dependencies (cached)') {
            steps {
                bat '''
                if not exist node_modules (
                  echo Installing npm dependencies...
                  npm install
                ) else (
                  echo node_modules cache found, skipping npm install
                )
                '''
            }
        }

        stage('Install Playwright Chromium (cached)') {
            steps {
                bat '''
                if not exist "%PLAYWRIGHT_BROWSERS_PATH%\\chromium-*" (
                  echo Installing Chromium browser...
                  npx playwright install chromium
                ) else (
                  echo Chromium already cached, skipping install
                )
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
        success {
            echo '✅ Playwright tests PASSED (Chromium)'
        }
        failure {
            echo '❌ Playwright tests FAILED (Chromium)'
        }
    }
}

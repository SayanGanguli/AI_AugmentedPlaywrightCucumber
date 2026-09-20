pipeline {
    agent any
    
    tools {
        // Aligns with your exact Jenkins Global Tool Configuration name
        nodejs 'Node JS 20' 
    }
    
    environment {
        // App runtime url to clear the BASE_URL missing error
        BASE_URL        = 'https://orangehrmlive.com'
        
        // Secure token parameters mapped from your Jenkins credentials panel
        GITHUB_CREDS    = credentials('8d4960dc-0cee-4013-8fd5-2aabedb5f62e')
        OPENAI_API_KEY  = credentials('OPENAI_API_KEY')
    }
    
    stages {
        stage('Clean & Checkout') {
            steps {
                cleanWs()
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node dependencies...'
                bat 'npm install'
                bat 'npx playwright install'
            }
        }
        
        stage('Execute BDD Tests') {
            steps {
                echo 'Running Playwright Cucumber Tests...'
                bat 'npm run test'
            }
        }
    }
    
    post {
        always {
            echo 'Archiving Test Artifacts and Reports...'
            archiveArtifacts artifacts: 'reports/cucumber/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'screenshots/**/*', allowEmptyArchive: true

            cucumber fileIncludePattern: '**/*.json', 
                     jsonReportDirectory: 'reports/cucumber'
        }
        
        failure {
            echo '❌ Automation test suite failed. Preparing branch for GitHub Copilot Healer Agent...'
            
            script {
                try {
                    String patchBranch = "ai-heal-patch-${BUILD_NUMBER}"
                    
                    // 1. Automatically create a clean branch isolate for Copilot to patch
                    bat "git checkout -b ${patchBranch}"
                    
                    // 2. We mock the heal indicator so the pipeline completes tracking cleanly
                    echo "Constructing local patch checkpoint..."
                    bat "echo Framework error state captured for build #${BUILD_NUMBER} > error-manifest.log"
                    
                    // 3. Push the diagnostic checkpoint to GitHub securely
                    echo "Pushing diagnostic branch ${patchBranch} to remote repository..."
                    bat """
                        git config user.name "Jenkins AI Agent"
                        git config user.email "jenkins-agent@yourdomain.com"
                        git remote set-url origin https://%GITHUB_CREDS_USR%:%GITHUB_CREDS_PSW%@://github.com
                        git add .
                        git commit -m "chore(ai-heal): test failure checkpoint for build #${BUILD_NUMBER}"
                        git push origin ${patchBranch}
                    """
                    
                    echo "🎉 Ready! Checkout the branch '${patchBranch}' locally and activate your healer.md agent prompt in GitHub Copilot."
                } catch (Exception e) {
                    echo "⚠️ Branch checkpoint sequence encountered a runtime error: ${e.getMessage()}"
                }
            }
        }
    }
}

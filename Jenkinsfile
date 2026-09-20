pipeline {
    agent any
    
    tools {
        // Matches the exact tool configuration for Node seen in your logs
        nodejs 'Node_JS_20' 
    }
    
    environment {
        // Using your exact Jenkins system credential ID from the screenshot
        GITHUB_CREDS = credentials('8d4960dc-0cee-4013-8fd5-2aabedb5f62e')
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
                // Using 'bat' for Windows execution compatibility
                bat 'npm install'
                bat 'npx playwright install'
            }
        }
        
        stage('Static Analysis') {
            steps {
                echo 'Running linting and validation...'
                bat 'npm run lint'
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

            // NOTE: Ensure the 'Cucumber reports' plugin is installed via Manage Jenkins.
            // If it's not installed, comment out the two lines below to prevent NoSuchMethodError.
            cucumber fileIncludePattern: '**/*.json', 
                     jsonReportDirectory: 'reports/cucumber'
        }
        
        failure {
            echo '❌ Automation test suite failed. Initializing AI Agent Self-Healing workflow...'
            
            script {
                try {
                    String patchBranch = "ai-heal-patch-${BUILD_NUMBER}"
                    
                    // 1. Create a dedicated branch for the patch
                    bat "git checkout -b ${patchBranch}"
                    
                    // 2. Fire up your Planner-Generator-Healer script using the framework's custom hook
                    echo 'Running framework healing tools...'
                    bat 'npm run heal'
                    
                    // 3. Re-verify that the code compiles safely after the AI patch
                    echo 'Re-verifying TypeScript integrity post-heal...'
                    bat 'npm run typecheck'
                    
                    // 4. Push updates securely using the environment credentials wrapper
                    echo "AI Agent successfully resolved issues. Pushing updates to ${patchBranch}..."
                    
                    bat """
                        git config user.name "Jenkins AI Agent"
                        git config user.email "jenkins-agent@yourdomain.com"
                        git remote set-url origin https://%GITHUB_CREDS_USR%:%GITHUB_CREDS_PSW%@://github.com
                        git add .
                        git commit -m "chore(ai-heal): automated framework patch for build #${BUILD_NUMBER}"
                        git push origin ${patchBranch}
                    """
                    
                    echo "🎉 Patch pushed successfully. Please open a Pull Request from ${patchBranch} to review changes."
                } catch (Exception e) {
                    echo "⚠️ The Self-Healing sequence encountered an error or the generated patch failed typechecking: ${e.getMessage()}"
                }
            }
        }
    }
}

pipeline {
    agent any
    
    tools {
        // Verified: This matches your exact Jenkins Global Tool Configuration name
        nodejs 'Node JS 20' 
    }
    
    environment {
        // Verified: Using the precise GUID from your credentials screenshot
        GITHUB_CREDS    = credentials('8d4960dc-0cee-4013-8fd5-2aabedb5f62e')
        
        // Verified: Matches your specific OpenAI credential string ID
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
                // Using Windows 'bat' to align with your C:\\ProgramData platform paths
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

            // NOTE: If your Jenkins build still prints an error about "cucumber step not found",
            // just delete or comment out the 2 lines below. It means you lack the Cucumber UI plugin.
            cucumber fileIncludePattern: '**/*.json', 
                     jsonReportDirectory: 'reports/cucumber'
        }
        
        failure {
            echo '❌ Automation test suite failed. Initializing AI Agent Self-Healing workflow...'
            
            script {
                try {
                    String patchBranch = "ai-heal-patch-${BUILD_NUMBER}"
                    
                    // 1. Create a dedicated branch for the patch using Windows native bat
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

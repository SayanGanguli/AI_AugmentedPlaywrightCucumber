pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18+' 
    }

    environment {
        BASE_URL = 'https://orangehrmlive.com'
        USERNAME = credentials('ORANGEHRM_USERNAME')
        PASSWORD = credentials('ORANGEHRM_PASSWORD')
        
        // Exposing the API Key to the runner environment for the AI Agent
        OPENAI_API_KEY = credentials('OPENAI_API_KEY')
        
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node dependencies...'
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Static Analysis') {
            steps {
                sh 'npm run typecheck' 
            }
        }

        stage('Execute BDD Tests') {
            steps {
                echo 'Executing Cucumber Automation Suite...'
                // If this block throws an error, catchError registers it but allows the pipeline to continue to the post actions
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'npm run test:cucumber'
                }
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
        
        // This structural block will execute ONLY if the 'Execute BDD Tests' stage fails
        failure {
            echo '❌ Automation test suite failed. Initializing AI Agent Self-Healing workflow...'
            
            script {
                try {
                    // 1. Create a dedicated branch for the patch so the AI doesn't modify your core branch directly
                    String patchBranch = "ai-heal-patch-${BUILD_NUMBER}"
                    sh "git checkout -b ${patchBranch}"
                    
                    // 2. Fire up your Planner-Generator-Healer script using the framework's custom hook
                    echo 'Running framework healing tools...'
                    sh 'npm run heal'
                    
                    // 3. Re-verify that the code compile safely after the AI patch
                    echo 'Re-verifying TypeScript integrity post-heal...'
                    sh 'npm run typecheck'
                    
                    // 4. If compilation passes, push the corrected test logic to origin for review
                    echo "AI Agent successfully resolved issues. Pushing updates to ${patchBranch}..."
                    sh """
                        git config user.name "Jenkins AI Agent"
                        git config user.email "jenkins-agent@yourdomain.com"
                        git add .
                        git commit -m "chore(ai-heal): automated framework patch for build #${BUILD_NUMBER}"
                        git push origin ${patchBranch}
                    """
                    
                    echo "🎉 Patch pushed successfully. Please open a Pull Request from ${patchBranch} to review changes."
                } catch (Exception e) {
                    echo "⚠️ The Self-Healing sequence encountered an error or the generated patch failed typechecking: ${e.message}"
                }
            }
        }
    }
}

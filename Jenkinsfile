pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-pg"
        CONTAINER_NAME = "portfolio-container"
        PORT = "8081"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker Image..."
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Deploying to production..."
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    
                    # Run the container, injecting the .env file from the Jenkins workspace
                    docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${PORT}:${PORT} \
                    --env-file ${WORKSPACE}/.env \
                    --restart unless-stopped \
                    ${IMAGE_NAME}:latest
                """
            }
        }
    }
}
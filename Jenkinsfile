pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        yarn
      }
    }

    stage('Test') {
      steps {
        yarn 'app.test.js'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploying...'
        echo 'ready to take over the world!'
      }
    }
  }
}
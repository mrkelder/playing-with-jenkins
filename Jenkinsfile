pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        npm 'i'
      }
    }

    stage('Test') {
      steps {
        node './app.test.js'
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
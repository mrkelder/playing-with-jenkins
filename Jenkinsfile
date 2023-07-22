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
        node '-v'
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

  post {
    // Clean after build
    always {
      cleanWs(cleanWhenNotBuilt: false,
              deleteDirs: true,
              disableDeferredWipeout: true,
              notFailBuild: true,
              patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                          [pattern: '.propsfile', type: 'EXCLUDE']])
    }
  }
}
node {
    def app

    stage('Clone repository') {
        checkout([
         $class: 'GitSCM',
         branches: [[name: '*/master']],
         doGenerateSubmoduleConfigurations: false,
         extensions: [[$class: 'CleanCheckout']],
         userRemoteConfigs: [[url: 'https://github.com/thanhnluu/swe645-student-survey']]
    ])
    }

    stage('Build image') {
        app = docker.build("thanhnluu/swe645:student-survey-app")
    }

    stage('Push image') {
        docker.withRegistry('', 'fe79f61e-a6cd-4503-a0c6-a35df2064184') {
            app.push()
        }
    }
}
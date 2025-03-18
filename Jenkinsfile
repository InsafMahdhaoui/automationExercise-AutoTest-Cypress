pipeline{

	agent any       //tout d'abord il faut toujours specifier "l'agent" (any: quelque soit l'agent il va faire les actions suivant)

	parameters{
		string(name: "SPEC", defaultValue: "cypress/e2e/features/**/**", description: "Enter the scripts path that you wanna execute")
        choice(name:"BROWSER", choices: ["chrome", "edge", "firefox"], description: "choice the browser where yu want to execute your script" ) //les browser que je veux avoir
	
	}
    options{
       ansiColor("xterm") //ajouter des couleurs aux logs (consol outputs)
    }

    stages{
        stage("Building")
        {
            steps{
            echo "Building the application"
            }
        }
        stage("Testing")
        {
            steps{
                //"bat" utiliser pour acceder au cmd du windows, en cas de SE "Linux" on utilise "sh" pour "shell"
                bat "npm i"  // installer les dependencies
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}" //executer les scripts et specifier le navigateur et le spec
            }
        }
        stage("Deploying")
        {
            steps{
                echo "Deploy the application " 
                }
        }
    }
    //publish a html report

    post{ //"post build actions" les actions que vont etre lieu toujours apres la stage "Testing" 
        always 
        {
         publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/mochawesome', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }

    }

}


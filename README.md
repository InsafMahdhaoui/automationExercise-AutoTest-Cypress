# 🛠️ Cypress BDD Automation - AutomationExercise

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen?logo=cypress) 
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-32CD32?logo=cucumber)
![Mochawesome](https://img.shields.io/badge/Mochawesome-Reports-blue?logo=mocha)

## 🚀 Project Overview
This is an **automation testing framework** for the [AutomationExercise](https://automationexercise.com/) website.  
It is built using **Cypress** and follows the **BDD (Behavior-Driven Development) approach** with **Cucumber**.  
Test execution reports are generated using **Mochawesome**.

---

## 📂 Project Structure
📦 Cypress-AutomationExercise 

├── 📂 cypress │ 

├── 📂 e2e 

    ├── 📂 features # Feature files (BDD scenarios) │

    ├── 📂 stepDef # Step definitions for Cucumber │ 

├── 📂 support # Custom commands & utilities │ 

├── 📂 fixtures # Test data (JSON) │ 

├── 📂 reports # Mochawesome reports │

    ├── 📂 videos # Recorded videos for every test Case
    ├── 📂 screenshots # Captured screenshots (on failure) 
    ├── 📜 mochawesome.json # MochaWesome json report (JSON)
    ├── 📜 index.html # Mochawesome HTML Report (HTML)
    
├── 📜 cypress.config.js # Cypress configuration 

├── 📜 package.json # Project dependencies 

├── 📜 README.md # Project documentation 
└── 📜 .gitignore # Ignore unnecessary files

2️⃣ **Install dependencies**
$npm install

3️⃣ **Run tests with Cucumber & Mochawesome**

Run all tests in headless mode:
$npx cypress run

Run tests in interactive mode:
$npx cypress open

Run a specific feature file:
$npx cypress run --spec cypress/e2e/<filename>.feature

4️⃣ **Generate and View Test Report**
"scripts": {

"merge-reports": "mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome/output.json",

"generate-report": "marge cypress/reports/mochawesome/output.json --reportDir cypress/reports/mochawesome --inline",
    
"test:report": "npx cypress run && npm run merge-reports && npm run generate-report"
  }

  📜 **Test Reporting with Mochawesome**

After test execution, reports are stored in the cypress/reports/ mochwesome

Open index.html in a browser to view results.

👥 Contributors

 **Insaf MAHDHAOUI** – [GitHub](https://github.com/InsafMahdhaoui/)


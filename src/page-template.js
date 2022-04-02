// Generates the profile stub for the team manager using information from inquirer as a parameter
const generateTeamManager = (managerInfo) => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">${managerInfo.getRole()}</h2>
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${
                  managerInfo.name
              }</h3>
              <p>ID: ${managerInfo.id}</p>
              <p>Email: <a href="mailto:${managerInfo.email}">${managerInfo.email}</a></p>
              <p>Office #: ${managerInfo.officeNumber}</p>
            </div>
        </div>
      </section>
    `;
};

// Generates the profile stub(s) for engineers using information from inquirer as a parameter
const generateEngineer = (engineersArray) => {
    if (!engineersArray) {
        return "";
    }
    
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Engineer</h2>
        <div class="flex-row justify-space-between">
        ${engineersArray
            .map(({ name, id, email, github }) => {
                return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <p>ID: ${id}</p>
              <p>Email: <a href="mailto:${email}">${email}</a></p>
              <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
            </div>
          `;
            })
            .join('')}
        </div>
      </section>
    `;
};

// Generates the profile stub(s) for interns using information from inquirer as a parameter
const generateIntern = (internsArray) => {
    if (!internsArray) {
        return "";
    }

    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Intern</h2>
        <div class="flex-row justify-space-between">
        ${internsArray
            .map(({ name, id, email, school }) => {
                return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <p>ID: ${id}</p>
              <p>Email: <a href="mailto:${email}">${email}</a></p>
              <p>School: ${school}</p>
            </div>
          `;
            })
            .join('')}
        </div>
      </section>
    `;
};

// Export function to generate entire page
module.exports = (manager, engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Santa's Team Builder</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Santa's Team Builder</h1>
        </div>
      </header>
      <main class="container my-5">
        ${generateTeamManager(manager)}
        ${generateEngineer(engineers)}
        ${generateIntern(interns)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2022 by cheesecakeassassin</h3>
      </footer>
    </body>
    </html>
    `;
};

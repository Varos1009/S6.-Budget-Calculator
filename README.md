# S6.Budget Calculator Web Application (React+Vite)

## Descripción

This project implements a React-based web application to simplify web budget calculations. The app allows users to interactively choose services, customize options, and calculate total costs dynamically. The goal is to provide an intuitive interface while showcasing React concepts like state management, routing, and component reuse.

The project is structured to ensure maintainability, reusability, and scalability, adhering to modern best practices for React development.

## Features

### Level 1

1. Basic Service Selection:

- Three checkboxes represent services:
   - SEO Campaign (€300)
   - Advertising Campaign (€400)
   - Website Development (€500)
- The total price dynamically updates based on selected services.

2. Customizing Website Development:

- Users can specify the number of pages and languages for website development.
- Cost formula:
  (NumberofPages+NumberofLanguages)×€30

3. Increment/Decrement Buttons:

- Intuitive buttons allow users to increase or decrease the number of pages and languages.

4. Welcome Screen:

- Includes a welcome message explaining the app's purpose and functionality.
- Navigation buttons connect the welcome screen and calculator screen using React Router.

5. Multiple Budget Requests:

- Inputs for budget name and client name.
- Allows users to generate and save multiple budgets.

### Level 2

6. Help Modal:

- Provides detailed explanations of input fields for pages and languages.
- Triggered by an information icon using Bootstrap or Tailwind modals.

7. Sorting Options:

- Alphabetical sorting of budgets.
- Sorting by creation date.
- Reset sorting to the original order.

8. Budget Search:

- A search bar filters budgets by name.

9. Annual Discount Option:

- A toggle to apply a 20% discount for annual budgets.
- Updates the interface to reflect the discounted price dynamically.

### Level 3

10. Shareable Budget URL:

- URL parameters reflect the selected budget options.
- Sharing the URL allows others to view the exact budget configuration.
  Example:
  http://localhost:4200/home?WebPage=true&CampaingSeo=true&pages=1&lang=2

##  Used Technologies

- React: Librería para la creación de interfaces de usuario.
- JavaScript (ES6): Para la lógica de componentes y navegación.
- CSS3: Para estilos, maquetación y animaciones.
- Bootstrap (opcional): Para componentes interactivos como popovers.



## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Varos1009/S6.-Budget-Calculator.git
   cd S6.-Budget-Calculator

2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm run dev


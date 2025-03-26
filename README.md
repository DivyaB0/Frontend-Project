# Frontend Project – Resollect  

## 📌 Introduction  
This project is a **Next.js-based frontend application** designed as part of the **Frontend Take-Home Assignment**. It leverages **server-side rendering (SSR)** and **static site generation (SSG)** for optimized performance.  

### ✔️ Features Implemented  
- ✅ Designed components using **React and Next.js**  
- ✅ Maintained the code in a **GitHub repository**  
- ✅ Ensured **mobile responsiveness**  
- ✅ Implemented **file upload functionality** within a filter section  
- ✅ **Deployed the project on Vercel**  

This application is **fully deployable**, and test cases have been included to ensure **reliability and functionality**.  

---

## 📌 Tech Stack and Libraries  

### **Tech Stack**  
The application is built using the following technologies:  

- **[Next.js](https://nextjs.org/)** – A React framework for **server-rendered (SSR)** and **statically generated (SSG)** web applications.  
- **[React](https://react.dev/)** – A JavaScript library for building dynamic and interactive user interfaces.  
- **CSS Modules** – Enables **modular and reusable styling** of components, ensuring styles are scoped locally to prevent conflicts.  

### **Libraries Used**  
- **[Material-UI (MUI)](https://mui.com/)** – A UI framework with pre-built components and themes.  
  - **Utilized Components:**  
    - `DataGrid` – For handling tabular data (pagination, sorting, filtering).  
    - `TextField` – For form input fields.  
    - `Button` – For interactive user actions.  
    - Icons: `FilterListIcon`, `VisibilityIcon` from `@mui/icons-material`.  
- **CSS Modules** – Component-specific styling, keeping styles **encapsulated** and **preventing global conflicts**.  

---

## 📌 Project Structure  

```sh
Frontend-Project/
│── 📂 packages/               # Shared components/modules
│   ├── 📂 CommonTable/        # Common table component
│   ├── 📂 Dashboard/          # Dashboard-related components
│   ├── 📂 Layout/             # Layout components
│   ├── 📂 Notifications/      # Notifications system
│   ├── 📂 Portfolio/          # Portfolio components
│   ├── 📂 _app/               # Application-wide configurations
│── 📂 pages/                  # Next.js pages
│   ├── 📂 Dashboard/          # Dashboard page
│   ├── 📂 Notifications/      # Notifications page
│   ├── 📂 Portfolio/          # Portfolio page
│   ├── 📂 api/                # API routes
│── 📂 public/                 # Static assets (images, icons, etc.)
│── 📂 styles/                 # Global and component-specific styles
│── 📄 .gitignore              # Git ignore file
│── 📄 README.md               # Documentation file
│── 📄 jsconfig.json           # JavaScript configuration
│── 📄 next.config.mjs         # Next.js configuration
│── 📄 package-lock.json       # Dependency lock file
│── 📄 package.json            # Project dependencies and scripts
```
### Features

### 1. Upload Functionality

The upload functionality is integrated within the `CommonTable` component, as specified in the assignment.

- **Trigger:**  
  The upload process starts when the user clicks on the "More Filters" button inside the `CommonTable`.

- **Process:**  
  Clicking the button opens a dialog box, allowing the user to:
  - Enter document name, document type, and remarks.
  - Select a file from their device.
  - Submit the form.

- **After Sumbit:**  
  - The file remains uploaded unless the page is refreshed or a new file is uploaded.
  - A preview of the uploaded file is available.

### 2. Mobile Responsiveness

The application is designed to be responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.

Responsive design is achieved through:
- **CSS Media Queries:** Applied within CSS modules to adjust layouts based on screen size.
- **Flexible Layouts:** Uses Flexbox and CSS Grid to create adaptive designs.
- **Sidebar and Tables:** Adjust their width and scrolling behavior for smaller screens.

*Note:* While the design is responsive at a certain level, further improvements may be needed for a better user experience on smaller devices.

## 📌 Getting Started

### 1. Installation & Setup

Clone the repository:

```bash
git clone https://github.com/DivyaB0/Frontend-Project.git
cd Frontend-Project
```
### 2. Install the dependencies:
```bash
Copy
Edit
npm install
# or
yarn install
```
### 3. Run the Development Server
Start the development server:
```bash
Copy
Edit
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 in your browser to see the project running.

### 4. File Editing
Edit the page by modifying pages/index.js. The page auto-updates as you make changes.

### 5. API Routes
API routes are available at: http://localhost:3000/api/hello
You can modify these endpoints in pages/api/hello.js.

## 📌 Deployment
The application has been deployed on Vercel, a platform optimized for frontend projects.

## ✔️ Deployment Steps:
1. Push the code to GitHub.
2. Link the repository to Vercel.
3. Vercel automatically builds and deploys the app on each push to the main branch.

### 📌 Live Project Link:
🔗 [Frontend Project on Vercel](https://frontend-project-brown-two.vercel.app/Dashboard)

### 📌 Submission Details
- **GitHub Repository:** [Frontend-Project](https://github.com/DivyaB0/Frontend-Project)
- **Live Deployed Link:** [Frontend Project on Vercel](https://frontend-project-brown-two.vercel.app/Dashboard)
- **Documentation:** This document explains the code structure, components used, and tech stack utilized.

## 📌 Learn More About Next.js
To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) – Your feedback and contributions are welcome!

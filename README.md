
# React Supplier SPA

Single Page Application (SPA) for managing suppliers and displaying screening results. Calls both backend APIs directly:
- .NET Core Supplier API (CRUD)
- FastAPI Screening API (screening)

---
![crudpic](https://github.com/user-attachments/assets/2d755906-1303-41f7-8858-688bf586ca90)

## Prerequisites

- Node.js 18+ (npm)
- Optional: Yarn
- Recommended: .env support for configuring backend endpoints

---

## Setup

1. Clone the repository:

    git clone https://github.com/username/react-suppliers.git
    cd react-suppliers

2. Install dependencies:

    npm install
    # or
    # yarn install

3. Configure backend URLs:

    REACT_APP_SUPPLIER_API_URL=http://localhost:5000
    REACT_APP_SCREENING_API_URL=http://127.0.0.1:8000

---

## Run (development)

    npm start
    # or
    # yarn start

- App runs at: http://localhost:3000

---

## Features / Flow

- CRUD UI for suppliers (create / view / edit / delete)
- Supplier list table (ordered by last edit date)
- Actions: View, Edit, Delete, Screen
- Screening modal:
  - Select 1–3 sources
  - Queries FastAPI API
  - Shows results in a table

---

## Build for production

    npm run build
    # or
    # yarn build

- Produces `build/` folder for deployment

---

## Project Structure

/react-suppliers
    public/
    src/
        components/
        pages/
        services/       # API calls to both backends
        App.js
        index.js
    package.json
    .env
    README.md


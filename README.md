# 📊 Inventory Web Dashboard (Front-End)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern, responsive, and high-performance Web Dashboard built to interface with the **[Go Cloud Inventory API](https://github.com/zonafirmann/go-cloud-inventory)**. Designed as the frontend layer of a robust microservice architecture.

## 🚀 Overview

This dashboard allows businesses to visually manage their inventory and process transactions in real-time. It seamlessly connects to our containerized Go backend to execute ACID-compliant checkouts and display AI-driven smart analytics.

### 🔑 Key Features
* **Real-time API Integration:** Fetches live product and transaction data from the Golang backend.
* **Interactive UI:** Smooth user experience built with React and optimized by Vite.
* **Smart Analytics View:** Visual representation of rule-based inventory alerts (Critical Stock / Overstock).

## 🛠️ Tech Stack
* **Framework:** React 18
* **Build Tool:** Vite
* **HTTP Client:** Axios (for API communication)
* **Styling:** CSS / Tailwind CSS (Planned)

## 🚦 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) installed.
* The [Go Cloud Inventory API](https://github.com/zonafirmann/go-cloud-inventory) must be running via Docker on `localhost:8080`.

### Installation
1. Clone this repository:
   ```bash
   git clone [https://github.com/zonafirmann/inventory-web-dashboard.git](https://github.com/zonafirmann/inventory-web-dashboard.git)
   cd inventory-web-dashboard
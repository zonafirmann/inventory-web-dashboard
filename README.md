# 📦 Inventory Web Dashboard

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A modern, lightweight, and blazing-fast Web Dashboard built to interface directly with the **[Go Cloud Inventory API](https://github.com/zonafirmann/go-cloud-inventory)**. This frontend layer visualizes real-time product data and smart stock alerts using React and Vite.

## 🚀 Key Features

* **Real-Time Data Fetching:** Seamlessly connects to the Go microservice via RESTful endpoints.
* **Smart UI Indicators:** Automatically highlights critical stock levels (e.g., items with stock <= 3 turn red and bold based on backend rule engines).
* **CORS Handled:** Fully integrated with the backend's security headers for secure cross-origin resource sharing.
* **Lightning Fast Build:** Powered by Vite for instant server start and optimized production builds.

## 🚦 Quick Start

**Prerequisite:** Ensure the Go Cloud Inventory API is running locally via Docker on `localhost:8080`.

1. Clone the repository:
   ```bash
   git clone [https://github.com/zonafirmann/inventory-web-dashboard.git](https://github.com/zonafirmann/inventory-web-dashboard.git)
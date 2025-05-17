# DeepWatch – Deepfake Video Verifier Portal 🎥🕵️‍♂️

DeepWatch is a modern, React-based frontend application for detecting deepfake videos. Designed with a sleek and accessible interface using TailwindCSS and shadcn components, the portal enables users to upload videos, view detection results, and track analysis history — making deepfake identification intuitive and insightful.

> ⚠️ Note: This is a frontend mockup. All API interactions are simulated in `lib/api.ts` and can be connected to a real backend for production use.

## 🚀 Features

### 🏠 Home Page
- Introduction to the platform and its mission
- Clear call-to-action to analyze videos

### 📤 Video Upload Interface
- Upload videos directly from your device
- Client-side validation for file type and size
- Progress indicator during upload and analysis

### 📊 Results Page
- Simulated deepfake detection output
- Visual indicators of authenticity risk
- Clear breakdown of suspicious elements in video frames

### 📈 Analysis Dashboard
- View history of past video checks
- Manage or revisit previous analysis results

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Mocked API Calls:** `lib/api.ts`

## 🧪 Simulated API
This app includes simulated API interactions for demo purposes. These can easily be replaced with real API calls by integrating with a backend deepfake detection model or service.

## 🧰 Getting Started

```bash

cd deepwatch
npm install
npm run dev

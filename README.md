# 📌 To-Do App (TypeScript + React + Vite)

A simple yet powerful To-Do application built as part of the **React Enhancement Assignment**.  
This app demonstrates **Date Filters** and **Task Priority Management** using **Context API** in TypeScript.

---

## 🚀 Features Implemented
- ✅ **Date Filters**: View tasks for **All / Today / This Week**  
- ✅ **Task Priority Badges**: Low / Medium / High with color indicators  
- ✅ **Global State Management**: Using **React Context API**  
- ✅ **TypeScript + Vite Setup** for fast development  
- ✅ **Reusable Components**: TaskCard, FilterBar, PriorityBadge  

---

## 🛠 Tech Stack
- **React 18**  
- **TypeScript**  
- **Vite** (fast bundler)  
- **date-fns** (for date utilities)  

---

## 📂 Project Structure

src/
├─ components/
│ ├─ TaskCard.tsx
│ ├─ FilterBar.tsx
│ └─ PriorityBadge.tsx
├─ context/
│ ├─ TaskContext.tsx
│ └─ TaskProvider.tsx
├─ pages/
│ └─ Home.tsx
├─ utils/
│ └─ dateUtils.ts
├─ App.tsx
└─ main.tsx



---

## ⚡ Getting Started

### 1️⃣ Clone Repo
```bash
git clone https://github.com/vishaltiwari1910/To-Do.git
cd To-Do

npm install
npm run dev

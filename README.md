# React Native + Expo + Node.js Production Boilerplate

This repository contains two workspaces:
- `mobile/`: Expo + React Native (TypeScript) client app
- `backend/`: Node.js + Express (TypeScript) API

## Quickstart

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 2) Mobile

```bash
cd mobile
npm install
npm start
```

Then open Expo Go or use `npm run android` / `npm run ios`.

## Architecture

### mobile
- `src/App.tsx`: root container
- `src/navigation`: stack navigator
- `src/screens`: screen modules
- `src/services`: API client + backend service
- `src/hooks`: React Query hooks
- `src/types`: domain DTOs

### backend
- `src/index.ts`: express app initialization
- `src/routes`: route modules
- `src/middleware`: standard error handling

## Policies
- Uses Expo SDK 55 non-deprecated APIs
- Include proper typing and production-safe defaults
- Built for real-world upgrade paths

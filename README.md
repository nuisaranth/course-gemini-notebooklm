# Gemini Deep Research & NotebookLM Course

โปรเจกต์สำหรับหลักสูตร Gemini Deep Research & NotebookLM โดย Team Digital

## ข้อมูลโปรเจกต์
- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui

## การติดตั้งและใช้งาน (Local Development)

1. **ติดตั้ง Dependencies**:
   ```sh
   npm install
   ```

2. **เริ่ม Development Server**:
   ```sh
   npm run dev
   ```

3. **Build โปรเจกต์**:
   ```sh
   npm run build
   ```

## การ Deploy
โปรเจกต์นี้ตั้งค่าให้ Deploy อัตโนมัติผ่าน **Cloudflare Pages** เมื่อมีการ Push ไปยังสาขา `main`

### การตั้งค่า Cloudflare Pages:
- **Build command**: `npm run build`
- **Build output directory**: `dist` (หรือตามที่ระบุใน vite.config.ts)

---
© 2026 Team Digital. All rights reserved.

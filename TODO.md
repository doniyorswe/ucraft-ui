# ✅ UI Library Development Checklist

## 🚀 Phase 1 — Foundation (once)

- [ ] Project setup (Vite + React + TS)
- [ ] Tailwind CSS o‘rnatildi
- [ ] Folder structure tozalandi (components/, utils/)
- [ ] `cn` (class merge utility) yozildi
- [ ] Base types (size, variant) aniqlandi

---

## 🧱 Phase 2 — Core Components

### 🔘 Button

- [ ] Props interface yozildi
- [ ] Variants (primary, secondary, outline)
- [ ] Sizes (sm, md, lg)
- [ ] Disabled state
- [ ] Loading state
- [ ] Icon support
- [ ] className override ishlaydi
- [ ] Export qilindi (`index.ts`)
- [ ] Manual test qilindi
- [ ] Build qilib tekshirildi
- [ ] Publish qilindi

---

### ⌨️ Input

- [ ] Props interface
- [ ] Sizes
- [ ] Label support
- [ ] Error state
- [ ] Helper text
- [ ] Disabled state
- [ ] className override
- [ ] Export qilindi
- [ ] Manual test
- [ ] Build + Publish

---

### ☑️ Checkbox

- [ ] Base component
- [ ] Checked / unchecked state
- [ ] Disabled
- [ ] Label support
- [ ] Export
- [ ] Test + Publish

---

### 🔘 Radio

- [ ] Base component
- [ ] Group support
- [ ] Controlled / uncontrolled
- [ ] Export
- [ ] Test + Publish

---

### 📂 Select

- [ ] Base select
- [ ] Options render
- [ ] Disabled
- [ ] Custom styles
- [ ] Export
- [ ] Test + Publish

---

## ⚡ Phase 3 — Advanced Components

### 🪟 Modal

- [ ] Open / close logic
- [ ] Overlay
- [ ] ESC close
- [ ] Click outside close
- [ ] Animation (optional)
- [ ] Export + Test

---

### 📑 Dropdown

- [ ] Toggle
- [ ] Position
- [ ] Outside click close
- [ ] Keyboard support (optional)

---

### 💬 Tooltip

- [ ] Hover trigger
- [ ] Positioning
- [ ] Delay support

---

### 🗂 Tabs

- [ ] Active state
- [ ] Switching logic
- [ ] Controlled mode

---

### 📚 Accordion

- [ ] Expand / collapse
- [ ] Multiple / single mode

---

## 🎨 Phase 4 — Design System

- [ ] Color tokens
- [ ] Typography scale
- [ ] Spacing system
- [ ] Border radius standard
- [ ] Dark mode (optional)

---

## 🧪 Phase 5 — Testing (keyin)

- [ ] Vitest setup
- [ ] Button test
- [ ] Input test
- [ ] Core components coverage
- [ ] Snapshot test (optional)

---

## 📦 Phase 6 — Release Discipline

Har bir component uchun:

- [ ] Version tanlandi (patch/minor/major)
- [ ] Build qilindi
- [ ] Local test (npm link yoki install)
- [ ] Publish qilindi
- [ ] README update qilindi

---

## 💡 Bonus (Advanced)

- [ ] Polymorphic components (`as` prop)
- [ ] Accessibility (aria-\* support)
- [ ] Tree-shaking tekshirildi
- [ ] Bundle size optimizatsiya

---

# 🧠 Rule

- Har safar faqat 1 component ustida ishlash
- Tugatmaguncha keyingisiga o‘tmaslik
- Har component → build → test → publish

---

# 🔥 Current Focus

👉 Button componentdan boshlash

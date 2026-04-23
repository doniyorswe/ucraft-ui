# ✅ UI Library Development Checklist

## 🚀 Phase 1 — Foundation (once)

- [x] Project setup (Vite + React + TS)
- [x] Tailwind CSS o‘rnatildi
- [x] Folder structure tozalandi (components/, utils/)
- [x] Base types (size, variant) aniqlandi

---

## 🧱 Phase 2 — Core Components

### 🔘 Button

- [x] Props interface yozildi
- [x] Variants (primary, secondary, outline)
- [x] Sizes (sm, md, lg)
- [x] Disabled state
- [x] Loading state
- [x] Icon support
- [x] className override ishlaydi
- [x] Export qilindi (`index.ts`)
- [x] Manual test
- [x] Vitest test
- [x] Build + Publish

---

### ⌨️ Input

- [x] Props interface
- [x] Sizes
- [x] Label support
- [x] Error state
- [x] Helper text
- [x] Disabled state
- [x] className override
- [x] Export qilindi
- [ ] Manual test
- [ ] Vitest test
- [ ] Build + Publish

---

### ☑️ Checkbox

- [x] Base component
- [x] Checked / unchecked state
- [x] Disabled
- [x] Label support
- [x] Export
- [x] Manual test
- [x] Vitest test
- [x] Build + Publish

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

- [x] Vitest setup
- [x] Button test
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

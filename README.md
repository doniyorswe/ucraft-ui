# ucraft-ui

A lightweight, production-ready React UI library built with TypeScript and Tailwind CSS.

## 🚀 Installation

```bash
npm install ucraft-ui
```

## 🛠 Usage

First, ensure you have Tailwind CSS configured in your project.

### Basic Example

```tsx
import { Button } from 'ucraft-ui';

function App() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Click Me</Button>
      <Button variant="outline" size="sm">Small Outline</Button>
      <Button variant="secondary" size="lg" disabled>Disabled Large</Button>
    </div>
  );
}
```

### Variants

| Variant     | Description                                      |
| ----------- | ------------------------------------------------ |
| `primary`   | Default blue background (Primary action)         |
| `secondary` | Light gray background (Secondary action)         |
| `outline`   | Transparent with border (Tertiary/Subtle action) |

### Sizes

| Size | Description |
| ---- | ----------- |
| `sm` | Small       |
| `md` | Medium      |
| `lg` | Large       |

## 🧩 Props

| Prop        | Type                                      | Default     | Description                      |
| ----------- | ----------------------------------------- | ----------- | -------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline'`   | `'primary'` | Visual style of the button       |
| `size`      | `'sm' \| 'md' \| 'lg'`                    | `'md'`      | Size of the button               |
| `disabled`  | `boolean`                                 | `false`     | Disables the button              |
| `className` | `string`                                  | `undefined` | Custom CSS classes via Tailwind  |
| `children`  | `ReactNode`                               | `required`  | Button content                   |
| `...props`  | `ButtonHTMLAttributes`                    | `-`         | Any standard HTML button element |

## 🎨 Tailwind CSS Integration

Since this library uses Tailwind CSS, you should add the library path to your `tailwind.config.js` or `content` section to ensure styles are generated:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ucraft-ui/dist/**/*.{js,ts,jsx,tsx,es.js}", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📄 License

MIT

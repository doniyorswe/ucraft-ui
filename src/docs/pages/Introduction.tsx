import { CodeBlock } from '../components/CodeBlock';

const Introduction = () => {
  return (
    <div className="max-w-none">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Introduction</h1>
      <p className="text-xl text-gray-600 mb-8">
        Welcome to <span className="text-blue-600 font-semibold">ucraft-ui</span>, a modern, minimalist React component library built with Tailwind CSS.
      </p>

      <div className="h-px bg-gray-200 w-full my-10" />

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
      <p className="text-gray-700 mb-4">Install the package via npm or yarn:</p>
      <CodeBlock code="npm install ucraft-ui" />

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Usage</h2>
      <p className="text-gray-700 mb-4">Import the components and use them in your React application:</p>
      <CodeBlock 
        code={`import { Button } from 'ucraft-ui';

function App() {
  return <Button variant="primary">Hello World</Button>;
}`} 
      />

      <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <h3 className="text-blue-900 font-semibold mb-3 text-lg">Requirements</h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            React 18+
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Tailwind CSS 3.4+ (or v4)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;

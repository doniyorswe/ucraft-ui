import { Input } from '../../index';
import { ComponentPreview } from '../components/ComponentPreview';

const InputDoc = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Input</h1>
      <p className="text-xl text-gray-600 mb-8">
        Displays a form input field or a component that looks like an input field.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage</h2>
        <ComponentPreview 
          title="Basic"
          code={`<Input placeholder="Enter your text..." />`}
        >
          <Input placeholder="Enter your text..." />
        </ComponentPreview>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sizes</h2>
        <div className="space-y-4">
          <ComponentPreview 
            title="Small"
            code={`<Input size="sm" placeholder="Small input" />`}
          >
            <Input size="sm" placeholder="Small input" />
          </ComponentPreview>
          
          <ComponentPreview 
            title="Medium (default)"
            code={`<Input size="md" placeholder="Medium input" />`}
          >
            <Input size="md" placeholder="Medium input" />
          </ComponentPreview>

          <ComponentPreview 
            title="Large"
            code={`<Input size="lg" placeholder="Large input" />`}
          >
            <Input size="lg" placeholder="Large input" />
          </ComponentPreview>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">States</h2>
        <ComponentPreview 
          title="Disabled"
          code={`<Input disabled placeholder="Disabled input" />`}
        >
          <Input disabled placeholder="Disabled input" />
        </ComponentPreview>
      </section>
    </div>
  );
};

export default InputDoc;

import { Button } from 'ucraft-ui';
import { ComponentPreview } from '../components/ComponentPreview';

const ButtonDoc = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Button</h1>
      <p className="text-xl text-gray-600 mb-8">
        Displays a button or a component that looks like a button.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variants</h2>
        
        <ComponentPreview 
          title="Primary"
          code={`<Button variant="primary">Primary Button</Button>`}
        >
          <Button variant="primary">Primary Button</Button>
        </ComponentPreview>

        <ComponentPreview 
          title="Secondary"
          code={`<Button variant="secondary">Secondary Button</Button>`}
        >
          <Button variant="secondary">Secondary Button</Button>
        </ComponentPreview>

        <ComponentPreview 
          title="Danger"
          code={`<Button variant="danger">Danger Button</Button>`}
        >
          <Button variant="danger">Danger Button</Button>
        </ComponentPreview>

        <ComponentPreview 
          title="Outline"
          code={`<Button variant="outline">Outline Button</Button>`}
        >
          <Button variant="outline">Outline Button</Button>
        </ComponentPreview>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sizes</h2>
        <ComponentPreview 
          title="Sizes"
          code={`<div className="flex gap-4 items-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`}
        >
          <div className="flex gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
};

export default ButtonDoc;

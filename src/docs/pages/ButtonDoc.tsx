import { Settings } from 'lucide-react';
import { Button, Checkbox } from '../../components';
import { ComponentPreview } from '../components/ComponentPreview';
import { useState } from 'react';

const ButtonDoc = () => {
  const [loading, setLoading] = useState(false);

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

        <ComponentPreview
          title="Icon"
          code={`
<Button size="icon">
  <Settings/>
</Button>
<Button size="sm" leftIcon={<Settings/>}>
  Left Icon
</Button>
<Button size="sm" rightIcon={<Settings/>}>
  Right Icon
</Button>
          `}
        >
          <div className="flex gap-4 items-center">
            <Button size="icon">
              <Settings />
            </Button>
            <Button leftIcon={<Settings />}>
              Left Icon
            </Button>
            <Button rightIcon={<Settings />}>
              Right Icon
            </Button>
          </div>
        </ComponentPreview>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sizes</h2>
        <ComponentPreview
          title="Sizes"
          code={`<div className="flex gap-4 items-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button loading size="lg">Large</Button>
</div>`}
        >
          <div className="flex gap-4 items-center">
            <Button loading={loading} size="sm">Small</Button>
            <Button loading={loading} size="md">Medium</Button>
            <Button loading={loading} size="lg">Large</Button>
            <Checkbox label='Loading' checked={loading} onCheckedChange={(checked) => setLoading(checked as boolean)} />
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
};

export default ButtonDoc;

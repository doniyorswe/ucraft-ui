import { Checkbox } from '../../index';
import { ComponentPreview } from '../components/ComponentPreview';

const CheckboxDoc = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Checkbox</h1>
      <p className="text-xl text-gray-600 mb-8">
        A control that allows the user to toggle between checked and unchecked states.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage</h2>
        <ComponentPreview 
          title="With Label"
          code={`<Checkbox label="Accept terms and conditions" />`}
        >
          <Checkbox label="Accept terms and conditions" />
        </ComponentPreview>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sizes</h2>
        <div className="space-y-6">
          <ComponentPreview 
            title="Small"
            code={`<Checkbox size="sm" label="Small checkbox" />`}
          >
            <Checkbox size="sm" label="Small checkbox" />
          </ComponentPreview>
          
          <ComponentPreview 
            title="Medium (default)"
            code={`<Checkbox size="md" label="Medium checkbox" />`}
          >
            <Checkbox size="md" label="Medium checkbox" />
          </ComponentPreview>

          <ComponentPreview 
            title="Large"
            code={`<Checkbox size="lg" label="Large checkbox" />`}
          >
            <Checkbox size="lg" label="Large checkbox" />
          </ComponentPreview>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">States</h2>
        <div className="space-y-6">
          <ComponentPreview 
            title="Default Checked"
            code={`<Checkbox label="Remember me" defaultChecked />`}
          >
            <Checkbox label="Remember me" defaultChecked />
          </ComponentPreview>

          <ComponentPreview 
            title="Disabled"
            code={`<Checkbox label="You cannot check this" disabled />`}
          >
            <Checkbox label="You cannot check this" disabled />
          </ComponentPreview>
        </div>
      </section>
    </div>
  );
};

export default CheckboxDoc;

import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Checkbox } from './components/Checkbox';

const App = () => {
  const [controlledChecked, setControlledChecked] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckedChange = (checked: boolean) => {
    setCheckedCount((prev) => (checked ? prev + 1 : prev - 1));
  };

  return (
    <div className='space-y-8 p-10'>
      <h1 className='text-2xl font-bold'>Input Examples</h1>
      <div className='flex gap-4'>
        <Input placeholder='Placeholder...' size='sm' />
        <Input placeholder='Placeholder...' size='md' />
        <Input placeholder='Placeholder...' size='lg' />
      </div>

      <h1 className='text-2xl font-bold'>Button Examples</h1>
      <div className='flex gap-4'>
        <Button variant='primary' size='sm'>
          Primary SM
        </Button>
        <Button variant='primary'>Primary MD</Button>
        <Button variant='primary' size='lg'>
          Primary LG
        </Button>
      </div>

      <div className='flex gap-4'>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='danger'>Danger</Button>
        <Button variant='outline'>Outline</Button>
        <Button disabled>Disabled</Button>
        <Button
          className='bg-purple-600 hover:bg-purple-700'
          onClick={() => alert('Clicked!')}
        >
          Custom Class
        </Button>
      </div>

      <h1 className='text-2xl font-bold'>Checkbox Examples</h1>

      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <Checkbox
            label='Uncontrolled Checkbox'
            size='sm'
            onCheckedChange={handleCheckedChange}
          />
          <Checkbox
            label='Default Checked'
            defaultChecked={true}
            onCheckedChange={handleCheckedChange}
          />
          <Checkbox label='Disabled' disabled />
        </div>

        <div className='flex items-center gap-4'>
          <Checkbox
            label='Controlled Checkbox'
            checked={controlledChecked}
            size='lg'
            onCheckedChange={setControlledChecked}
          />
          <Button
            variant='outline'
            size='sm'
            onClick={() => setControlledChecked(!controlledChecked)}
          >
            Toggle Controlled
          </Button>
        </div>

        <div className='flex items-center gap-4'>
          <Checkbox
            label='Custom Styling'
            wrapperProps={{ className: 'bg-gray-100 p-3 rounded' }}
          />
        </div>

        <div className='mt-4 rounded bg-blue-50 p-4'>
          <p className='text-sm font-medium'>Checkbox Activity:</p>
          <p className='text-sm text-gray-600'>
            Total checked changes: {checkedCount}
          </p>
          <p className='text-sm text-gray-600'>
            Controlled state: {controlledChecked ? 'Checked' : 'Unchecked'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

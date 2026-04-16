import { Button } from "ucraft-ui";

const App = () => {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Button Examples</h1>

      <div className="flex gap-4">
        <Button variant="primary" size="sm">
          Primary SM
        </Button>
        <Button variant="primary" size="md">
          Primary MD
        </Button>
        <Button variant="primary" size="lg">
          Primary LG
        </Button>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="outline" size="md">
          Outline
        </Button>
        <Button disabled size="md">
          Disabled
        </Button>
      </div>

      <Button
        className="bg-purple-600 hover:bg-purple-700"
        onClick={() => alert("Clicked!")}
      >
        Custom Class
      </Button>
    </div>
  );
};

export default App;

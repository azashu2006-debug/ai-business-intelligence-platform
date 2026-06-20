import { Button, Input, Modal, Toast, Loader } from "../components/ui/Index";

function Showcase() {
  return (
    <div>
      <h1>UI Component Showcase</h1>

      <Button text="Click Me" />

      <br />
      <br />

      <Input placeholder="Enter your name" />

      <br />
      <br />

      <Modal message="This is a sample modal" />

      <br />

      <Toast text="This is a toast notification" />

      <br />

      <Loader />
    </div>
  );
}

export default Showcase;
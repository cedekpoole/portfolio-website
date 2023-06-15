// Create a component that can be used to create a button with a hover effect

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <button className="mb-3 ml-5 rounded-md bg-gray-100 px-10 py-2 transition duration-500 hover:bg-primary-100 hover:text-white">
      {children}
    </button>
  );
};

export default ActionButton;

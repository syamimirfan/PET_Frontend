import Sidebar from "../components/Sidebar";

type Props = object;

const DashboardHome: React.FC<Props> = () => {

  return (
    <div className="bg-background flex h-screen">
      <Sidebar />
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard Home</h1>
        <p className="mt-4 text-gray-600">
          Welcome to the Dashboard! Here is where you can find the main content of your application.
        </p>
        {/* Add more content or components for the main dashboard */}
      </div>
    </div>
  );
};

export default DashboardHome;

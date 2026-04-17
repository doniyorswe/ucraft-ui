import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const DocsLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-12 py-12 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

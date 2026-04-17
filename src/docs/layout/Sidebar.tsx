import { NavLink } from 'react-router-dom';
import { Layout, Box, Type, MousePointer2, CheckSquare } from 'lucide-react';

const links = [
  { name: 'Introduction', href: '/', icon: Layout },
  { name: 'Button', href: '/button', icon: MousePointer2 },
  { name: 'Input', href: '/input', icon: Type },
  { name: 'Checkbox', href: '/checkbox', icon: CheckSquare },
];

export const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-200 h-screen sticky top-0 p-6 overflow-y-auto bg-gray-50/50">
      <div className="flex items-center gap-2 mb-10 px-2">
        <Box className="text-blue-600" size={32} />
        <span className="font-bold text-xl tracking-tight">ucraft-ui</span>
      </div>
      
      <nav className="space-y-1">
        <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Getting Started</p>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`
          }
        >
          <Layout size={18} />
          Introduction
        </NavLink>
        
        <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-2">Components</p>
        {links.slice(1).map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <link.icon size={18} />
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4 px-12 py-4 border-t border-gray-200 absolute bottom-0 left-0 right-0">
        <a href="https://github.com/doniyorswe/ucraft-ui" target="_blank" rel="noopener noreferrer">
          <img src='https://img.shields.io/github/stars/doniyorswe/ucraft-ui'/>
        </a>
        <a href="https://www.npmjs.com/package/ucraft-ui" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/npm/v/ucraft-ui" />
        </a>
      </div>
    </div>
  );
};

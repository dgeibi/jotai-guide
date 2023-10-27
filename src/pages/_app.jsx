/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './_app.css';

const menu = [
  {
    path: '/jotai',
    title: 'jotai',
  },
  {
    path: '/context',
    title: 'Context简单例子',
  },
  {
    path: '/jotai-no-rerender',
    title: 'jotai重渲染优化',
  },
  {
    path: '/jotai-read-write',
    title: 'jotai读写分离',
  },
  {
    path: '/context-read-write',
    title: 'Context读写分离',
  },
  {
    path: '/derived',
    title: '派生',
  },
  {
    path: '/before-atom-actions',
    title: 'useCallback + useStore',
  },
  {
    path: '/action-atoms',
    title: 'action',
  },
  {
    path: '/use-atom-callback',
    title: 'useAtomCallback',
  },
  {
    path: '/jotai-effect',
    title: 'effect',
  },
];

export default function Root() {
  return (
    <>
      <Menu menu={menu} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

function Menu({ menu }) {
  const location = useLocation();
  return (
    <div
      style={{ display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}
    >
      {menu.map((item) => {
        return (
          <div key={item.path}>
            <Link
              to={item.path}
              className={`menu-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

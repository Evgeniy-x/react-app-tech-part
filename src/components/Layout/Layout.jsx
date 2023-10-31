import './Layout.scss';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Navigation } from '../';

export const Layout = () => (
  <>
    <header className="header">
      <div className="wrapper">
        <Navigation />
      </div>
    </header>

    <main className="main">
      <div className="wrapper">
        <Suspense
          fallback={
            <div className="bg-lodaer">
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>

    <footer className="footer"></footer>
  </>
);

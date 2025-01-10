The solution is to ensure the parent route is always rendered before the nested route.  You can achieve this by either redirecting from the direct nested route path to the parent route or using a proper route hierarchy to ensure the parent always renders first:

```jsx
import { useLocation, Navigate, Outlet, Link } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <div>
      <h1>Layout</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Outlet /></Layout>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
```

The solution uses `Navigate` to handle the case of direct nested route access. By redirecting to the parent route, React Router renders the parent layout before rendering the nested route, resolving the issue.
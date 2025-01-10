# React Router v6 Nested Route Rendering Issue

This repository demonstrates a bug in React Router v6 where nested routes might not render correctly when accessed directly without the parent route.  The `Outlet` component in the parent route fails to display the nested route content.

The bug is caused by directly accessing a nested route path without navigating through the parent route.  This leads to an unexpected rendering behavior where the nested component does not appear, as React Router does not render the parent's layout correctly.

The solution provided addresses this issue by ensuring that the parent route is always rendered before nested routes. The issue and its resolution are fully demonstrated in the provided code samples.
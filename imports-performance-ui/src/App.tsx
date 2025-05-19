import React, { JSX } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Route";
import "./styles/App.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

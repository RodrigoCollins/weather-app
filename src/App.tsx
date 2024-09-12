import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Router from "@components/router";
import { AppProviders } from "@components/providers";
import { Suspense } from "react";
import { SplashScreen } from "@components/loaders";

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Suspense fallback={<SplashScreen />}>
          <Routes>{Router()}</Routes>
        </Suspense>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;

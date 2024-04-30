import PaymentFormContainer from "@pages/payment-form";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaymentFormContainer />
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

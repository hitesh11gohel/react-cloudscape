import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import Dashboard from "./pages/Dashboard";
import { AppLayout, ContentLayout } from "@cloudscape-design/components";
import Sidebar from "./components/Sidebar";
import Breadcrumbs from "./components/Breadcrumb";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import { AppContextProvider } from "./contexts/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppLayout
          content={
            <ContentLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </ContentLayout>
          }
          navigation={<Sidebar />}
          breadcrumbs={<Breadcrumbs />}
          toolsHide={true}
        />
      </BrowserRouter>
    </AppContextProvider>
  );
}

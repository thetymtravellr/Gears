import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AboutUs from "./pages/AboutUs/AboutUs";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Toaster/>
     <Routes>
       <Route path="/" element={<Home></Home>} />
       <Route path="/addinventory" element={<RequireAuth>
        <AddNewItem></AddNewItem>
       </RequireAuth>} />
       <Route path="/manageinventory" element={
       <RequireAuth>
         <ManageInventory></ManageInventory>
       </RequireAuth>
       } />
       <Route path="/myitems" element={
         <RequireAuth>
           <MyItems></MyItems>
         </RequireAuth>
       } />
       <Route path="/inventory/:id" element={
         <RequireAuth>
           <Inventory></Inventory>
         </RequireAuth>
       } />
       <Route path="/blog" element={<Blogs></Blogs>} />
       <Route path="/about" element={<AboutUs></AboutUs>} />
       <Route path="/login" element={<Login></Login>} />
       <Route path="/register" element={<Register></Register>} />
       <Route path="*" element={<NotFound></NotFound>}/>
     </Routes>
    </div>
  );
}

export default App;

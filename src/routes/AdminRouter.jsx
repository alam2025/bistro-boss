import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Loader/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRouter= ({children}) => {
      const {user,loading}= useAuth();
      const [isAdmin, isAdminLoading]=useAdmin()
      const location = useLocation()
      if(loading || isAdminLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if(user && isAdmin){
            return children;
      }
      return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRouter;
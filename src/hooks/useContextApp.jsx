import { useContext } from "react";
import ContextApp from "../Context/ContextApp";

const useContextApp = ()=>{
    return useContext(ContextApp);
}
export default useContextApp;
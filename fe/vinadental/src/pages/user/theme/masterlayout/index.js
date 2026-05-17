import { Children, memo } from "react";
//memo is used to optimize component rendering.
import Header from "../header";
import Footer from "../footer";

//Create MasterLayout component.
const MasterLayout = ({ children, ...props}) => {
    //children represents components nested inside MasterLayout.
    //children đại diện cho các component được đặt bên trong MasterLayout.
    return ( 
        <div>
            <Header />
            {children}
            <Footer />
        </ div>
     );
};

export default memo(MasterLayout);
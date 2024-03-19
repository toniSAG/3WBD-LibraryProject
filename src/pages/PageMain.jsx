import HomePage from "@/pages/HomePage/HomePage.jsx";
import SearchPage from "@/pages/SearchPage/SearchPage.jsx";
import WikiPage from "@/pages/WikiPage/WikiPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "@/_utils/Error.jsx";


function PageMain(){
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/HomePage"} element={<HomePage/>}/>
                    <Route path={"/SearchPage"} element={<SearchPage/>}/>
                    <Route path={"/WikiPage"} element={<WikiPage/>}/>

                    <Route path={"*"} element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default PageMain
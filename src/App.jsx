import React, { useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LeagueTable from "./pages/LeaguTable/LeagueTable";
import FixturesResults from "./pages/FixturesResults/FixturesResults";
import News from "./pages/News/News";
import Tickets from "./pages/Tickets/Tickets";
import ForGirls from "./pages/ForGirls/ForGirls";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/all-news" element={<News/>} />
                    <Route path="/league-table" element={<LeagueTable/>} />
                    <Route path="/fixtures-results" element={<FixturesResults/>} />
                    <Route path="/tickets" element={<Tickets/>} />
                    <Route path="/for-girls" element={<ForGirls/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;

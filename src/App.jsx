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
import NeverPlayed from "./pages/ForGirls/NeverPlayed/NeverPlayed";
import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
import WildCats from "./pages/ForGirls/WildCats/WildCats";
// import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
// import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
// import WildCats from "./pages/ForGirls/WildCats/WildCats";

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
                  
                    {/* FORGIRLS SUB ROUTE*/}
                    <Route path="/never-played" element={<NeverPlayed/>} />
                    <Route path="/play-sometimes" element={<PlaySomeTimes/>} />
                    <Route path="/play-alot" element={<PlayAlot/>} />
                    <Route path="/wildcats" element={<WildCats/>} />

                </Routes>
            </div>
        </>
    );
}

export default App;

import React, { useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LeagueTable from "./pages/LeaguTable/LeagueTable";
import FixturesResults from "./pages/FixturesResults/FixturesResults";
import News from "./pages/News/News";
// import SingleNews from "./pages/News/SingleNews/SingleNews";
// import Result from "./pages/Result/Result";
import Tickets from "./pages/Tickets/Tickets";
import ForGirls from "./pages/ForGirls/ForGirls";
import NeverPlayed from "./pages/ForGirls/NeverPlayed/NeverPlayed";
import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
import WildCats from "./pages/ForGirls/WildCats/WildCats";
import SingleNews from "./pages/News/SingleNews/SingleNews";
import Result from "./pages/FixturesResults/Result/Result";
import SingleStory from "./pages/ForGirls/SingleStory";
// import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
// import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
// import WildCats from "./pages/ForGirls/WildCats/WildCats";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    {/* NEWS ROUTE AND INNER ROUTE */}
                    <Route path="/all-news" element={<News/>} />
                    <Route path="/single-news/:id" element={<SingleNews/>} />

                    {/* FIXTURES AND RESULTS */}
                    <Route path="/single-results/:id" element={<Result/>} />
                    <Route path="/league-table" element={<LeagueTable/>} />
                    <Route path="/fixtures-results" element={<FixturesResults/>} />
                    <Route path="/tickets" element={<Tickets/>} />
                    <Route path="/for-girls" element={<ForGirls/>} />
                  
                    {/* FORGIRLS SUB ROUTE*/}
                    <Route path="/never-played" element={<NeverPlayed/>} />
                    <Route path="/play-sometimes" element={<PlaySomeTimes/>} />
                    <Route path="/play-alot" element={<PlayAlot/>} />
                    <Route path="/wildcats" element={<WildCats/>} />

                    {/* FORGIRLS SINGLE ROUTE */}
                    <Route path="/single-story/:id" element={<SingleStory/>} />

                </Routes>
            </div>
        </>
    );
}

export default App;

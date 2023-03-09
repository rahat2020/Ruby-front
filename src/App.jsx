import React, { useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LeagueTable from "./pages/LeaguTable/LeagueTable";
// import Matches from "./pages/Matches/Matches";
import News from "./pages/News/News";
// import SingleNews from "./pages/News/SingleNews/SingleNews";
// import Result from "./pages/Result/Result";
import Tickets from "./pages/Teams/Teams";
import ForGirls from "./pages/ForGirls/ForGirls";
import NeverPlayed from "./pages/ForGirls/NeverPlayed/NeverPlayed";
import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
import WildCats from "./pages/ForGirls/WildCats/WildCats";
import SingleNews from "./pages/News/SingleNews/SingleNews";
import Result from "./pages/FixturesResults/Result/Result";
import SingleStory from "./pages/ForGirls/SingleStory";
import Matches from "./pages/FixturesResults/Matches";
import Teams from "./pages/Teams/Teams";
import SingleTeam from "./pages/Teams/SingleTeam/SingleTeam";
import TeamPlayers from "./pages/Teams/SingleTeam/TeamPlayers/TeamPlayers";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import More from "./pages/More/More";
// import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
// import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
// import WildCats from "./pages/ForGirls/WildCats/WildCats";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="*" element={<HomePage />} /> */}
                    <Route path="/cms" element={<ComingSoon />} />

                    {/* NEWS ROUTE AND INNER ROUTE */}
                    <Route path="/all-news" element={<News />} />
                    <Route path="/single-news/:id" element={<SingleNews />} />

                    {/* FIXTURES AND RESULTS */}
                    <Route path="/single-results/:id" element={<Result />} />
                    <Route path="/league-table" element={<LeagueTable />} />
                    <Route path="/fixtures-results" element={<Matches />} />

                    {/* TEAMS AND SINGLE TEAMS */}
                    <Route path="/all_teams" element={<Teams />} />
                    <Route path="/all_teams/single_team/:id" element={<SingleTeam />} />
                    <Route path="/single_team/players/:id" element={<TeamPlayers />} />

                    {/* VIDEOS */}
                    <Route path="/All-videos" element={<ForGirls />} />

                    {/* FORGIRLS SUB ROUTE*/}
                    <Route path="/never-played" element={<NeverPlayed />} />
                    <Route path="/play-sometimes" element={<PlaySomeTimes />} />
                    <Route path="/play-alot" element={<PlayAlot />} />
                    <Route path="/wildcats" element={<WildCats />} />
                    <Route path="/single-story/:id" element={<SingleStory />} />
                    <Route path="/more" element={<More />} />


                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;

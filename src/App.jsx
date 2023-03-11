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
import SingleStory from "./pages/ForGirls/SingleStory";
import Matches from "./pages/FixturesResults/Matches";
import Teams from "./pages/Teams/Teams";
import SingleTeam from "./pages/Teams/SingleTeam/SingleTeam";
import TeamPlayers from "./pages/Teams/SingleTeam/TeamPlayers/TeamPlayers";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import More from "./pages/More/More";
import LiveResult from "./pages/FixturesResults/LiveResult/LiveResult";
import GotoTop from "./components/GotoTop/GotoTop";
import Result from "./pages/FixturesResults/Result/Result";
import ContactUs from "./components/Footer/ContactUs/ContactUs";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./components/Footer/TermsConditions/TermsConditions";
import SingleSchedule from "./pages/Teams/SingleTeam/SingleSchedule/SingleSchedule";
import SingleOverview from "./pages/Teams/SingleOverview/SingleOverview";
// import PlaySomeTimes from "./pages/ForGirls/PlaySomeTimes/PlaySomeTimes";
// import PlayAlot from "./pages/ForGirls/PlayAlot/PlayAlot";
// import WildCats from "./pages/ForGirls/WildCats/WildCats";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                    <Route path="/cms" element={<ComingSoon />} />

                    {/* NEWS ROUTE AND INNER ROUTE */}
                    <Route path="/all-news" element={<News />} />
                    <Route path="/single-news/:id" element={<SingleNews />} />

                    {/* FIXTURES AND RESULTS */}
                    <Route path="/single-results/:id" element={<LiveResult />} />
                    <Route path="/league-table" element={<LeagueTable />} />
                    <Route path="/matches_others" element={<Matches />} />
                    <Route path="/match-results" element={<Result />} />

                    {/* FOOTER ROUTE */}
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/termsOfconditions" element={<TermsConditions />} />


                    {/* TEAMS AND SINGLE TEAMS */}
                    <Route path="/all_teams" element={<Teams />} />
                    <Route path="/all_teams/single_team/:id" element={<SingleTeam />} />
                    <Route path="/single_team/players/:id" element={<TeamPlayers />} />
                    <Route path="/team_overview/players/overview" element={<SingleOverview />} />
                    <Route path="/team_schedule/players/schedule" element={<SingleSchedule />} />

                    {/* VIDEOS */}
                    <Route path="/all_videos" element={<ForGirls />} />

                    {/* FORGIRLS SUB ROUTE*/}
                    <Route path="/never-played" element={<NeverPlayed />} />
                    <Route path="/play-sometimes" element={<PlaySomeTimes />} />
                    <Route path="/play-alot" element={<PlayAlot />} />
                    <Route path="/wildcats" element={<WildCats />} />
                    <Route path="/single-story/:id" element={<SingleStory />} />
                    <Route path="/more" element={<More />} />


                </Routes>
                <Footer />
                <GotoTop />
            </div>
        </>
    );
}

export default App;

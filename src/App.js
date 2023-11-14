import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { UserAuthContextProvider } from "./component/Context/UserAuthContext";
import GameStop from "./component/SidebarComponent/Buisness Economics and Finance/GameStop";
import Moderna from "./component/SidebarComponent/Buisness Economics and Finance/Moderna";
import Pfizer from "./component/SidebarComponent/Buisness Economics and Finance/Pfizer";
import GenshinImpact from "./component/SidebarComponent/Gaming/GenshinImpact";
import Minecraft from "./component/SidebarComponent/Gaming/Minecraft";
import Pokimane from "./component/SidebarComponent/Gaming/Pokimane";
import Valheim from "./component/SidebarComponent/Gaming/Valheim";
import AtlantaHawks from "./component/SidebarComponent/Sports/AtlantaHawks";
import MeganAnderson from "./component/SidebarComponent/Sports/MeganAnderson";
import NBA from "./component/SidebarComponent/Sports/NBA";
import NFL from "./component/SidebarComponent/Sports/NFL";
import Login from "./component/login-logout-fun/Login/Login";
import ProtectedRoute from "./component/login-logout-fun/ProtectedRoute/ProtectedRoute";
import Signup from "./component/login-logout-fun/Signup/Signup";
import AstraZeneca from "./component/SidebarComponent/Buisness Economics and Finance/AstraZeneca";
import Cardano from "./component/SidebarComponent/Crypto/Cardano";
import Dogecoin from "./component/SidebarComponent/Crypto/Dogecoin";
import Algorand from "./component/SidebarComponent/Crypto/Algorand";
import Bitcoin from "./component/SidebarComponent/Crypto/Bitcoin";
import TheRealHousewives from "./component/SidebarComponent/Television/TheRealHousewives";
import TheBachelor from "./component/SidebarComponent/Television/TheBachelor";
import SisterWives from "./component/SidebarComponent/Television/SisterWives";
import NintyDayFiance from "./component/SidebarComponent/Television/NintyDayFiance";
import KimKardashian from "./component/SidebarComponent/Celebrity/KimKardashian";
import DojaCat from "./component/SidebarComponent/Celebrity/DojaCat";
import { IggyAzalea } from "./component/SidebarComponent/Celebrity/IggyAzalea";
import AnyaTaylorJoy from "./component/SidebarComponent/Celebrity/AnyaTaylorJoy";
import AnimalsAndPets from "./component/SidebarComponent/More Topics/AnimalsAndPets";
import Anime from "./component/SidebarComponent/More Topics/Anime";
import Art from "./component/SidebarComponent/More Topics/Art";
import CarsAndMotorVehicles from "./component/SidebarComponent/More Topics/CarsAndMotorVehicles";

const App = () => {
  return (
    <Container
      style={{
        width: "100vw",
        margin: "0px",
        padding: "0px",
      }}
    >
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/navbar"
            element={
              <ProtectedRoute>
                <Navbar />
              </ProtectedRoute>
            }
          />
          <Route path="/nfl" element={<NFL />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/Megan Anderson" element={<MeganAnderson />} />
          <Route path="/Atlanta Hawks" element={<AtlantaHawks />} />
          <Route path="/Valheim" element={<Valheim />} />
          <Route path="/Genshin Impact" element={<GenshinImpact />} />
          <Route path="/Minecraft" element={<Minecraft />} />
          <Route path="/Pokimane" element={<Pokimane />} />
          <Route path="/gamestop" element={<GameStop />} />
          <Route path="/Moderna" element={<Moderna />} />
          <Route path="/Pfizer" element={<Pfizer />} />
          <Route path="/AstraZeneca" element={<AstraZeneca />} />
          <Route path="/Cardano" element={<Cardano />} />
          <Route path="/Dogecoin" element={<Dogecoin />} />
          <Route path="/Algorand" element={<Algorand />} />
          <Route path="/Bitcoin" element={<Bitcoin />} />
          <Route path="/The Real Housewives of Atlanta" element={<TheRealHousewives />} />
          <Route path="/The Bachelor" element={<TheBachelor />} />
          <Route path="/Sister Wives" element={<SisterWives />} />
          <Route path="/90 Day Fiance" element={<NintyDayFiance />} />
          <Route path="/Kim Kardashian" element={<KimKardashian />} />
          <Route path="/Doja Cat" element={<DojaCat />} />
          <Route path="/Iggy Azalea" element={<IggyAzalea />} />
          <Route path="/Anya Taylor-Joy" element={<AnyaTaylorJoy />} />
          <Route path="/Animals And Pets" element={<AnimalsAndPets />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/Cars and Motor Vehicles" element={<CarsAndMotorVehicles />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </Container>
  );
};

export default App;

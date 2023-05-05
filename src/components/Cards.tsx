import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these player favorites!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/src/assets/fortnite.jpg"
              textMain="Fortnite"
              textDesc="The battle is building! Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing."
              label="BR"
              path="/"
            ></CardItem>
            <CardItem
              src="/src/assets/valorant.jpg"
              textMain="Valorant"
              textDesc="Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities. Learn about VALORANT and its stylish new graphics."
              label="5v5 Tactical Shooter"
              path="/"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/src/assets/genshin impact.jpg"
              textMain="Genshin Impact"
              textDesc="Step into a Vast Magical World of Adventure. Go on an immersive journey with an engrossing story and a diverse cast of companions. 20 Free Wishes. Soothing Soundtrack. Free to Play."
              label="Adventure"
              path="/"
            ></CardItem>
            <CardItem
              src="/src/assets/nba2k23.avif"
              textMain="NBA 2K23"
              textDesc="Rise to the occasion in NBA 2K23. Showcase your talent in MyCAREER. Pair All-Stars with timeless legends in MyTEAM. Build your own dynasty in MyGM, or guide the NBA in a new direction with MyLEAGUE. Take on NBA or WNBA teams in PLAY NOW and feel true-to-life gameplay."
              label="Sports"
              path="/"
            ></CardItem>
            <CardItem
              src="/src/assets/gta5.jpg"
              textMain="GTA 5"
              textDesc="Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second."
              label="Action-Adventure"
              path="/"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

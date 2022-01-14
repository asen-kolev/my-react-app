import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import Card from "./Card";
import GameHooks from "./hooks/GameWithHooks";
import WellcomeLogo from "./img/tictactoe.bmp";
import "./index.css";

export function Home() {
  return (
    <div className="menu">
      <h1>Tic Tac Toe by Asen Kolev</h1>
      <div>
        <Link to="gamewithhooks">
          <img src={WellcomeLogo} alt="TicTacToe" />
        </Link>
      </div>
      <nav>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="gamewithhooks">New Game</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <h3>NBU Project for INFM316</h3>
      <div>
        <section>
          This project is done by Asen Kolev F53174 according INFM316 course
          requirements, i.e. It should contains routing with minimum 2 pages.
          Also it should contan functionality like TicTacToe game and looks
          nice, etc.. And last but not least it should be uploaded to platforms
          like vercel or heroku.
        </section>
      </div>
      <Outlet />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gamewithhooks">New Game</Link>
      </nav>
    </div>
  );
}

export function GameWithHooks() {
  return (
    <div>
      <GameHooks />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <div className="contact">
        <Card className="contact" header="NBU Student" login="asen-kolev" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gamewithhooks">New Game</Link>
      </nav>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Nav() {
  return (
    <>
      <div class="header header-fixed u-unselectable header-animated">
        <div class="header-brand">
          <div class="nav-item no-hover">
            <a>
              <h6 class="title">Koi-dev</h6>
            </a>
          </div>
          <div class="nav-item nav-btn" id="header-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="header-nav" id="header-menu" role="button">
          <div class="nav-left">
            <div class="nav-item text-center">
              <a href="#">
                <span class="icon">
                  <i class="fab fa-wrapper fa-github" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </div>
          {/* <div class="nav-item has-sub toggle-hover" id="left-dropdown">
                <a class="nav-dropdown-link">Animated</a>
                <ul class="dropdown-menu dropdown-animated" role="menu">
                    <li role="menuitem"><a href="#">First Item</a></li>
                    <li role="menuitem"><a href="#">Second Item</a></li>
                    <li role="menuitem"><a href="#">Third Item</a></li>
                </ul>
            </div> */}
        </div>

        <div class="nav-right text-sm">
          <div class="nav-item">
            <a href="#">LinkedIn</a>
          </div>
          <div class="nav-item">
            <a href="#">Github</a>
          </div>
          <div class="nav-item">
            <a href="#">About</a>
          </div>
          <div class="nav-item">
            <a href="#">Contact</a>
          </div>
          <div class="nav-item">
            <a class="btn btn-black btn--sm py-0" href="#">View Work</a>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
  <div class="bg-gray-100 min-h-100p">
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="content lg:px-12 xl:px-24">
        </div>
      </div>
    </div>
  </section>
</div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

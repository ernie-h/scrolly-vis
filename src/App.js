import React, { Component } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// import { map1 } from "./assets/map1.png"

const TweenStyled = styled.div`
  .section {
    height: 100vh;
    align-items: center;
  }
  .vis-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .tween {
	  width: 100%;
    height: 100%;
    background-color: red;
    margin: 0 !important;
    position: relative;
    right: calc(50% - 50px);
  }
  
  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`;
class App extends Component {
  render() {
    return (
      <TweenStyled>
        <div className="section" />
        <div className="section" />
        <div id="trigger" />
        <div className="vis-container">
          <Controller>
            <Scene
              triggerElement="#trigger"
              duration={400}
            >
              {(progress) => (
                <Tween
                  to={{
                    left: '0px',
                    rotation: -360,
                    width: '200px',
                    height: '200px',
                  }}
                  ease="Strong.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <img classname="tween" src="images/map2.png" alt="map1" />

                </Tween>
              )}
            </Scene>
            <Scene
              triggerElement="#trigger"
              duration={400}
              pin={false}
            >
              {(progress) => (
                <Tween
                  from={{
                    css: {
                      left: '0px',
                      rotation: -360,
                      width: '200px',
                      height: '200px',
                    },
                    ease: 'Strong.easeOut',
                  }}
                  to={{
                    css: {
                      left: '100px',
                      rotation: -300,
                      width: '50px',
                      height: '50px',
                    },
                    ease: 'Strong.easeOut',
                  }}
                  totalProgress={progress}
                  paused
                >
                  <img classname="tween" src="images/map1.png" alt="map1" />

                </Tween>
              )}
            </Scene>
            {/* <Scene
            duration={500}
          >
            {(progress) => (
              <div>
                <Tween
                  staggerFrom={{
                    left: 700,
                  }}
                  staggerTo={{
                    left: 0,
                    ease: 'Back.easeOut',
                  }}
                  stagger={0.15}
                  totalProgress={progress}
                  paused
                >
                  <div className="stagger" />
                  <div className="stagger" />
                  <div className="stagger" />
                  <div className="stagger" />
                  <div className="stagger" />
                </Tween>
              </div>
            )}
          </Scene> */}
          </Controller>
        </div>
        <div className="section" />
        <div className="section" />
      </TweenStyled>)
  }
}

export default App;

import React, { Component } from "react";
import SlidePanel from "./Components/SliderPanel/SliderPanel";
import RecommendSpace from "./Components/RecommendSpace/RecommendSpace";
import UserReview from "./Components/UserReview/UserReview";
import "./Main.scss";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      mainInfo: [],
      offset: 0,
    };
  }

  componentDidMount = () => {
    fetch("http://18.223.188.215:8000/spaces/categories")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categories: res.categories,
        });
      });
  };

  render() {
    return (
      <div className="Main">
        <section className="mainSlider">
          <SlidePanel />
        </section>

        <section className="searchSpace">
          <p className="mainSubTitle">어떤 공간을 찾고 있나요?</p>
          <div className="spaceListBox">
            <ul className="spaceList">
              {this.state.categories.map((el) => {
                return <li className="listContents">{el}</li>;
              })}
            </ul>
          </div>
        </section>

        <section className="recommendSpace">
          <p className="mainSubTitle">오늘의 추천공간</p>
          <div className="recommendSlide">
            <RecommendSpace />
          </div>
        </section>

        <section className="userReview">
          <p className="mainSubTitle">이용자 리뷰</p>
          <p className="titleContent">생생한 후기를 만나보세요</p>
          <UserReview />
        </section>
      </div>
    );
  }
}

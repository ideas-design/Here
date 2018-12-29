import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getHideMusicListAction,
  getHideSingerInfoAction
} from '../../store/actionCreator';

import './style.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink
          exact
          activeClassName="active"
          to="/"
          onClick={this.props.handleHideMusicListAndSingerInfo}
        >
          <div
            className="icon"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            <i className="iconfont icon-here-music" />
          </div>
        </NavLink>
        <nav>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            推荐
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/top"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            排行榜
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/search"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            搜索
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/collect"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            收藏
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/topics"
            onClick={this.props.handleHideMusicListAndSingerInfo}
          >
            关于
          </NavLink>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHideMusicListAndSingerInfo() {
      dispatch(getHideMusicListAction());
      dispatch(getHideSingerInfoAction());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);

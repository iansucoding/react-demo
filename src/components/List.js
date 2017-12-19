import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Interested from './Interested';

export default class Lst extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.state = {
      items: [],
      interestedList: []
    };
    console.log(props);
  }
  componentDidMount() {
    this.fetchData();
  }
  componentWillUnmount() {
    localStorage.setItem(
      'interestedList',
      JSON.stringify(this.state.interestedList)
    );
  }

  fetchData() {
    axios
      .get(
        'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ'
      )
      .then(response => {
        console.log(response);
        let interestedList = localStorage.getItem('interestedList');
        interestedList = interestedList ? JSON.parse(interestedList) : [];
        this.setState({ items: response.data, interestedList: interestedList });
      })
      .catch(error => {
        console.error(error);
      });
  }
  showDetail(item) {
    this.props.history.push({
      pathname: '/detail',
      state: { detail: item }
    });
  }
  handleClick(actId) {
    const interestedList = [...this.state.interestedList];
    const indexInterested = interestedList.indexOf(actId);
    if (indexInterested === -1) {
      interestedList.push(actId);
    } else {
      interestedList.splice(indexInterested, 1);
    }
    this.setState({ interestedList: interestedList });
  }
  render() {
    return (
      <div>
        <p>近期有 {this.state.items.length} 筆資訊</p>
        <ul className="list-group">
          {this.state.items.map((item, index) => (
            <li className="list-group-item" key={index}>
              <button
                className="btn btn-link"
                onClick={() => {
                  this.showDetail(item);
                }}
              >
                {item.actName}
              </button>
              <Interested
                isInterested={
                  this.state.interestedList.indexOf(item.actId) > -1
                }
                onClick={() => this.handleClick(item.actId)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

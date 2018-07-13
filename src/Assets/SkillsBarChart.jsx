import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import SkillsStyles from '../Styles/SkillsStyles.css';


class SkillsBarChart extends Component {
  render() {
    const focus = [
      {name: 'Group 1', value: 100},
      {name: 'Group 2', value: 200},
      {name: 'Group 3', value: 600},
      {name: 'Group 4', value: 800},
      {name: 'Group 5', value: 400},
      {name: 'Group 6', value: 300},
      {name: 'Group 7', value: 800},
      {name: 'Group 8', value: 600},
      {name: 'Group 9', value: 500}

    ];
    return(
    <ResponsiveContainer className="bar-container">
      <BarChart className="bar-chart" layout="vertical" data={focus} barSize={100} barGap={100}>


          <Bar dataKey="value" fill="#purple" barGap={100} />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />
          <Bar dataKey="value" fill="#82ca9d" />

      </BarChart>
    </ResponsiveContainer>
    );
  }
}
export default SkillsBarChart;

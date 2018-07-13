import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,Tooltip } from 'recharts';
import SkillsStyles from '../Styles/SkillsStyles.css';


class SkillsBarChart extends Component {
  render() {
    const focus = [
      {name: 'Group 1', value: 500},
      {name: 'Group 2', value: 600},
      {name: 'Group 3', value: 700},
      {name: 'Group 4', value: 800},
      {name: 'Group 5', value: 900},
      {name: 'Group 6', value: 200},
      {name: 'Group 7', value: 100},
      {name: 'Group 8', value: 400},
      {name: 'Group 9', value:  550}

    ];
    return(
    <ResponsiveContainer className="bar-container">
        <BarChart width={730} height={250} data={focus}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis nameKey="name" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
              <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
    );
  }
}
export default SkillsBarChart;

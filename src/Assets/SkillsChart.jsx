import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';




class SkillsChart extends Component {






  render() {
    {props.languages}
    {props.focus}

    return(


        <ResponsiveContainer width={600} height={600}>
        <PieChart width={730} height={250}>
          <Pie data={languages} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={focus} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default SkillsChart;

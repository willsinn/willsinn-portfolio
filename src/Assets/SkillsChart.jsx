import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';




class SkillsChart extends Component {






  render() {
    const data01 = [{name: 'Group A', value: 400},
                    {name: 'Group B', value: 300}
                  ];

    const data02 = [
      {name: 'Group C', value: 300},
      {name: 'Group D', value: 200}
    ];

    return(


        <ResponsiveContainer width={600} height={600}>
        <PieChart width={730} height={250}>
          <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default SkillsChart;

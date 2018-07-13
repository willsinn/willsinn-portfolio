import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import SkillsStyles from '../Styles/SkillsStyles.css';




class SkillsPieChart extends Component {



  render() {
    const languages = [{name: 'JavaScript', value: 500},
                    {name: 'CSS StylesSheets', value: 150},
                    {name: 'HTML', value: 150}
                  ];

    const focus = [
      {name: 'React', value: 300},
      {name: 'Group D', value: 300}
    ];

    return(


        <ResponsiveContainer className="pie-container">
        <PieChart>
          <Pie data={languages} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
          <Pie data={focus} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={110} outerRadius={140} fill="#82ca9d" label />
        </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default SkillsPieChart;

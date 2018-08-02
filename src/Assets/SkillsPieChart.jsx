import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();
class SkillsPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
      activeIndex: [0],
      animation: false,
    }
  }
  onPieOver = (data, index, e) => {
    this.setState({
      activeIndex: index,
    });
  };
  handleChangeAnimation = () => {
      this.setState({
        animation: !this.state.animation,
      });
    };
  handleOver = (e, activeIndex) => this.setState({ activeIndex: []  });
  handleOut = () => this.setState({ activeIndex: [-1] });
renderLabelContent = (props) => {
const { value, percent, x, y, midAngle } = props;
 return(<text x={0} y={0}>{`Count: ${value}`}</text>);}
  render() {
    const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text className="hover-text-name" x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill} >
          {payload.name}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="green">
          {`Focus: ${(percent * 100).toFixed(2)}%`}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={36} textAnchor={textAnchor} fill="purple" >
          {`Value: ${payload.value}`}
        </text>
      </g>
    );
  };
  const web = [
    { name: 'JavaScript', value: 500 },
    { name: 'CSS StylesSheets', value: 150},
    { name: 'HTML', value: 150}
  ];
  const focus = [
    { name: 'React', value: 200 },
    { name: 'Charts', value: 40 },
    { name: 'Design', value: 50 },
    { name: 'Typescript', value: 10 },
    { name: 'Google APIs', value: 20 },
    { name: 'HTML5', value: 60 },
    { name: 'ES6', value: 70 },
    { name: 'ES5', value: 100 }
  ];
    const skills = { web, focus };

    return(
        <ResponsiveContainer className="pie-container">
        <PieChart onMouseOver= {this.handlePieChartOver}>
          <Pie
           data={web}
           dataKey="value"
           nameKey="name"
           cx="50%"
           cy="50%"
           outerRadius="40%"
           fill="red"
           label=""
           />
          <Pie
          data={focus}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="50%"
          fill="red"
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          onMouseOver={this.onPieOver}
          isAnimationActive={false}
          >
          {
            web.map((skill, index) => (
          <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
           ))
          }
         </Pie>
        </PieChart>
        </ResponsiveContainer>
    );
  }
}
export default SkillsPieChart;

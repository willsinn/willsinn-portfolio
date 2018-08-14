import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const colors = scaleOrdinal(schemeCategory10).range();
class OuterPieChart extends Component {
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
    return(<text x={0} y={0}>{`Count: ${value}`}</text>);
  }
  render() {
    const { classes } = this.props;

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
    const skills = { focus };
    const RADIAN = Math.PI / 180;
    const renderActiveOuter = (props) => {
      const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius) * cos;
      const sy = cy + (outerRadius) * sin;
      const mx = cx + (outerRadius) * cos;
      const my = cy + (outerRadius) * sin;
      const ex = mx - (cos >= 0 ? 1 : -1) * 50;
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
            innerRadius={outerRadius}
            outerRadius={outerRadius}
            fill={fill}
          />
          <text className="hover-text-name" x={ex - (cos >= 0 ? 1 : -1) * 50} y={ey} textAnchor={textAnchor} fill="white" >
            {payload.name}
            {`${(percent * 100).toFixed(2)}%`}
            {`${payload.value}`}
          </text>
        </g>
      );
    };

    const outerStaticLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, index }) => {
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = ex > cx ? 'start' : 'end';
      return (
        <g>
          <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill} >
            {payload.name}:{`${(percent * 100).toFixed(0)}%`}
          </text>
        </g>
      );
    };
    return(
        <ResponsiveContainer className={classes.root}>

        <PieChart className={classes.pieChartContainer} onMouseOver= {this.handlePieChartOver}>
         <Pie className={classes.outerPie}
          data={focus}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="48%"
          outerRadius="60%"
          fill=""
          labelLine={false}
          label={outerStaticLabel}
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveOuter}
          onMouseOver={this.onPieOver}
          onMouseOut={this.handleOut}
          isAnimationActive={false}
          >
          {
            focus.map((name, index) => (
          <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
           ))
          }
         </Pie>
        </PieChart>
        </ResponsiveContainer>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
  },
  pieChartContainer: {
    width: '750px',
    height: '400px',
  },
  outerPie: {},
  outerStaticLabels: {},
  innerStaticLabelText: {},

});





export default withStyles(styles, {})(OuterPieChart);

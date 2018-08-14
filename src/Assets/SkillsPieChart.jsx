import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const colors = scaleOrdinal(schemeCategory10).range();
class SkillsPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
      activeOuter: [],
      activeInner: [],
      animation: false,
    }
  }
  onInnerMouseOver = (data, index, e) => {
    this.setState({
      activeInner: index,
    });
  };
  onOuterPieOver = (data, index, e) => {
    this.setState({
      activeOuter: index,
    });
  };
  handleChangeAnimation = () => {
      this.setState({
        animation: !this.state.animation,
      });
    };
  handleOuterMouseOut = () => this.setState({ activeOuter: [-1] });
  handleInnerMouseOut = () => this.setState({ activeInner: [-1] });

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
    const web = [
      { name: 'JS', value: 500},
      { name: 'CSS', value: 150},
      { name: 'HTML', value: 150}
    ];
    const skills = { focus, web };
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
    const INNERCOLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const renderActiveInner = (props) => {
      const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
      const cos = 0.5 * Math.cos(midAngle * -RADIAN);
      const sin = 0.5 * Math.sin(midAngle * -RADIAN);
      const sx = cx + (outerRadius) * cos;
      const sy = cy + (outerRadius) * sin;
      const mx = cx + (outerRadius) * cos;
      const my = cy + (outerRadius) * sin;
      const ex = mx - (cos >= 0 ? 1 : -1) * 30;
      const ey = my;
      const textAnchor = ex > cx ? 'start' : 'end';

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
        <text className="hover-text-name" x={ex} y={ey} textAnchor={textAnchor} fill="white" >
            {payload.name}
            {`${(percent * 100).toFixed(2)}%`}
            {`${payload.value}`}
          </text>
        </g>
      );
    };
    const innerStaticLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index, payload }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" className={classes.innerStaticLabelText}>
          {payload.name}
        </text>
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
        <PieChart className={classes.pieChartContainer} >
          <Pie className={classes.InnerPieChart}
           data={web}
           dataKey="value"
           nameKey="name"
           cx={350}
           cy={250}
           innerRadius={0}
           outerRadius={120}
           fill=""
           labelLine={false}
           label={innerStaticLabel}
           activeIndex={this.state.activeInner}
           activeShape={renderActiveInner}
           onMouseOver={this.onInnerMouseOver}
           onMouseOut={this.handleInnerMouseOut}
           isAnimationActive={false}
           >
           {
             web.map((name, index) => (
               <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
               ))
           }
         </Pie>
         <Pie className={classes.outerPie}
          data={focus}
          dataKey="value"
          nameKey="name"
          cx={350}
          cy={250}
          innerRadius={130}
          outerRadius={160}
          fill=""
          labelLine={false}
          label={outerStaticLabel}
          activeIndex={this.state.activeOuter}
          activeShape={renderActiveOuter}
          onMouseOver={this.onOuterPieOver}
          onMouseOut={this.handleOuterMouseOut}
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
    zIndex: '5',
    position: 'absolute',
  },
  pieChartContainer: {

  },
  outerPie: {},
  outerStaticLabels: {},
  innerStaticLabelText: {},

});





export default withStyles(styles, {})(SkillsPieChart);

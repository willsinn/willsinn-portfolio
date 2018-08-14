import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const colors = scaleOrdinal(schemeCategory10).range();
class InnerPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
      activeInner: [0],
      animation: false,
    }
  }
  onPieOver = (data, index, e) => {
    this.setState({
      activeInner: index,
    });
  };
  handleChangeAnimation = () => {
      this.setState({
        animation: !this.state.animation,
      });
    };
  handleOver = (e, activeInner) => this.setState({ activeInner: []  });
  handleOut = () => this.setState({ activeInner: [-1] });

  render() {
  const { classes } = this.props;
  const web = [
    { name: 'CSS', value: 150},
    { name: 'JS', value: 500},
    { name: 'HTML', value: 150}
  ];
  const skill = web;
  const RADIAN = Math.PI / 180;
  const INNERCOLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const renderActiveInner = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
    const cos = 0.5 * Math.cos(midAngle * -RADIAN);
    const sin = Math.sin(midAngle * -RADIAN);
    const sx = cx + (outerRadius) * cos;
    const sy = cy + (outerRadius) * sin;
    const mx = cx + (outerRadius) * cos;
    const my = cy + (outerRadius) * sin;
    const ex = mx;
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
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill={fill}
        />
      <text className="hover-text-name" x={ex-20} y={ey} textAnchor={textAnchor} fill="white" >
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


    return(
      <ResponsiveContainer className={classes.root}>
        <PieChart className={classes.pieChartContainer} onMouseOver= {this.handlePieChartOver}>
        <Pie className={classes.InnerPieChart}
         data={web}
         dataKey="value"
         nameKey="name"
         cx={350}
         cy={250}
         innerRadius={0}
         outerRadius={135}
         fill=""
         labelLine={false}
         label={innerStaticLabel}
         activeIndex={this.state.activeInner}
         activeShape={renderActiveInner}
         onMouseOver={this.onPieOver}
         onMouseOut={this.handleOut}
         isAnimationActive={false}
         >
         {
           web.map((name, index) => (
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
    position: 'relative',
    zIndex: '5',

},
  absoluteContainer: {

  },
  innerLabels: {
    color: 'rgba(0, 0, 0, 0.4)',
    position: 'inside',
  },
});

export default withStyles(styles, {})(InnerPieChart);

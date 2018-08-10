const renderActiveInner = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cx + radius * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > cx ? 'start' : 'end';
  return (
        <g>
    <Sector
      cx={cx}
      cy={cy}
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
      outerRadius={outerRadius}
      fill={fill}
    />

  <path d={`${x},${y}`} stroke={fill} fill="none" />
      <text className="hover-text-name" x={x} y={y} textAnchor={textAnchor} fill="white" >
        {payload.name}
        {`${(percent * 100).toFixed(2)}%`}
        {`${payload.value}`}
        Inner
      </text>
    </g>
  );
};

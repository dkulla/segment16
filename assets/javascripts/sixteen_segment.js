/*sixteen_segment.js*/
$(function(){
  var svg = d3.select('#segment16').append('svg').attr('width', 1000).attr('height', 1000);
  svgVertSegment(svg, 10, 40, null);
});

function svg_circle(svg, x, y, r) {
  return svg.append('circle')
  .attr('cx', x)
  .attr('cy', y)
  .attr('r', r);
}

function svgVertSegment(svg, x, y, id) {
  var vertices = [
    {'x': 0.0,  'y': 0.0 },
    {'x': 10.0, 'y': -20.0},
    {'x': 20.0, 'y': 0.0 },
    {'x': 20.0, 'y': 80.0},
    {'x': 10.0, 'y': 100.0},
    {'x': 0.0,  'y': 80.0}
  ]
  return svg.selectAll('polygon')
  .data([vertices])
  .enter()
  .append('polygon')
  .attr("points", function(data) {
    return data.map(function(coordinate) {
      return [coordinate.x + x, coordinate.y + y].join(',');
    }).join(' ');
  })
  .attr('stroke', 'red')
  .attr('stroke-width', 2)
  .attr('fill', 'transparent');
}
<template></template>
<style scoped>
</style>

<script>
export default {
  name: "Graphs",
  mounted() {
    var treeData = [
      {
        name: "ashesh",
        children: [
          {
            name: "ashesh a",
            children: [
              {
                name: "ashes all song",
              },
              {
                name: "ashesh amin",
              },
              {
                name: "ashesh ambasta itc",
              },
              {
                name: "ashesh agarwal",
              },
              {
                name: "ashesh acharya",
              },
              {
                name: "ashes and snow",
              },
              {
                name: "ashesh alkesh & co",
              },
              {
                name: "ashesh agrawal",
              },
              {
                name: "ashes in the snow",
              },
            ],
          },
          {
            name: "ashesh b",
            children: [
              {
                name: "ashesh badani",
              },
              {
                name: "ashesh bharadwaj",
              },
              {
                name: "ashesh bhumkar",
              },
              {
                name: "ashesh brothers",
              },
              {
                name: "ashesh biswas ips",
              },
              {
                name: "ashesh bandyopadhyay",
              },
              {
                name: "ashesh bhushan",
              },
              {
                name: "ashesh blog",
              },
              {
                name: "ashesh buch md",
              },
            ],
          },
          {
            name: "ashesh c",
            children: [{}],
          },
          {
            name: "ashesh d",
            children: [{}],
          },
          {
            name: "ashesh e",
            children: [{}],
          },
          {
            name: "ashesh f",
            children: [{}],
          },
          {
            name: "ashesh g",
            children: [{}],
          },
          {
            name: "ashesh h",
            children: [{}],
          },
          {
            name: "ashesh i",
            children: [{}],
          },
          {
            name: "ashesh j",
            children: [{}],
          },
          {
            name: "ashesh k",
            children: [{}],
          },
          {
            name: "ashesh l",
            children: [{}],
          },
          {
            name: "ashesh m",
            children: [{}],
          },
          {
            name: "ashesh n",
            children: [{}],
          },
          {
            name: "ashesh o",
            children: [{}],
          },
          {
            name: "ashesh p",
            children: [{}],
          },
          {
            name: "ashesh q",
            children: [{}],
          },
          {
            name: "ashesh r",
            children: [{}],
          },
          {
            name: "ashesh s",
            children: [{}],
          },
          {
            name: "ashesh t",
            children: [{}],
          },
          {
            name: "ashesh u",
            children: [{}],
          },
          {
            name: "ashesh v",
            children: [{}],
          },
          {
            name: "ashesh w",
            children: [{}],
          },
          {
            name: "ashesh x",
            children: [{}],
          },
          {
            name: "ashesh y",
            children: [{}],
          },
          {
            name: "ashesh z",
            children: [{}],
          },
        ],
      },
    ];
    // ************** Generate the tree diagram	 *****************
    var margin = { top: 20, right: 120, bottom: 20, left: 120 },
      width = 1080 - margin.right - margin.left,
      height = 960 - margin.top - margin.bottom;

    var i = 0,
      duration = 750,
      root;

    var tree = d3.layout.tree().size([height, width]);

    var diagonal = d3.svg.diagonal().projection(function (d) {
      return [d.y, d.x];
    });

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    d3.select(self.frameElement).style("height", "500px");

    function update(source) {
      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function (d) {
        d.y = d.depth * 180;
      });

      // Update the nodes…
      var node = svg.selectAll("g.node").data(nodes, function (d) {
        return d.id || (d.id = ++i);
      });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", click);

      nodeEnter
        .append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      nodeEnter
        .append("text")
        .attr("x", function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
          return d.name;
        })
        .style("fill-opacity", 1e-6);

      // Transition nodes to their new position.
      var nodeUpdate = node
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      nodeUpdate
        .select("circle")
        .attr("r", 10)
        .style("fill", function (d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

      nodeUpdate.select("text").style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      nodeExit.select("circle").attr("r", 1e-6);

      nodeExit.select("text").style("fill-opacity", 1e-6);

      // Update the links…
      var link = svg.selectAll("path.link").data(links, function (d) {
        return d.target.id;
      });

      // Enter any new links at the parent's previous position.
      link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      // Transition links to their new position.
      link.transition().duration(duration).attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
  },
};
</script>

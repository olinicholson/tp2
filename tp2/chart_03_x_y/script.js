d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "eva_mision_hs",
      }),
    ],
    grid: true,
  });
  d3.select("#chart").append(() => chart);
});

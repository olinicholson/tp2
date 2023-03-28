d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "anio_mision",
        y: "nacionalidad",
        r:"mision_hs",
        fill: "genero",
        fillOpacity: 0.5
      }),
     
    ],
    grid: true,
    marginLeft: 140,
    x:{
      domain: [2009,2020],
    },
    color: {
      range: ["pink","blue"],
      legend: true,
    }

    
  });
  d3.select("#chart_03").append(() => chart);
});

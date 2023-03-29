d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX({ y: "count" }, { x: "genero" , fill: "genero"})
      )
    ],
    grid: true,
    color: {
      range  : ["#F77070", '#6EADD9'],
    },
    x: {
      line: true,
      tickPadding: 15,
      labelAnchor: "left",
      label: null,
  
    },
    marginLeft: 20,
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart_04').append(() => chart)
})
  

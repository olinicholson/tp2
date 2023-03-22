d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barY(data, {
          y: "mision_hs",
          x: "ocupacion",
          fill: "ocupacion"
        }),
      ],

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart_04').append(() => chart)
  })
  

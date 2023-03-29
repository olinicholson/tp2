d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.line(data,
          Plot.groupX({ y: "count" }, { x: "anio_mision" ,
           y: "mision_hs", fill: "anio_mision"})
        )
      ],
      marginLeft: 50,

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart_02').append(() => chart)
  })
  

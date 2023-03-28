d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX({ y: "sum" }, { x: "nacionalidad" , y: "mision_hs", fill: "nacionalidad"})
      )
    ],
    grid: true,
    
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart_05').append(() => chart)
})
  
  
  
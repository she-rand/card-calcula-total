
 
 let cantidad = document.querySelector('#cantidadInput')
 let precio=document.querySelector('.precio')
 let color=document.querySelector('#colorInput')
 let precioUnidad=400000
 let cantidadOutput=document.querySelector('#cantidad')
 let totalOutput=document.querySelector('.total')
 let colorOutput=document.querySelector('.circulo')




 boton.addEventListener('click', () => {
    console.log(cantidad.value)
    console.log(color.value)
    let resultado=Number(cantidad.value)*precioUnidad
    colorOutput.style.backgroundColor=color.value
    totalOutput.textContent=`Total:$ ${resultado}`
    cantidadOutput.textContent=`Cantidad: ${cantidad.value}`

})
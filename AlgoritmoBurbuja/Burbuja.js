/*
Recorre el arreglo múltiples veces.
Compara elementos adyacentes y los
intercambia si están en el orden incorrecto.
Repite hasta que no se necesiten más
intercambios.
*/

// Función Bubble Sort con 2 for anidados
function bubbleSort(arr) {
    let n = arr.length;
    console.log("Inicio:", arr);
    
    // Primer for: recorre el arreglo n-1 veces
    for (let i = 0; i < n - 1; i++) {
        
        // Segundo for: compara elementos adyacentes
        for (let j = 0; j < n - i - 1; j++) {
            
            // Si están en orden incorrecto, intercambiar
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                console.log(arr);
            }
        }
    }
    
    return arr;
}

// Ejemplo
bubbleSort([5, 2, 8, 1, 9]);
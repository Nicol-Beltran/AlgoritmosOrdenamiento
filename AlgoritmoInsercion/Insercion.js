// Función Insertion Sort
function insertionSort(arr) {
    let n = arr.length;
    console.log("Inicio:", arr);
    
    // Primer for: toma cada elemento desde la posición 1
    for (let i = 1; i < n; i++) {
        let elementoActual = arr[i];
        let j = i - 1;
        
        // Segundo for (while): mueve elementos mayores hacia la derecha
        while (j >= 0 && arr[j] > elementoActual) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Inserta el elemento en su posición correcta
        arr[j + 1] = elementoActual;
        
        console.log(arr);
    }
    
    return arr;
}

// Ejemplo
insertionSort([5, 2, 8, 1, 9]);
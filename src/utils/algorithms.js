export const b = `void bubbleSort(int array[], int size) {

    // loop to access each array element
    for (int step = 0; step < size; ++step) {
        
      // loop to compare array elements
      for (int i = 0; i < size - step; ++i) {
  
        // compare two adjacent elements
        // change > to < to sort in descending order
        if (array[i] > array[i + 1]) {
  
          // swapping elements if elements
          // are not in the intended order
          int temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
  }`

export const i = `void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
 
        // Move elements of arr[0..i-1],
        // that are greater than key, 
        // to one position ahead of their
        // current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`


export const se = `void selectionSort(int arr[], int n) 
{ 
    int i, j, min_idx; 
  
    // One by one move boundary of 
    // unsorted subarray 
    for (i = 0; i < n - 1; i++) { 
  
        // Find the minimum element in 
        // unsorted array 
        min_idx = i; 
        for (j = i + 1; j < n; j++) { 
            if (arr[j] < arr[min_idx]) 
                min_idx = j; 
        } 
  
        // Swap the found minimum element 
        // with the first element 
        if (min_idx != i) 
            swap(arr[min_idx], arr[i]); 
    } 
}`

export const comp = [
  {
    "name": "insertionSort",
    "description": "Insertion sort iterates over an array, removing one element from the input data, finds the location it belongs to in the already-sorted part of the array, and shifts the larger elements to the right.",
    "bestCase": "O(n)",
    "worstCase": "O(n^2)",
    "averageCase": "O(n^2)"
  },
  {
    "name": "selectionSort",
    "description": "Selection sort divides the array into two parts: sorted and unsorted. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part.",
    "bestCase": "O(n^2)",
    "worstCase": "O(n^2)",
    "averageCase": "O(n^2)"
  },
  {
    "name": "bubbleSort",
    "description": "Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    "bestCase": "O(n)",
    "worstCase": "O(n^2)",
    "averageCase": "O(n^2)"
  },

]

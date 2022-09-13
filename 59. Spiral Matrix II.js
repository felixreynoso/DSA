var generateMatrix = function(n) {
    var matrix = Array(n);

    for (var i = 0; i < n; i++){
        matrix[i] = Array(n).fill(0);
    }

    // The bounds of the problem
    var left = 0;
    var right = n-1;

    // Placeholder for our target values
    var tmp = 1;

    if (n == 1) {
        return [[1]];
    }

    while (left <= right) {
        // Initialize the new origin to the top left most position of this inner layer
        var i = left, j = left;

        // If the this square matrix has en uneven number of rows and columns
        // and there exists one lonly cell at the center. Fill the cell and return
        if (left == right && n % 2 != 0){
            matrix[left][right] = tmp;
            return matrix;
        }

        // Fill top row from left to right, exclude last column
        while (j < right) {
            matrix[i][j] = tmp;
            tmp += 1;
            j += 1;
        }
        // Fill right column starting from top right, downwards.
        while (i < right) {
            matrix[i][j] = tmp;
            tmp += 1;
            i += 1;
        }

        // Fill bottom row, from right to left
        while (j > left) {
            matrix[i][j] = tmp;
            tmp += 1;
            j -= 1;
        }

        // Fill Left column bottom to top
        while (i > left) {
            matrix[i][j] = tmp;
            tmp += 1;
            i -= 1;
        }

        // Update the bounds to work on the inner frame
        left += 1;
        right -= 1;
    }

    return matrix;
};

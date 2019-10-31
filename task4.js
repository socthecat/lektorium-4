function task4(R, C, r0, c0) {
    let position = [r0, c0];
    let index = 0;
    
    let result = [position];
    
    let a = 1;
    let b = 2;
    
    function switchIndex() {
        index = index + 1 > 3 ? 0 : index + 1;
    }
    
    while (result.length < R*C) {
        let area = b ** 2;
        
        while (a <= area) {
            let isLast = a === area - 1;
            
            switch (index) {
                case 0:
                    c0++;
                    if (!isLast && c0 + 1 >= position[1] + b) {
                        switchIndex();
                    }
                    break;
                case 1:
                    c0--;
                    if (!isLast && c0 - 1 <= position[1] - b) {
                        switchIndex();
                    }
                    break;
                case 2:
                    r0++;
                    if (!isLast && r0 + 1 >= position[0] + b) {
                        switchIndex();
                    }
                    break;
                case 3: 
                    r0--;
                    if (!isLast && r0 - 1 <= position[0] - b) {
                        switchIndex();
                    }
                    break;
            }
            
            if (c0 >= 0 && c0 < C && r0 >= 0 && r0 < R) {
                result[result.length] = [r0, c0];
            }
            a++;
        }
        
        position = [r0, c0];
        b++;
    }
    return result;
};
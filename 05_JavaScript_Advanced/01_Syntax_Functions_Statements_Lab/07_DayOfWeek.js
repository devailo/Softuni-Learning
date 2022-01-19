function demo(input){

    let result ;
    switch (input) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;

        default:console.log('error');
            
    }
    if (result > 0) {
        console.log(result); 
    }
}
demo('Monday');
demo('Friday');
demo('Invalid');

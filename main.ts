LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();
LCD1IN8.LCD_Filling(0)

let pika_run = displayPikachuRun();
displayImage(10, 10, 2, pika_run.listOfColor, pika_run.width, pika_run.height,
    pika_run.transparencyColor, pika_run.numberOfOccurence, -1);
/*
let pika_stay = displayPikachuStay()
displayImage(50, 50, 2, pika_stay.listOfColor, pika_stay.width, pika_stay.height,
    pika_stay.transparencyColor, pika_stay.numberOfOccurence, -1)
*/

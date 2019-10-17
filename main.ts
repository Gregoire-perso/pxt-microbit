LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

let aff = displayAffiche()
displayImage(5, 5, 1, aff.listOfColor, aff.width, aff.height,
    aff.transparencyColor, aff.numberOfOccurence, -1);

/*
let pika_run = displayPikachuRun();
displayImage(10, 10, 2, pika_run.listOfColor, pika_run.width, pika_run.height,
    pika_run.transparencyColor, pika_run.numberOfOccurence, -1);

control.waitMicros(2000);

let pika_stay = displayPikachuStay();
displayImage(70, 10, 2, pika_stay.listOfColor, pika_stay.width, pika_stay.height,
    pika_stay.transparencyColor, pika_stay.numberOfOccurence, -1);

*/
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();
LCD1IN8.LCD_Filling(0)

let pika_run = displayPikachuRun();
displayImage(10, 10, 4, pika_run.listOfColor, pika_run.width, pika_run.height,
    pika_run.transparencyColor, pika_run.numberOfOccurence, 0);


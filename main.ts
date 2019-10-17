LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

//LCD1IN8.LCD_Filling(0)

let pika = displayPikachu();
displayImage(10, 10, 4, pika.listOfColor, pika.width, pika.height,
    pika.transparencyColor, pika.numberOfOccurence);
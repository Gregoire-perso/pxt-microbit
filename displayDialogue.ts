function displayDialogue(x: number, y: number, text: string, color: number) {
    for (let i = 0; i < text.length; i++) {
        LCD1IN8.DisString(x + i * 7, y, text[i], color)
        LCD1IN8.LCD_DisplayWindows(x + i * 7, y, 7 * text.length + x, y + 15)

    }
} 
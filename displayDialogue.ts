function displayDialogue(text: string) {
    for (let i = 0; text.length; i++) {
        let partie_a_afficher = ""
        for (let j = 0; j < i; j++) {
            partie_a_afficher += text[j]
        }
        LCD1IN8.DisString(10, 10, partie_a_afficher, 0)
        LCD1IN8.LCD_DisplayWindows(10, 10, 7 * text.length + 10, 30)
    }
} 
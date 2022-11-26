export function isRussian(value) {
    const mask = /^[а-яА-ЯёЁ\s-]+$/
    if (mask.test(value)) {
        return true
    }
}
export function isPhone(value){
    if(value[0] === '+' && value[1] === '7') {
        return true
    }
    
} 
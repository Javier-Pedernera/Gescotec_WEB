const startTypingAnimation = (text, speed, setTypedText) => {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index <= text.length) {
            setTypedText(text.slice(0, index));
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, speed);

    return intervalId;
};

export default startTypingAnimation;

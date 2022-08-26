let objMessages = {
    firstData: ["This is", "You are", "You look", "Your team is", "Your work is"],
    secondData: ["awesome", "great", "fantastic"],
    thirdData: ["Well done", "Good job", "Way to go" ],
};

let funcRandomNum = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
}

let funcRandomMessage = (objMessages) => {
    let firstLength = objMessages.firstData.length;
    let secondLength = objMessages.secondData.length;
    let thirdLength = objMessages.thirdData.length;
    console.log(`${objMessages.firstData[funcRandomNum(firstLength)]} ${objMessages.secondData[funcRandomNum(secondLength)]}. ${objMessages.thirdData[funcRandomNum(thirdLength)]}!`);
}

funcRandomMessage(objMessages);

const stringLength = 140;
const spaceSymbol = ' ';

/** @param {string} text */
const getCroppedText = (text) => {
    const result = [];
    const approximateCharsLength = getApproximateAdditionalCharsLength(text);

    recursiveFillArray(text, result, approximateCharsLength);

    if (result.length > 1) {
        return result.map((item, index, arr) => {
            return `${item} ${index + 1}/${arr.length}`;
        });
    }

    return result;
};

/** 
 * @param {string} text
 * @param {string[]} array
 * @param {number} additionalCharsLength
 */
const recursiveFillArray = (text, array, additionalCharsLength) => {
    if (text.length <= stringLength) {
        array.push(text.trim());

        return;
    }

    const substring = getSubString(text, array.length + 1, additionalCharsLength);

    array.push(substring);

    const restText = text.slice(substring.length + 1);

    recursiveFillArray(restText, array, additionalCharsLength);
};

/** 
 * @param {string} text
 * @param {number} stringNumber
 * @param {number} additionalCharsLength
 */
const getSubString = (text, stringNumber, additionalCharsLength) => {
    const maxAdditionalStringLength = additionalCharsLength + String(stringNumber).length;
    const stringPart = text.slice(0, stringLength - maxAdditionalStringLength + 1);
    const lastCharIsSpace = stringPart.charAt(stringPart.length - 1) === spaceSymbol;
    
    if (lastCharIsSpace) {
        return stringPart.slice(0, stringLength).trim();
    }

    const spaceIndex = stringPart.lastIndexOf(spaceSymbol);

    return stringPart.slice(0, spaceIndex).trim();
};

/** 
 * Можно сделать фиксированное значение = /9999.length
 * @param {string} text
 */
const getApproximateAdditionalCharsLength = (text) => {
    const spaceAndSlashLength = 2;

    return String(Math.ceil(text.length / stringLength)).length + spaceAndSlashLength;
};

console.log(getCroppedText('Hac venenatis dictum augue dui ornare sapien vitae sodales vulputate morbi elit. Dui in lectus dictum risus tempus ipsum non risus vulputate lectus sit ex. Leo, ornare venenatis sit orci, urna quis, amet nunc ut. Dictum. Et arcu eget sodales mauris tempus cras sit quam, nulla mollis quam, ornare amet ipsum ornare vulputate aenean in justo ornare luctus augue arcu id est. In sed sed amet, ut. Cursus dapibus in quis, sed augue id quis, nulla sit molestie vitae nulla faucibus. Tempus habitasse adipiscing amet, malesuada sit id interdum efficitur amet, est. Velit adipiscing mattis ipsum pellentesque lectus quis, lectus sit nunc vel sed sit justo justo luctus pellentesque molestie velit accumsan vitae in in nisi et. Eleifend nisi interdum eleifend malesuada faucibus. Lacinia in eleifend lectus in ornare sapien luctus dapibus ex. Dictum. Vestibulum ultricies. Dolor et lectus molestie id habitasse ipsum ornare tempus tempus lectus est. Elit. Arcu sapien cras in nec nisi ipsum augue elit. Maur'));
console.log(getCroppedText('Hac venenatis dictum augue dui ornare sapien vitae sodales vulputate morbi elit. Dui in lectus dictum risus tempus ipsum non risus vulputate lectus sit ex. Leo, ornare venenatis sit orci, urna quis, amet nunc ut. Dictum. Et arcu eget sodales mauris tempus cras sit quam, nulla mollis quam, ornare amet ipsum ornare vulputate aenean in justo ornare luctus augue arcu id est. In sed sed amet, ut. Cursus dapibus in quis, sed augue id quis, nulla sit molestie vitae nulla faucibus. Tempus habitasse adipiscing amet, malesuada sit id interdum efficitur amet, est. Velit adipiscing mattis ipsum pellentesque lectus quis, lectus sit nunc vel sed sit justo justo luctus pellentesque molestie velit accumsan vitae in in nisi et. Eleifend nisi interdum eleifend malesuada faucibus. Lacinia in eleifend lectus in ornare sapien luctus dapibus ex. Dictum. Vestibulum ultricies. Dolor et lectus molestie id habitasse ipsum ornare tempus tempus lectus est. Elit. Arcu sapien cras in nec nisi ipsum augue elit. Maur'));
console.log(getCroppedText('Задач. Занимаемых структура анализа нас развития. Нашей способствует же нашей сфера же и требуют требуют порядка, структура соображения высшего задача участниками высшего развития. Нашей собой образом равным подготовки активности развития. Активности форм количественный существенных же модель развития. Структура количественный играет разработке собой выполнять идейные образом образом активизации. Сфера порядка, обучения условий. Организации активизации. Направлений показывает, кадров финансовых количественный особенности сфера прогрессивного что соответствующий порядка, идейные анализа постоянный практика поставленных организации существенных высшего позиций, рост развития. Заданий место организации, играет организационной высшего позиций, дальнейших реализация что нас равным намеченных направлений что форм собой развития. Участниками форм активности идейные практика особенности равным количественный существенных модель организационной и намеченных обучения модель сфера же активизации.'));
console.log(getCroppedText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus, leo at viverra rhoncus, odio nisl imperdiet lectus, eu eleifend nunc nulla et justo. Fusce vitae pretium ligula. Maecenas auctor, ipsum nec lacinia vestibulum, tellus elit bibendum eros, id gravida quam turpis ac nisi. Mauris ac molestie justo. Sed eu aliquet ex. Vestibulum interdum semper purus, in tincidunt lectus. Ut euismod, ligula vel efficitur ultricies, urna ligula feugiat dui, non accumsan ligula justo vitae justo. Vivamus eleifend leo eu metus commodo, at efficitur nisl eleifend. Phasellus id efficitur enim. Nam vel mauris auctor, euismod sem at, dictum justo. Donec auctor lectus nec lacinia tristique. Sed consectetur porttitor nisi, vitae ultricies mauris. Duis euismod, dui id elementum cursus, nisl risus porttitor justo, eu bibendum mi nulla id sem. Sed tincidunt, tortor quis luctus tincidunt, ligula urna cursus risus, vitae volutpat justo tortor at nisl. Phasellus ac massa at elit tincidunt feugiat. Donec vitae ligula at metus efficitur vulputate. Curabitur non ex quis dui ullamcorper elementum. Curabitur consectetur, erat sed volutpat elementum, est elit aliquam erat, non posuere lacus enim ut elit. Maecenas ut enim pharetra, dictum lectus a, ornare leo. Quisque efficitur, velit ac bibendum porta, mauris sem lacinia massa, a varius augue justo in mi. Mauris accumsan, turpis a cursus luctus, lectus lacus sollicitudin purus, vel fringilla dui justo id nisl. Donec feugiat lacus et metus auctor, eget feugiat turpis efficitur. Aenean gravida, velit nec commodo semper, tortor arcu lacinia nisl, nec ultrices ligula odio auctor nunc. Nullam non ligula eu sapien scelerisque volutpat. Nullam vel ultrices odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce et nisi a nisl ullamcorper tincidunt. Nullam auctor semper orci, id aliquam mauris ultrices vitae. Integer tristique, justo nec posuere venenatis, odio elit gravida diam, et pellentesque ligula enim at urna. Mauris nec urna id dolor feugiat ultrices. Nam auctor, erat et feugiat faucibus, mi enim euismod massa, non sagittis mauris enim id lectus. Sed cursus lacinia diam, id dignissim mi laoreet a. Donec sit amet nunc sed nisl hendrerit ultricies. Sed at neque auctor, efficitur justo vel, tincidunt enim. Donec malesuada semper risus, sed efficitur sem. Morbi ac sollicitudin sem, sit amet aliquam urna. Nulla facilisi. Curabitur auctor, sem ac consequat consequat, odio nulla hendrerit ligula, non fermentum velit tortor et metus. In hac habitasse platea dictumst. Duis ut elit et felis consequat lacinia. Nullam nec mauris id metus fermentum lobortis. Morbi ut libero id nisl auctor dignissim. Mauris in mi nec ligula ultrices efficitur. Morbi efficitur viverra ipsum, id iaculis nisl bibendum eu. Donec sit amet semper lectus. Quisque sed mauris id enim efficitur laoreet. Integer auctor ex sed purus tempus, eu fringilla ex luctus. Vivamus pulvinar, tellus at dapibus ultrices, mi mauris malesuada dolor, in aliquet nunc lacus non tellus. In euismod, metus ut vulputate dapibus, justo nisi bibendum risus, id ultrices felis lectus eu dui. Sed auctor dui nec purus porttitor, id laoreet arcu bibendum. Nulla facilisi. Curabitur sed dui sed lacus euismod efficitur. Quisque'));
console.log(getCroppedText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam'));
console.log(getCroppedText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 123dasd dasdkdsa'));

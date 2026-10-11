export function onlyThisCharInString(str: string, characterList: string[]): boolean {
    const allowedChars = new Set(characterList);

    return [...str].every(char => allowedChars.has(char));
}
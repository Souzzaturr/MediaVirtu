
export function decodeBase64(string64: string) {
    const bytes = Uint8Array.from(atob(string64), (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);

    return decoded    
}
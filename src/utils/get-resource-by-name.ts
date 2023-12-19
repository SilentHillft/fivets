export const getResourceByName = (name: string): any | undefined => {
    // @ts-ignore
    return global.exports?.[name];
}
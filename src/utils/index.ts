export const paramsToObject = (params: string) => {
    const obj = Object.fromEntries(new URLSearchParams(params));
    return obj;
}
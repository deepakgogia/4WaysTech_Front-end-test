export const getData = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(out => out);

}
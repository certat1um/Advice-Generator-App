export function handlerId(id) {
    id = String(id);
    id.length == 1 ? id = `00${id}` :
    id.length == 2 ? id = `0${id}` :
    id = id;

    return id;
}
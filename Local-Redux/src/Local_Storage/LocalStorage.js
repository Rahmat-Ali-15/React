export const LocalData = (key)=> {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
};

export const SaveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const delete_token = (key) => {
    localStorage.removeItem(key);
}
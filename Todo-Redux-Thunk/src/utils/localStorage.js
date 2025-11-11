/* 

@param{String} key

*/

export const loadData = (key) => {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
};

/* 

@param{key,data} (string, any data type)

*/

export const saveData = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
};

export const removeData = (key) => {
    localStorage.removeItem(key);
};
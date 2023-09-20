const employee = {
    name: 'Bob',
    streetAddress: '10 Florida Ave',
}

function updateEmployeeWithKeyAndValue(obj, key, val) {
    return {
        ...obj,
        [key]: val,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
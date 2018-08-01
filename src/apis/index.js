export const getJobListService = () => {
    return fetch('https://boiling-anchorage-83020.herokuapp.com/users/9/jobs.json', {
        method: 'GET',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': 'SsH1V6obEUjpJfjarxx1'
        }
    })
    .then(response => {
        console.log("*********************************");
        console.log(response);
        return response.json();
    })
    .catch(err => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(err);
        return err;
    })
}
//Post Job Api Service
export const postJobService = () => {

}
export const editJobService = () => {

}

export const getProfileService = () => {

}
export const editProfileService = () => {

}

export const editMemberService = () => {
    
}

//////////////////////////////////////

export const fetchDataService = () => {
    return fetch('https://boiling-anchorage-83020.herokuapp.com/users/9/jobs.json', {
        method: 'GET',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': 'SsH1V6obEUjpJfjarxx1'
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const postDataService = () => {
    return fetch('https://boiling-anchorage-83020.herokuapp.com/users/9/jobs.json', {
        method: 'POST',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': 'SsH1V6obEUjpJfjarxx1'
        },
        body: {

        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const deleteDataService = () => {
    return fetch('https://boiling-anchorage-83020.herokuapp.com/users/9/jobs.json', {
        method: 'DELETE',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': 'SsH1V6obEUjpJfjarxx1'
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export const updateDataService = () => {
    return fetch('https://boiling-anchorage-83020.herokuapp.com/users/9/jobs.json', {
        method: 'PUT',
        headers: {
            'Accept': '*',
            'Content-Type': 'application/json',
            'authentication_token': 'SsH1V6obEUjpJfjarxx1'
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}
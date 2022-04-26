import logo from './logo192.png';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null); 
  const [petId, setPetId] = useState(0);
  const [jsonPetObj, setJsonPetObj] = useState(null);
  const [jsonUserObj, setJsonUserObj] = useState(null);
  const [jsonOrderObj, setJsonOrderObj] = useState(null);
  const handleOnClickImageFolderPost=async()=>{
    try {
      
      let formData = new FormData();
      formData.append('petId',petId)
      formData.append('additionalMetadata','test')
      formData.append('file',  logo);
      
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/pet/${petId}/uploadImage`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((response) => {console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handlePetOnclickPost = async () => {
    try {
      var jsonpostpet = {
        "id": 643,
        "category": {
          "id": 13,
          "name": "Juneau"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 1,
            "name": "blabla"
          }
        ],
        "status": "available"
      }
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/pet`,
        data: jsonpostpet,
        headers: {
          'Content-Type': 'application/json;'
        }
      })
        .then((response) => { setPetId(response.data.id); setJsonPetObj(response.data);console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }

  const handlePetOnclickGet = async () => {
    try {

      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/pet/${petId}`,

      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handlePetOnclickPut = async () => {
    try {
      jsonPetObj.name = "test"
      axios({
        method: "PUT",
        url: `https://petstore.swagger.io/v2/pet`,
        data: jsonPetObj,
        headers: {
          'Content-Type': 'application/json;'
        }


      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handlePetOnclickDelete = () => {
    try { 
      axios({
        method: "DELETE",
        url: `https://petstore.swagger.io/v2/pet/${petId}`,

      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleUserOnclickPost = async () => {
    try {
      var jsonUser = {
        "id": 2,
        "username": "test",
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test",
        "phone": "05542485007",
        "userStatus": 1
      }
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/user`,
        data: jsonUser,
        headers: {
          'Content-Type': 'application/json;'
        }
      })
        .then((response) => { setJsonUserObj(jsonUser);console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handleUserError405OnclickPost = async () => {
    try {
      var jsonUser = {
        "id": 2,
        "username": "test",
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test",
        "phone": "05542485007",
        "userStatus": 1
      }
      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user`,
        data: jsonUser,
        // headers: {
        //   'Content-Type': 'application/json;'
        // }
      })
        .then((response) => {console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handleUserError415OnclickPost = async () => {
    try {
      
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/user`, 
        // headers: {
        //   'Content-Type': 'application/json;'
        // }
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handleUserWithArrayOnclickPost = async () => {
    try {
      let jsonUserArray=[
        {
          "id": 0,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        },
        {
          "id": 1,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        },
        {
          "id": 2,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        },
        {
          "id": 3,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        },
        {
          "id": 4,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        },
        {
          "id": 5,
          "username": "test",
          "firstName": "tt",
          "lastName": "tt",
          "email": "tt@tt.com",
          "password": "tt",
          "phone": "05076652367",
          "userStatus": 0
        }
      ] 
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/user/createWithArray`,
        data: jsonUserArray,
        headers: {
          'Content-Type': 'application/json;'
        }
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }

  const handleUserOnclickGet = async () => {
    try {

      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/${jsonUserObj.username}`,

      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handleUserOnclickPut = async () => {
    try {
      jsonUserObj.firstName = "testtwo"
      axios({
        method: "PUT",
        url: `https://petstore.swagger.io/v2/user/${jsonUserObj.username}`,
        data: jsonUserObj,
        headers: {
          'Content-Type': 'application/json;'
        }


      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) })


    } catch (error) {
      console.log(error)
    }
  }
  const handleUserOnclickDelete = async () => {
    try { 
      axios({
        method: "DELETE",
        url: `https://petstore.swagger.io/v2/user/${jsonUserObj.username}`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handleLoginOnclickGet = () => {
    try { 
      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/login?username=${jsonUserObj.username}&password=${jsonUserObj.password}`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogOutOnclickGet = async () => {
    try { 
      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/logout`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handlePetOrderOnclickPost = async () => {
    try { 
      let jsonOrder={
        "id": 1,
        "petId": 643,
        "quantity": 2,
        "shipDate": "2022-04-25T16:04:17.851Z",
        "status": "placed",
        "complete": true
      }
      axios({
        method: "POST",
        url: `https://petstore.swagger.io/v2/store/order`, 
        data:jsonOrder, 
      })
        .then((response) => { console.log(response); setJsonOrderObj(jsonOrder)   })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handleOrderOnclickGet = async () => {
    try { 
      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/store/order/${jsonOrderObj.id}`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handleOrderOnclickDelete = async () => {
    try { 
      axios({
        method: "DELETE",
        url: `https://petstore.swagger.io/v2/store/order/${jsonOrderObj.id}`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }
  const handleInventoryOnclickGet = async() => {
    try { 
      axios({
        method: "GET",
        url: `https://petstore.swagger.io/v2/store/inventory`, 
      })
        .then((response) => { console.log(response) })
        .catch(error => { console.log('the error has occured: ' + error) }) 
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <> 
   
      <h1> User </h1> 
      <button onClick={handleUserOnclickPost} name="post" class='primaryButton'>post</button><br />
      <button onClick={handleUserError405OnclickPost}>posterror wrong method 405</button><br />
      <button onClick={handleUserError415OnclickPost}>posterror wrong method 415</button><br />
      <button onClick={handleUserWithArrayOnclickPost}>post with list and array</button><br />
      <button onClick={handleUserOnclickGet}>get</button><br />
      <button onClick={handleUserOnclickPut}>put</button><br />
      <button onClick={handleUserOnclickDelete}>delete</button><br />
      <h1> Login/LogOut </h1> 
      <button onClick={handleLoginOnclickGet}>login</button><br /> 
      <button onClick={handleLogOutOnclickGet}>logout</button><br /> 
      <h1> Pet </h1> 
      <button onClick={handlePetOnclickPost}>post</button><br />
      <button onClick={handlePetOnclickGet}>get</button><br />
      <button onClick={handlePetOnclickPut}>put</button><br />
      <button onClick={handleOnClickImageFolderPost}>imageuploadpost</button><br /> 
      <button onClick={handlePetOnclickDelete}>delete</button><br />
      <h1> Store </h1> 
      <button onClick={handlePetOrderOnclickPost}>post</button><br />
      <button onClick={handleInventoryOnclickGet}>get Returns pet inventories by status</button><br />
      <button onClick={handleOrderOnclickGet}>get Find purchase order by ID</button><br />
      <button onClick={handleOrderOnclickDelete}>delete</button><br />
    </>
  )
}

export default App;

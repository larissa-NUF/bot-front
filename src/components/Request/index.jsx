import axios from 'axios';

const URL = import.meta.env.VITE_URL_BACK;
async function Request({rota}) {
  console.log(rota)
    axios.get(URL + rota).then(response => {
      console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
}
export default Request
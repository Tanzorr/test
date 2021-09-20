import axios from "axios";

const url ="http://77.120.241.80:8811/api/";

let api={
    getAll(){
      return   fetch(`${url}users`);
    },

    set(items,item) {
        return axios.post(`${url}${items}/`, {
            name:item.name,
            surname:item.surname,
            desc: item.desc,
            avatar:item.avatar
        })
    },

    edit(items,item, id) {
        return axios.put(`${url}${items}/${id}`, {
            name:item.name,
            surname:item.surname,
            desc: item.desc,
            avatar:item.avatar
        })
    },

    delete(item, id){
        return axios.delete(`${url}${item}/${id}`);
    }

}

export default api;
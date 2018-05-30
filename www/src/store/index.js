import vue  from 'vue'
import vuex from 'vuex'
import axios from 'axios'


let api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
state:{
  boards: [],
 

},
mutations: {
setBoards(state, boards){
  state.boards = boards
}
},
actions:{
  //get all boards
  getBoards({dispatch, commit}, ){
    api.get("api/boards")
    .then(res =>{
      console.log(res)
      commit('setBoards', res.data)
    })
    .catch(err => console.log(err))
  },

  //edit board
  editBoard({dispatch, commit, state}, board){
    api.put('api/boards/'+board._id, board)
    .then(res=>{
      console.log(res)
      // commit('setBoard', res.data)
    }).catch(err => console.log(err))
  },

  //create New board
  newBoard({dispatch, commit, state}, board){
    api.post('api/boards/', board)
    .then(res=>{
      console.log(res)
      //real content here
    })
  },

  //delete board  currrently deleting but returning 400
  deleteBoard({dispatch, commit, state}, boardId){
    api.delete('api/boards/'+boardId)
    .then(res=>{
      console.log("deleted")
      // commit('setBoard', res.data)
    }).catch(err => console.log(err))
  },

}
})
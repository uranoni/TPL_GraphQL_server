// const { RESTDataSource } = require('apollo-datasource-rest');

// class UserAPI extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = 'http://localhost:20202/api';
//   }
//   willSendRequest(request) {
//     request.headers.set('authorization', `Bearer ${this.context.token}`);
//   }
//   async verifyAdmin() {
//     const data = await this.post('/userdata');

//     const role = data.role
//     return { role }
//   }

// }

// module.exports = UserAPI;

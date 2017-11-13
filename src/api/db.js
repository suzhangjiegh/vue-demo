/**
 * Created by jie on 2017/11/13.
 * 模拟数据返回
 *
 * async await 的使用需要依靠Promise
 * resolve 成功
 * reject  失败 应用不会继续执行
 *
 * 使用Promise 将回调函数转换成可使用async await 例 getUserList，getUserDb
 *
 */
class DB{
	constructor(){

	}

	doPost(url, data) {
		return new Promise((resolve, reject) => {
			// 模拟http请求
			if (url == 'getUserList') {
				this.getUserDb(data, function (data) {
					if (data.code == 0) {
						resolve(data);
					} else {
						reject(data);
						// reject(new Error("错误的响应"));
					}
				})
			}
		});
	}


/*	//方法二
	async doPost(url,data){
		console.log("url:",url,"data:",data);
		if (url == 'getUserList'){
			return await this.getUserList(data);
		}
	}

	getUserList(data){
		console.log("data:",data);
		return new Promise((resolve, reject) =>{
			// 模拟http请求
			this.getUserDb(data,function (data) {
				if (data.code ==0){
					resolve(data);
				}else {
					reject(data);
				}
			})

		});
	}*/


	getUserDb(data,cb){
		console.log("http请求:",data);
		cb({
			code:0,  // code:-1,  code:0,
			tableData: [{
				registe_time: '2016-05-02',
				username: '王小虎',
				city: '上海市普陀区金沙江路 1518 弄'
			}, {
				registe_time: '2016-05-04',
				username: '王小虎',
				city: '上海市普陀区金沙江路 1517 弄'
			}, {
				registe_time: '2016-05-01',
				username: '王小虎',
				city: '上海市普陀区金沙江路 1519 弄'
			}, {
				registe_time: '2016-05-03',
				username: '王小虎',
				city: '上海市普陀区金沙江路 1516 弄'
			}],
			currentRow: null,
			offset: 0,
			limit: 20,
			count: 0,
			currentPage: 1,
		});
	}

}


const db = new DB();

export default db

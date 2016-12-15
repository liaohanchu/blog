$(function() {
		var config = {
			syncURL: "https://wild-boar-2988.wilddogio.com" //输入节点 URL
		};

		wilddog.initializeApp(config);
		var ref = wilddog.sync().ref();
});
//添加节点，输入表名称和数据结构
/*例如表名称为：user_info,数据结构为:
 {
	"lhc": {
		"name": "lhc",
		"psw": "lhc520"
	}
}
addData("user_info", {
	"lhc": {
		"name": "lhc",
		"psw": "lhc520"
	}
})
 */
var addData = function(tablename, data) {
	wilddog.sync().ref(tablename).update(data);
}

//删除表，把整张表删除，谨慎使用
var removeData = function(tablename) {
	wilddog.sync().ref(tablename).remove();
}

//精确查询，输入表名称、精确数据、数据处理方法，查询该数据下的具体数据
var equalTo = function(tablename, value, fn) {
	var _data;
	wilddog.sync().ref(tablename).orderByKey().equalTo(value).on("value", function(snapshot) {
		_data = snapshot.val();
		if(typeof fn === 'string' && typeof window[fn] === 'function') {
			window[fn]();
		} else if(typeof fn === 'function') {
			fn(_data);
		} else {
			console.log('equalTo param error');
		}
	});
}


//更新版本信息
/*var time = new Date();
var result = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
upDateEdition("v0.0.1", result);*/
var upDateEdition = function(edition_number, update_time) {
	wilddog.sync().ref("edition").on("value", function(snapshot, error) {
		if(error == null) {
			console.log("版本信息更新成功")
		} else {
			console.log("版本信息更新失败")
		}
	})

	var upeateOldupdateTime = function(data) {
		if(!data) {
			console.log("版本数据不存在")
		} else { 
			if(data.edition) {
				var _data = data.edition;
				wilddog.sync().ref("edition").update({
					"old_update_time": _data.update_time
				});
			}
		}
	}

	equalTo("", "edition", upeateOldupdateTime);

	wilddog.sync().ref("edition").update({
		"edition_number": edition_number,
		"update_time": update_time
	});
}
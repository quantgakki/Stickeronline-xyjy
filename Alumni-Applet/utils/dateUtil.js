//时间戳转换方法    date:时间戳数字
export const dateUtil={
	formatDate(date) {
	  var date = new Date(date.replace(/-/g, '/'));
	  var YY = date.getFullYear() + '-';
	  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	  return YY + MM + DD;
	},
	formatTime(date) {
	  var date = new Date(date.replace(/-/g, '/'));
	  var YY = date.getFullYear() + '-';
	  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	  return YY + MM + DD +" "+hh + mm + ss;
	}
}

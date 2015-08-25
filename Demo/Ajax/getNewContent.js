function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		// XMLHttpRequest对象方法：open().
		request.open("GET", "example.txt", true);

		// onreadystatechange是一个事件处理函数，它会在服务器給XMLHttpRequest对象送回响应的时候被触发执行。
		request.onreadystatechange = function(){
			/*
			 * readyState有五个可能值：
			 * 》0 表示未初始化
			 * 》1 表示正在加载
			 * 》2 表示加载完毕
			 * 》3 表示正在交互
			 * 》4 表示完成
			 */
			if (request.readyState == 4) {
				console.log('reponse received');
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};

		// 在明确了如何处理响应后，就可以用send方法来发送请求。
		request.send(null);
	} else {
		alert('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
	console.log('Function Done');
}
addLoadEvent(getNewContent);
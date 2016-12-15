$(function() {
	setFooter();
})

function setFooter() {
	var $footer = " " +
		"<footer class='pui-layout pui-layout-fixed pui-layout-fixed-1200 login-footer'>" +
		"<div class='copyright'>" +
		"<p>Copyright &copy; 2016-2018 <a href='' class='pui-link' title='Plane UI' target='_blank'>HanChu Liao</a> All Rights Reserved.</p>" +
		"<p>Powered by <a href='#top' class='pui-link' target='_blank'>Plane UI</a>, <a href=''  target='_blank' class='pui-link'>All Rights Reserved </a> License.<small class='pui-right'>代码如诗。</small></p>" +
		"</div>" +
		"</footer>";

	$("#content").append($footer);
}




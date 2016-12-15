$(function() {
	setBolgHeader();
	setbolgFooter();
});

var setBolgHeader = function() {
	var headerDiv = $("<div>", {
		"class": "pui-layout pui-bg-blue-500 blog-header-con"
	});
	$("#content").prepend(headerDiv);
	var header = $("<header>", {
		"class": "pui-center pui-layout-fixed pui-layout-fixed-1200 blog-header"
	});
	$(headerDiv).append(header);
	var blogName = $("<h2>Plane Blog<small class='pui-text-white'>官方博客</small></h2>");
	$(header).append(blogName)
	/*Menu-start*/
	var menu = $("<menu>", {
		"class": "pui-grid pui-row blog-menu"
	});
	$(header).append(menu);
	/*UlSum-start*/
	var ulsum = $("<ul>", {
		"class": "pui-menu pui-menu-inline pui-menu-radius pui-grid-xs-12 pui-grid-sm-8 pui-grid-md-8 pui-grid-lg-9 pui-xs-hide"
	});
	$(menu).append(ulsum);
	/*首页Tap start*/
	var index = $("<li><a href='../index.html'><i class='fa fa-home'></i> 首页</a></li>");
	$(ulsum).append(index);
	/*首页Tap end*/
	/*前端Tap start*/
	var front = $("<li><a href='#'> 前端<i class='pui-arrow-down'></i></a></li>");
	$(ulsum).append(front);
	var frontUl = $("<ul>", {
		"class": "pui-menu pui-menu-dropdown"
	});
	$(front).append(frontUl);
	var HTML5_CSS3_li = $("<li><a href='#'>HTML5 & CSS3</a></li>");
	var Javascript_li = $("<li><a href='#'>Javascript</a></li>");
	var jQuery_li = $("<li><a href='#'>jQuery</a></li>");
	var NodeJs_li = $("<li><a href='#'>Node.js</a></li>");
	$(frontUl).append(HTML5_CSS3_li);
	$(frontUl).append(Javascript_li);
	$(frontUl).append(jQuery_li);
	$(frontUl).append(NodeJs_li);
	/*前端Tap end*/
	/*后台Tap start*/
	var background = $("<li><a href='#'> 后台<i class='pui-arrow-down'></i></a></li>");
	$(ulsum).append(background);
	var backgroundUl = $("<ul>", {
		"class": "pui-menu pui-menu-dropdown"
	});
	$(background).append(backgroundUl);
	var JAVA_li = $("<li><a href='#'>JAVA</a></li>");
	$(backgroundUl).append(JAVA_li);
	/*后台Tap end*/
	/*设计Tap start*/
	var design = $("<li><a href='#'> 设计<i class='pui-arrow-down'></i></a></li>");
	$(ulsum).append(design);
	var designUl = $("<ul>", {
		"class": "pui-menu pui-menu-dropdown"
	});
	$(design).append(designUl);
	var PS_li = $("<li><a href='#'>PS</a></li>");
	$(designUl).append(PS_li);
	var WebDesign_li = $("<li><a href='#'>网页设计</a></li>");
	$(designUl).append(WebDesign_li);
	var UIDesign_li = $("<li><a href='#'>UI设计</a></li>");
	$(designUl).append(UIDesign_li);
	var PlaneDesign_li = $("<li><a href='#'>平面设计</a></li>");
	$(designUl).append(PlaneDesign_li);
	/*设计Tap end*/
	/*游记Tap start*/
	var travels = $("<li><a href='#'>游记</a></li>");
	$(ulsum).append(travels);
	/*游记Tap end*/
	/*关于我Tap start*/
	var about = $("<li><a href='#'>关于我</a></li>");
	$(ulsum).append(about);
	/*关于我Tap end*/
	/*UlSum-end*/
	//搜索
	var searchDiv = $("<div>", {
		"class": "pui-grid-xs-12 pui-grid-sm-4 pui-grid-md-4 pui-grid-lg-3 blog-search pui-xs-hide"
	});
	$(menu).append(searchDiv);
	var form = $("<form>", {
		"action": "",
		"method": "post",
		"class": "pui-search pui-round pui-search-large pui-search-unbordered pui-right"
	});
	$(searchDiv).append(form);
	var searchInput = $("<input type='text' name='keywords' class='pui-search-keywords' placeholder='搜索...' />");
	$(form).append(searchInput);
	var searchButton = $("<button type='submit' class='pui-search-submit' name='submit-pui-search' value=''></button>");
	$(form).append(searchButton);
	var searchUl = $("<ul>", {
		"class": "pui-list pui-search-auto-complete pui-shadow pui-hide"
	});
	$(form).append(searchUl);
	var Plane_seli = $("<li><a href=''>Plane</a></li>");
	$(searchUl).append(Plane_seli);
	/*Menu-end*/
	//手机图标
	var i_menu = $("<i class='fa fa-list fa-2x pui-xs-show' id='open-menu'></i>");
	$(header).append(i_menu);

}

var setbolgFooter = function() {
	var footer = $("<footer class='pui-center pui-layout-fixed pui-layout-fixed-1200 blog-footer'></footer>");
	$("#content").append(footer);
	var hr = $("<hr class='pui-xs-hide' />");
	$(footer).append(hr);
	var footerUl = $("<ul class='pui-breadcrumb pui-margin-none'></ul>")
	$(footer).append(footerUl);
	var index_ftli = $("<li><a href='../index.html'><i class='fa fa-home'></i> 首页</a></li>");
	var front_ftli = $("<li><a href=''>前端</a></li>");
	var background_ftli = $("<li><a href=''>后台</a></li>");
	var design_ftli = $("<li><a href=''>设计</a></li>");
	var travels_ftli = $("<li><a href=''>游记</a></li>");
	var about_ftli = $("<li><a href=''>关于我</a></li>");
	$(footerUl).append(index_ftli);
	$(footerUl).append(front_ftli);
	$(footerUl).append(background_ftli);
	$(footerUl).append(design_ftli);
	$(footerUl).append(travels_ftli);
	$(footerUl).append(about_ftli);
	var footerDesc=$("<div class='copyright'></div>");
	$(footer).append(footerDesc);
	var top=$("<span class='pui-right'><a href='#top' class='pui-link'>TOP</a></span>");
	$(footerDesc).append(top);
	var p1=$("<p>Copyright &copy; 2014-2015<a href='' class='pui-link' title='Plane UI's Blog' target='_blank'>Plane  Blog</a> All Rights Reserved.</p>");
	var p2=$("<p>Powered by<a href='' class='pui-link' target='_blank'>Plane UI</a>,<a href='' target='_blank' class='pui-link'>MIT</a> License.<small class='pui-right'>代码如诗。</small></p>");
	$(footerDesc).append(p1);
	$(footerDesc).append(p2);
}
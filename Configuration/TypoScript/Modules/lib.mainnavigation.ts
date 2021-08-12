lib.mainnavigation=HMENU
lib.mainnavigation{
    	wrap = <ul id="menu-main-menu" class="menu menu-main">|</ul>

	1 = TMENU
	1 {
		expAll = 1
		
		
		NO = 1
		NO{
			allWrap=<li>|</li>
			ATagBeforeWrap = 1
			stdWrap.wrap = <span>|</span>
			ATagTitle.field= description //subtitle // title
		}
		CUR=1
		CUR < .NO
		CUR.allWrap=<li class="current-menu-item">|</li>
	}


}
